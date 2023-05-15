import * as admin from "firebase-admin";
import serviceAccount from "@/permission.json";
import Stripe from "stripe";
import { NextRequest } from "next/server";

// Secure connection to firebase
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    })
  : admin.app();
//   establish connection to stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

async function fullFillOrder(session: Stripe.Checkout.Session) {
  return app
    .firestore()
    .collection("users")
    .doc(session.metadata!.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total! / 100,
      images: JSON.parse(session.metadata!.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`Success: Order ${session!.id} has been added to DB`);
    });
}
export async function POST(request: NextRequest) {
  let event = await request.json();
  // console.log(req);

  const endpointSecret = process.env.STRIPE_SIGNING_SECRET!;

  const sig = request.headers.get("stripe-signature")!;
  const bufferString = await request.json();
  try {
    // verify that event came from Stripe
    event = stripe.webhooks.constructEvent(bufferString, sig, endpointSecret);
  } catch (error) {
    console.log("⚠️  Webhook signature verification failed. ", error);
  }
  //   Handle checkout session completed event
  if ((event.type = "checkout.session.completed")) {
    const session = event.data.object as Stripe.Checkout.Session;

    //   fullfill the order
    try {
      if (session && app && session.metadata!.email) {
        fullFillOrder(session)
          .then(() => new Response("Webhook was Successfull"))
          .catch((e) => console.log(e));
      }
    } catch (error) {
      console.log("Error in Firebase : ", error);
    }
  }
}

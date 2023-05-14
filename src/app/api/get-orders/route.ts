import { NextRequest, NextResponse } from "next/server";
import * as admin from "firebase-admin";
import serviceAccount from "@/permission.json";

import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import Stripe from "stripe";
import { getFirestore } from "firebase-admin/firestore";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    })
  : admin.app();
const db = getFirestore();
export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("User not Logged In.");
  }
  if (session.user?.email) {
    // FIrebase DB
    const stripeOrders = await db
      .collection("users")
      .doc(session.user.email)
      .collection("orders")
      .orderBy("timestamp", "desc")
      .get();

    // Stripe Orders
    const orders = await Promise.all(
      (
        await stripeOrders
      ).docs.map(async (order) => ({
        id: order.id,
        amount: order.data().amount,
        images: order.data().images,
        timestamp: order.data().timestamp,
        items: (
          await stripe.checkout.sessions.listLineItems(order.id, { limit: 100 })
        ).data,
      }))
    );
    return NextResponse.json(orders);
  }
}

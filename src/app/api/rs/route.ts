import { NextResponse, NextRequest } from "next/server";
import * as admin from "firebase-admin";
import {
  initializeApp,
  applicationDefault,
  cert,
  getApps,
} from "firebase-admin/app";
import { getFirestore, Timestamp, FieldValue } from "firebase-admin/firestore";
import serviceAccount from "@/permission.json";
import { FirebaseOptions } from "firebase/app";

// import db from "@/firebase";
export async function GET(req: Request) {
  // const app = !admin.apps.length
  // ? admin.initializeApp({
  //     credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  //   })
  // : admin.app();

  const db = getFirestore();
  const res = await db.collection("users").doc("hello").collection;
  return new NextResponse();
}

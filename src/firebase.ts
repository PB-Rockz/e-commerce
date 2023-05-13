import { initializeApp, getApp, FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAPfMd1LEpZ0vwXckCAvlpoRsHNN6Md3Yk",
  authDomain: "amzn-2-4c7ea.firebaseapp.com",
  projectId: "amzn-2-4c7ea",
  storageBucket: "amzn-2-4c7ea.appspot.com",
  messagingSenderId: "539493934718",
  appId: "1:539493934718:web:7bc8f5c5908ef822539a2f",
};

function createFirebaseApp(config: FirebaseOptions) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;

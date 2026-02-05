import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "e19ad8a75d8ceed7c12cd4b369ca06da289c795e",
  authDomain: "ITSM-WEB-APP.firebaseapp.com",
  projectId: "itsm-web-app",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "615038701184",
  appId: "113087110284750096637"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvd02RPC_5O5q_9-CG3xxi0x12O7v31bw",
  authDomain: "session-client-4fd24.firebaseapp.com",
  projectId: "session-client-4fd24",
  storageBucket: "session-client-4fd24.firebasestorage.app",
  messagingSenderId: "703511317179",
  appId: "1:703511317179:web:cf60ace780e380843ab79e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0la3qv8kRJbLLHHX9DGQdP4OZFgOvfsM",
  authDomain: "prospai.firebaseapp.com",
  projectId: "prospai",
  storageBucket: "prospai.appspot.com",
  messagingSenderId: "977803603549",
  appId: "1:977803603549:web:f130a074db71aef83d27b4",
  measurementId: "G-L7JTV3SQSM"
};
 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export { getAuth };
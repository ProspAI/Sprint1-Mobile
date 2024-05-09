 // Import the functions you need from the SDKs you need

 import 'firebase/auth';
 import 'firebase/firestore'; 
 import { initializeApp } from "firebase/app";
 import { getAnalytics } from "firebase/analytics";
 import firebase from 'firebase/app';
 
 
 const firebaseConfig = {
   apiKey: "AIzaSyDeVTb41VBA7CLqC3dCOnpKRKDYyWnQxO0",
   authDomain: "mobilesprint2-55bfb.firebaseapp.com",
   projectId: "mobilesprint2-55bfb",
   storageBucket: "mobilesprint2-55bfb.appspot.com",
   messagingSenderId: "701650626132",
   appId: "1:701650626132:web:df4be3ee3f3df2ccc26fc1",
   measurementId: "G-NZ69MPZDHE"
 };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 
 //export{app,db,getFirestore,collection, addDoc, getDocs}
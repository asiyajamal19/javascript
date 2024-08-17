
// Import the functions you need from the SDKs you need
import { initializeApp , getApp} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getStorage, ref, uploadBytes, } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";;


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7PEnEHPtLch2vDru_p2UWrhzlOJKKMI4",
  authDomain: "newapp-hackathon.firebaseapp.com",
  projectId: "newapp-hackathon",
  storageBucket: "newapp-hackathon.appspot.com",
  messagingSenderId: "695579857571",
  appId: "1:695579857571:web:144db68436a2cd08f66516"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const storage = getStorage(app, "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js");


export {
  app,
  db,
  collection,
  addDoc,
  getDocs,
  setDoc
  , doc,
   auth
  , createUserWithEmailAndPassword
  , signInWithEmailAndPassword
  ,getAuth

  , getStorage
  , storage
  , ref
  , uploadBytes


}




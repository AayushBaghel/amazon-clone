import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2uv_WhcDVHFELbAFsfQUCFP21zneIJTw",
    authDomain: "clone-fb-cc1d7.firebaseapp.com",
    projectId: "clone-fb-cc1d7",
    storageBucket: "clone-fb-cc1d7.appspot.com",
    messagingSenderId: "397579704990",
    appId: "1:397579704990:web:2862972c47371d29a7798f",
    measurementId: "G-G3T3SR3L4G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
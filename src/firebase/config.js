import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-oZ_rvb_7q6cEQLk_-dL-ZeBGZCYCfGE",
  authDomain: "cookit-pro.firebaseapp.com",
  projectId: "cookit-pro",
  storageBucket: "cookit-pro.appspot.com",
  messagingSenderId: "476533413430",
  appId: "1:476533413430:web:9c339e754a009cfc9d2a97",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };

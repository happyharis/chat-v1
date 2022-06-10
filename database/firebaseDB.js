import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNBwvAl9KSoaZLMP7yNzvS45oBTARuYhs",
  authDomain: "chat-app-1ecc8.firebaseapp.com",
  projectId: "chat-app-1ecc8",
  storageBucket: "chat-app-1ecc8.appspot.com",
  messagingSenderId: "637373187097",
  appId: "1:637373187097:web:24f949db902ba9c0291688",
};

firebase.initializeApp(firebaseConfig);
export default firebase;

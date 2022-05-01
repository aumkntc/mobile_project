// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEiln0IWa_PzhVb0ADj14C3KWjvMceqeM",
  authDomain: "fir-auth-d08c5.firebaseapp.com",
  projectId: "fir-auth-d08c5",
  storageBucket: "fir-auth-d08c5.appspot.com",
  messagingSenderId: "383286895166",
  appId: "1:383286895166:web:f3b0ff5e5745752e58a76f"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
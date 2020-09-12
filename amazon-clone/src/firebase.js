import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFYgLAzMzv46kFY3U6TTW3KTeVPxuSAhg",
  authDomain: "e-clone-4c840.firebaseapp.com",
  databaseURL: "https://e-clone-4c840.firebaseio.com",
  projectId: "e-clone-4c840",
  storageBucket: "e-clone-4c840.appspot.com",
  messagingSenderId: "129303961265",
  appId: "1:129303961265:web:b441efe4d1c06650ab4c90",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

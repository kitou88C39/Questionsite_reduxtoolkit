import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNRncIO9UDrJ7W84QfWwBDu07p6CxEquY",
  authDomain: "quora-redux-firebase.firebaseapp.com",
  projectId: "quora-redux-firebase",
  storageBucket: "quora-redux-firebase.appspot.com",
  messagingSenderId: "895387063956",
  appId: "1:895387063956:web:a742e07d4c2ebc78750681",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;

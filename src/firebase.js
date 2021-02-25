import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCab8ltugBjjuMWYKkWnTP7wNIxz12gCvw",
  authDomain: "clone-yt-b880e.firebaseapp.com",
  projectId: "clone-yt-b880e",
  storageBucket: "clone-yt-b880e.appspot.com",
  messagingSenderId: "1066217778028",
  appId: "1:1066217778028:web:9d592254b1efe7b6a36149"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};
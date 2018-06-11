import firebase from "firebase";
let config = {
  apiKey: "AIzaSyDvzDG6RSdBNFP2jaPLc-ezJfIqnkpJAZk",
  authDomain: "jlernercamp.firebaseapp.com",
  databaseURL: "https://jlernercamp.firebaseio.com",
  projectId: "jlernercamp",
  storageBucket: "jlernercamp.appspot.com",
  messagingSenderId: "231699552517"
};
firebase.initializeApp(config);
export default firebase;
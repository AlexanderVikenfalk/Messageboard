import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAHolxyf-QXK1UeL3LQe7g27bq7RurMW9Q",
  authDomain: "messageboard-3ec9f.firebaseapp.com",
  databaseURL: "https://messageboard-3ec9f.firebaseio.com",
  projectId: "messageboard-3ec9f",
  storageBucket: "messageboard-3ec9f.appspot.com",
  messagingSenderId: "470884788543"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();
export const databasePosts = firebase.database().ref("posts/");
// export const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const twitterProvider = new firebase.auth.TwitterAuthProvider();
// export const facebookProvider = new  firebase.auth.FacebookAuthProvider();
export const storage = firebase.storage().ref();


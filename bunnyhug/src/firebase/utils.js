//code for firebase api

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { firebaseConfig } from './config';

//connect to firebase database
firebase.initializeApp(firebaseConfig);

//authentication reference
export const auth = firebase.auth();

//data, database reference
export const firestore = firebase.firestore();

//customer provider for user to log in with google
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();

//allow user to pick from google accounts
GoogleProvider.setCustomParameters({ prompt: 'select_account' });

//asynchronous function that accepts event listern object and any additional data
export const handleUserProfile = async ({ userAuth, additionalData }) => {
  //if not valid user, return
  if (!userAuth) return;

  //otherwise, check if this is found
  const { uid } = userAuth;

  //grab users collection in database with uid (user id) path
  const userRef = firestore.doc(`users/${uid}`);

  //find user address on document
  const snapshot = await userRef.get();

  //does the document at this address exist
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const timestamp = new Date();
    const userRoles = ['user'];

    try {
      //create new user from userAuth object if uid does not exist
      await userRef.set({
        displayName,
        email,
        createdDate: timestamp,
        userRoles,
        ...additionalData //pass also the additional data
      });
    } catch(err) {
      // console.log(err);
    }
  }

  return userRef;
};

//grab the currently logged in user's session
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  })
}
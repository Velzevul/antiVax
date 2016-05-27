import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAMhdWvUYfC3foVmL63bNhWRLCdb5dH8Po",
  authDomain: "project-972617705794814629.firebaseapp.com",
  databaseURL: "https://project-972617705794814629.firebaseio.com",
  storageBucket: "project-972617705794814629.appspot.com",
};

export const firebaseClient = firebase.initializeApp(config);
export const firebaseDb = firebaseClient.database();

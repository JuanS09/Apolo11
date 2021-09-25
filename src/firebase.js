import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBPn9_NYmO6v8gIXK3tPGWOha23X3aG9n4",
    authDomain: "apolo11-2e161.firebaseapp.com",
    databaseURL: "https://apolo11-2e161-default-rtdb.firebaseio.com",
    projectId: "apolo11-2e161",
    storageBucket: "apolo11-2e161.appspot.com",
    messagingSenderId: "702961982919",
    appId: "1:702961982919:web:8a0aebbd55a8d2ed28cde2"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
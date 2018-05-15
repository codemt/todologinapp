import firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyD4-vz2_7aRqAPE4CtveB6Wh2yYUJNWUmA",
    authDomain: "todologinapp.firebaseapp.com",
    databaseURL: "https://todologinapp.firebaseio.com",
    projectId: "todologinapp",
    storageBucket: "",
    messagingSenderId: "736214933375"
  };
  const fire = firebase.initializeApp(config);
  export default fire;

    
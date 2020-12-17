import firebase from 'firebase';
import '@firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBmSdwyqIvSEMUAdSQy3_ClQi-4yGb93zY",
    authDomain: "myplacesapp-6cafc.firebaseapp.com",
    projectId: "myplacesapp-6cafc",
    storageBucket: "myplacesapp-6cafc.appspot.com",
    messagingSenderId: "196273761169",
    appId: "1:196273761169:web:99afd16fe99c297c44c830"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;
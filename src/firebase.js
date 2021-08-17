import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAunKcwNt40yYMqoYkbWg9Y0NS--eGRoaA",
  authDomain: "bloggo-73b1c.firebaseapp.com",
  projectId: "bloggo-73b1c",
  storageBucket: "bloggo-73b1c.appspot.com",
  messagingSenderId: "461947371521",
  appId: "1:461947371521:web:a6ad3733905205a1248000",
};

firebase.initializeApp(firebaseConfig);
export default firebase;

// apiKey: process.env.REACT_APP_API_KEY,
// authDomain: process.env.REACT_APP_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_PROJECT_ID,
// storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
// appId: process.env.REACT_APP_APP_ID,

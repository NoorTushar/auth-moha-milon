// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBjKRS7kDKq22xkYZS0LAecLPLJ3b1Q_lc",
   authDomain: "project-moha-milon.firebaseapp.com",
   projectId: "project-moha-milon",
   storageBucket: "project-moha-milon.appspot.com",
   messagingSenderId: "139555410692",
   appId: "1:139555410692:web:9f4188b4471694780c7651",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

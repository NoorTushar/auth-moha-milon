import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";

const GoogleAuth = () => {
   const [user, setUser] = useState(null);

   const googleAuthProvider = new GoogleAuthProvider();

   const handleGoogleSignIn = () => {
      signInWithPopup(auth, googleAuthProvider)
         .then((result) => {
            console.log(result);
            setUser(result.user);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handleGoogleSignOut = () => {
      signOut(auth)
         .then((result) => {
            console.log(result);
            console.log(`sign out success`);
            setUser(null);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <div className="h-[400px] flex flex-col items-center justify-center gap-4">
         <h3 className="text-3xl text-primary">Google Auth page</h3>
         <button onClick={handleGoogleSignIn} className="btn btn-secondary">
            Sign In
         </button>
         <button onClick={handleGoogleSignOut} className="btn btn-primary">
            Sign Out
         </button>

         {user && (
            <div>
               <h3>Hello {user.displayName}</h3>
               <img src={user.photoURL} alt="" />
               <br />
               <p>Email is: {user.email}</p>
            </div>
         )}
      </div>
   );
};

export default GoogleAuth;

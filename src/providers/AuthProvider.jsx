import { createContext, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import {
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const signInUser = (email, password) => {
      setLoading(true);

      return signInWithEmailAndPassword(auth, email, password);
   };

   const signOutUser = () => {
      setLoading(true);

      return signOut(auth);
   };

   const singInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleAuthProvider);
   };

   useState(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         console.log(currentUser);

         setLoading(false);
      });

      return () => {
         unSubscribe();
      };
   }, []);

   const authInfo = {
      user,
      createUser,
      signInUser,
      signOutUser,
      loading,
      singInWithGoogle,
   };

   return (
      <>
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
      </>
   );
};

AuthProvider.propTypes = {
   children: PropTypes.node,
};

export default AuthProvider;

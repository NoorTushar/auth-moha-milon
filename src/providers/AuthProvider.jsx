import { createContext, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import {
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const signInUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   const signOutUser = () => {
      return signOut(auth);
   };

   useState(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         console.log(currentUser);
      });

      return () => {
         unSubscribe();
      };
   }, []);

   const authInfo = { user, createUser, signInUser, signOutUser };

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

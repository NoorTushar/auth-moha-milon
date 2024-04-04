import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import auth from "../firebase/firebase.config";

const PracLogin = () => {
   const [showPassword, setShowPassword] = useState(false);
   const handleLogin = (e) => {
      e.preventDefault();

      const email = e.target.email.value;
      const password = e.target.password.value;

      signInWithEmailAndPassword(auth, email, password)
         .then((result) => {
            console.log(result.user);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handleShowPassword = () => {
      console.log(`showing password`);
      setShowPassword(!showPassword);
   };
   return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
         <h3>Login Practice</h3>
         <form
            onSubmit={handleLogin}
            className="border p-10 rounded-xl grid grid-cols-12 min-w-[500px] gap-4"
         >
            <div className="grid grid-cols-6 col-span-12 items-center">
               <label className="col-span-2" htmlFor="email">
                  Email:
               </label>
               <input
                  className="col-span-4 border rounded-lg w-full p-2"
                  type="email"
                  name="email"
                  required
               />
            </div>

            <div className="grid grid-cols-6 col-span-12 items-center">
               <label className="col-span-2" htmlFor="password">
                  Password:
               </label>
               <div className="col-span-4 relative">
                  <input
                     className=" border rounded-lg w-full p-2"
                     type={showPassword ? "text" : "password"}
                     name="password"
                     required
                  />
                  {showPassword ? (
                     <FaEyeSlash
                        onClick={handleShowPassword}
                        className="text-lg absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                     ></FaEyeSlash>
                  ) : (
                     <FaEye
                        onClick={handleShowPassword}
                        className="text-lg absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                     ></FaEye>
                  )}
               </div>
            </div>

            <div className="col-span-12">
               <input
                  className="btn btn-md btn-primary w-full"
                  type="submit"
                  value="Login"
               />
            </div>

            {/* {errorMessage && (
               <div className="col-span-12">
                  <p className="text-red-500">{errorMessage}</p>
               </div>
            )}

            {successMessage && (
               <div className="col-span-12">
                  <p className="text-green-500">{successMessage}</p>
               </div>
            )} */}
         </form>
      </div>
   );
};

export default PracLogin;

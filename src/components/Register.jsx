import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
   const handleRegister = (e) => {
      e.preventDefault();
   };

   return (
      <div className="h-[calc(100vh-68px)] flex flex-col items-center justify-center">
         <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
            <div className="mb-8 text-center">
               <h1 className="my-3 text-4xl font-bold">Registration</h1>
               <p className="text-sm dark:text-gray-600">
                  Register Your Account
               </p>
            </div>
            <form
               onSubmit={handleRegister}
               novalidate=""
               action=""
               className="space-y-12"
            >
               <div className="space-y-4">
                  <div>
                     <label for="email" className="block mb-2 text-sm">
                        Email address
                     </label>
                     <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@example.com"
                        className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                     />
                  </div>
                  <div>
                     <div className="flex justify-between mb-2">
                        <label for="password" className="text-sm">
                           Password
                        </label>
                     </div>
                     <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="*****"
                        className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                     />
                  </div>
               </div>
               <div className="space-y-2">
                  <div>
                     <button
                        type="button"
                        className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                     >
                        Register
                     </button>
                  </div>
                  <p className="px-6 text-sm text-center dark:text-gray-600">
                     Already have an account?
                     <Link
                        to={`/login`}
                        className="hover:underline dark:text-violet-600"
                     >
                        Login
                     </Link>
                     .
                  </p>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Register;

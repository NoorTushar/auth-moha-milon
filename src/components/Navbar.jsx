import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
   const { user, signOutUser } = useContext(AuthContext);

   const handleSignOut = () => {
      signOutUser()
         .then((result) => {
            console.log(result);
         })
         .catch((error) => {
            console.error(error);
         });
   };
   const navLinks = (
      <>
         <li>
            <NavLink to={`/`}>Home</NavLink>
         </li>
         <li>
            <NavLink to={`/login`}>Login</NavLink>
         </li>
         <li>
            <NavLink to={`/register`}>Register</NavLink>
         </li>
         {user && (
            <>
               <li>
                  <NavLink to={`/orders`}>Orders</NavLink>
               </li>
               <li>
                  <NavLink to={`/profile`}>Profile</NavLink>
               </li>
            </>
         )}
         <li>
            <NavLink to={`/googleAuth`}>Google Login</NavLink>
         </li>
         <li>
            <NavLink to={`/pracRegister`}>Prac Register</NavLink>
         </li>
         <li>
            <NavLink to={`/pracLogin`}>Prac Login</NavLink>
         </li>
      </>
   );
   return (
      <nav className="navbar bg-base-100">
         <div className="navbar-start">
            <div className="dropdown">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
               >
                  {navLinks}
               </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
         </div>
         <div className="navbar-end space-x-2">
            {user ? (
               <>
                  <span>{user.email}</span>
                  <a className="btn btn-sm" onClick={handleSignOut}>
                     Sign Out
                  </a>
               </>
            ) : (
               <Link to={"/login"}>
                  <button className="btn btn-sm">Login</button>
               </Link>
            )}
         </div>
      </nav>
   );
};

export default Navbar;

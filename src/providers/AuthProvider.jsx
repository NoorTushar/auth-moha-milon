import { createContext } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
   const asset = "gold";
   return <AuthContext.Provider value={asset}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
   children: PropTypes.node,
};

export default AuthProvider;

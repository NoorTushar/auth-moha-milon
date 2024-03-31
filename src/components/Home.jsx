import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
   const asset = useContext(AuthContext);
   return <div>{asset}</div>;
};

export default Home;

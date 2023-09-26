
import { useContext, useEffect } from "react";
import Hero from "../../components/Hero";
import { AuthContext } from "../../hooks/authContext";

const HomePage = () => {
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(()=>{
    console.log("Home page state value check : ",isAuthenticated);
  },[]);

  return (
    <>
      <Hero />
    </>
  );
};

export default HomePage;

import { useEffect } from "react";
import Header from "../components/Header";
import Services from "../components/Services";
import Works from "../components/Works";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <Services />
      <Works />
    </div>
  );
};

export default Home;

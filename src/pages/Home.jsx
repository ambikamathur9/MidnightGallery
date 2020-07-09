import React from "react";
import Menu from "../components/Menu";
import home from "../Images/home.jpg";
import Typewriter from "../components/typewriter";
import CustomForm from "../components/Mailchimp";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Menu />
      <img
        className="big-image"
        alt="Midnight gallery black-lit interior space"
        src={home}
      />
      <h1 className="image-text">
        <Typewriter />
      </h1>
      <CustomForm />
      <Footer />
    </div>
  );
}

export default Home;

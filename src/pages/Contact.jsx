import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <Menu />
      <h1 className="contact-text">Say hello!</h1>
      <p style={{ fontSize: "2.5vh" }} className="p contact-p">
        Located in the heart of the Long Beach Arts District, the Midnight
        Gallery offers a space for artists to reach their full potential and
        connect with others. The gallery gets its name from iconic late night
        shows in intimate black lit-rooms. We feature a wide variety of art
        forms: from tattoos to murals, from sculpture to digital art.
      </p>
      <h2 className="visit-text">Visit Us.</h2>
      <p style={{ fontSize: "2.5vh" }} className="p contact-p">
        We are only open to visitors when we are having a show or if you are
        staying as a guest in one of our rooms.
        <br />
        To find out when are next show is, <a href="/gallery">click here.</a>
        <br />
        To find out more about lodging in the gallery,{" "}
        <a href="/rooms">click here.</a>
      </p>
      <p style={{ fontSize: "2.5vh" }} className="p contact-p">
        For all other inquiries, please email us.
        <br />
        <br />
        <a href="mailto:midnightgallery01@gmail.com">
          midnightgallery01@gmail.com
        </a>
      </p>
      <Footer />
    </div>
  );
}

export default Contact;

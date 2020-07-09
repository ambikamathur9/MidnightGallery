import React from "react";
import Menu from "../components/Menu";
import bedroom from "../Images/bedroom.jpg";
import Footer from "../components/Footer";
import CopyEmail from "../components/CopyEmail";

function Rooms() {
  return (
    <div>
      <Menu />
      <div className="room-container">
        <img
          className="room-image"
          src={bedroom}
          alt="Midnight Gallery blue artsy bedroom for AirBNB."
        />
        <h1 style={{ fontSize: "50px" }} className="room-text">
          Wake up in an art installation.
        </h1>
        <div className="room-p">
          <h5
            style={{
              fontSize: "2em",
              bottom: "65vh",
              textAlign: "left",
              padding: "0em 1em 0em 3em"
            }}
            className="room-text"
          >
            We give artists creative license to transform a bedroom into art.
            <br />
            Guests book a room through AirBNB for a unique and intimate
            experience living in art.{" "}
          </h5>
          <h5
            style={{
              fontSize: "2em",
              bottom: "65vh",
              textAlign: "left",
              padding: "0em 1em 0em 3em"
            }}
            className="room-text"
          >
            Interested in staying as a guest or creating an installation?
          </h5>
          <CopyEmail />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Rooms;

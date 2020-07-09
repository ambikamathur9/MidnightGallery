import React from "react";
// npm install --save-dev @iconify/react @iconify/icons-simple-icons
import { InlineIcon } from "@iconify/react";
import bxlInstagram from "@iconify/icons-bx/bxl-instagram";
import airbnbIcon from "@iconify/icons-simple-icons/airbnb";
import { Button } from "react-bootstrap";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p> ⓒ {year} Midnight Gallery</p>
      <div className="social">
        <Button
          className="btn btn-light"
          href="https://www.instagram.com/midnight.gallery/?hl=en"
        >
          <InlineIcon className="icon-insta" icon={bxlInstagram} />
        </Button>
        <Button
          className="btn btn-light"
          href="https://www.airbnb.com/rooms/27988121?source_impression_id=p3_1591802667_ZaPIEjauT6b7QRnV&guests=1&adults=1"
        >
          <InlineIcon className="icon-air" icon={airbnbIcon} />
        </Button>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import Menu from "../components/Menu";
import Art from "../components/Art";
import events from "../Events";
import Footer from "../components/Footer";

function createArt(eventInfo) {
  return (
    <Art
      key={eventInfo.id}
      eventImage={eventInfo.eventImage}
      eventTitle={eventInfo.eventTitle}
      eventDescription={eventInfo.eventDescription}
      eventURL={eventInfo.eventURL}
    />
  );
}

function Gallery() {
  return (
    <div>
      <Menu />
      <div>
        <dl className="Card">{events.map(createArt)}</dl>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;

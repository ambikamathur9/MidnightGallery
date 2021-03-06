import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Rooms from "./pages/Rooms";

function Main() {
  return (
    <Switch>
      {" "}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/rooms" component={Rooms} />
    </Switch>
  );
}

export default Main;

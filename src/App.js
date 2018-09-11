import React from "react";

import ResponsiveContainer from "./component/pages/Home/ResponsiveContainer";
import HomeBody from "./component/pages/Home/HomeBody";
import AboutUs from "./component/pages/About Us/AboutUs"
import Info from "./component/pages/Info/Info"

import { BrowserRouter as Router,Route } from "react-router-dom";
//mulai coding dibawah

const App = () => (
  <Router>
    <ResponsiveContainer>
      <Route exact path="/" component={HomeBody}></Route>
      <Route path="/aboutus" component={AboutUs}></Route>
      <Route path="/info" component={Info}></Route>
    </ResponsiveContainer>
  </Router>
);

export default App;

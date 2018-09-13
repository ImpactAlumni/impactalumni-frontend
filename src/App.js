import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Button, Container } from "semantic-ui-react";

import Home from "./pages/home.jsx";
import Info from "./pages/info";
import Gallery from "./pages/gallery";
import AboutUs from "./pages/aboutus";
import LoginForm from "./pages/login";

class App extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Router>
        <div>
          <Container>
            {/* navbar */}
            <div className="navbar">
              <Menu secondary>
                <Menu.Item
                  icon="home"
                  as={Link}
                  to="/"
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  icon="book"
                  as={Link}
                  to="/info"
                  name="Info"
                  active={activeItem === "Info"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  icon="photo"
                  as={Link}
                  to="/gallery"
                  name="Gallery"
                  active={activeItem === "Gallery"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  icon="users"
                  as={Link}
                  to="/aboutus"
                  name="About Us"
                  active={activeItem === "About Us"}
                  onClick={this.handleItemClick}
                />
                <Menu.Menu position="right">
                  <Button inverted color="red" as={Link} to="/login">
                    Log In / Sign Up
                  </Button>
                </Menu.Menu>
              </Menu>
            </div>
          </Container>
          <Route exact path="/" component={Home} />
          <Route path="/info" component={Info} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/login" component={LoginForm} />
        </div>
      </Router>
    );
  }
}

export default App;

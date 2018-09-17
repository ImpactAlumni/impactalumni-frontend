import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Button, Container } from "semantic-ui-react";
import axios from "axios";

import Home from "./pages/home";
import Info from "./pages/info";
import Gallery from "./pages/gallery";
import AboutUs from "./pages/aboutus";
import LoginForm from "./pages/login-signup";
import newPassword from "./pages/newPassword";
import profileStudent from "./pages/profileStudent";
import job_detail from "./pages/job_detail";

class App extends Component {
  state = { activeItem: "home", isAuthenticated: false };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  login = async (email, password) => {
    await axios
      .post(`http://localhost:3000/students/login`, {
        email: email,
        password: password
      })
      .then(res => {
        if (res.data.token) {
          localStorage.token = res.data.token;
          this.setState({
            isAuthenticated: true
          });
        }
      });
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({
      isAuthenticated: false
    });
  };

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
                {this.state.isAuthenticated ? (
                  <Menu.Item
                    icon="handshake"
                    as={Link}
                    to="/job_detail"
                    name="Job Details"
                    active={activeItem === "Job Details"}
                    onClick={this.handleItemClick}
                  />
                ) : null}
                <Menu.Item
                  icon="users"
                  as={Link}
                  to="/aboutus"
                  name="About Us"
                  active={activeItem === "About Us"}
                  onClick={this.handleItemClick}
                />
                <Menu.Menu position="right">
                  {this.state.isAuthenticated ? (
                    <Button
                      inverted
                      color="red"
                      as={Link}
                      to="/"
                      onClick={this.logout}
                    >
                      logout
                    </Button>
                  ) : (
                    <Button inverted color="red" as={Link} to="/login">
                      Log In / Sign Up
                    </Button>
                  )}
                </Menu.Menu>
              </Menu>
            </div>
          </Container>
          <Route exact path="/" component={Home} />
          <Route path="/info" component={Info} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/aboutus" component={AboutUs} />
          <Route
            path="/login"
            render={props => (
              <LoginForm
                isAuthenticated={this.state.isAuthenticated}
                login={this.login}
                {...props}
              />
            )}
          />
          <Route path="/signup/:token" component={newPassword} />
          <Route path="/profile/:id" component={profileStudent} />
          <Route path="/job_detail" component={job_detail} />
        </div>
      </Router>
    );
  }
}

export default App;

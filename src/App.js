import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import {
  Menu,
  Segment,
  Grid,
  Button,
  Container,
  Image,
  Header,
  List,
  Divider,
  Responsive
} from "semantic-ui-react";

import container1 from "./img/container1.jpeg";
import ryu from "./img/Ryu.jpeg";
import programmerGif from "./img/programmer.gif";
// import impactlogo from "./img/impactbytelogo.jpeg";

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
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="Info"
                  active={activeItem === "Info"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="Gallery"
                  active={activeItem === "Gallery"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="About Us"
                  active={activeItem === "About Us"}
                  onClick={this.handleItemClick}
                />
                <Menu.Menu position="right">
                  <Button inverted color="red">
                    Log In
                  </Button>
                  <Button inverted color="red">
                    Sign Up
                  </Button>
                </Menu.Menu>
              </Menu>
            </div>
          </Container>

          {/* header */}
          <Segment
            id="header"
            inverted
            textAlign="center"
            style={{ minHeight: 600, padding: "1em 0em" }}
            vertical
          >
            <div className="header-kata1">console.log("impactAlumni")</div>
            <div className="header-kata2">Coding means community :)</div>
          </Segment>

          {/* middle1 */}
          <Container>
            <Segment style={{ padding: "8em 0em" }} vertical>
              <Grid container stackable verticalAlign="middle">
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Header as="h3" style={{ fontSize: "2em" }}>
                      We Help Advance Indonesian Technology
                    </Header>
                    <p style={{ fontSize: "1.33em" }}>
                      We are aware that technological advances are now growing
                      rapidly, and every country must be able to follow it.
                      that's one reason why we want to be a developer.
                    </p>
                    <Header as="h3" style={{ fontSize: "2em" }}>
                      We create an alumni community
                    </Header>
                    <p style={{ fontSize: "1.33em" }}>
                      yes, by making our alumni community easier to exchange
                      information.
                    </p>
                  </Grid.Column>
                  <Grid.Column floated="right" width={6}>
                    <Image bordered rounded size="large" src={container1} />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column textAlign="center">
                    <Button color="red" size="huge">
                      Check Them Out
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Container>

          {/* middle2 */}
          <div className="middle2">
            <Segment style={{ padding: "0em" }} vertical>
              <Grid celled="internally" columns="equal" stackable>
                <Grid.Row textAlign="center">
                  <Grid.Column
                    style={{ paddingBottom: "5em", paddingTop: "5em" }}
                  >
                    <Header as="h3" style={{ fontSize: "2em" }}>
                      "Why the alumni community?"
                    </Header>
                    <p style={{ fontSize: "1.33em" }}>
                      Alumni can be a source of information on the world of work
                      & business for new graduates of a bootcamp, in addition to
                      being an inspiration for students in today's bootcamp.
                    </p>
                  </Grid.Column>
                  <Grid.Column
                    style={{ paddingBottom: "5em", paddingTop: "5em" }}
                  >
                    <Header as="h3" style={{ fontSize: "2em" }}>
                      "Individually we are one drop. But together, we are an
                      ocean"
                    </Header>
                    <p style={{ fontSize: "1.33em" }}>
                      <Image avatar src={ryu} />
                      <b>Ryunosuke Satoro</b>
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </div>

          {/* middle3 */}
          <Segment
            id="middle3"
            inverted
            textAlign="center"
            style={{ minHeight: 600, padding: "1em 0em" }}
            vertical
          />

          {/* middle4 */}
          <Container>
            <Segment style={{ padding: "6em 0em" }} vertical>
              <Grid container stackable verticalAlign="middle">
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Header as="h3" style={{ fontSize: "2em" }}>
                      Programmer never be able to code alone
                    </Header>
                    <p style={{ fontSize: "1.33em" }}>
                      Programmers have communities like github, gitlab etc. from
                      that community the development in the world of coding is
                      very fast. Our fellow programmers help each other solve
                      problems
                    </p>
                  </Grid.Column>
                  <Grid.Column floated="right" width={6}>
                    <Image
                      bordered
                      rounded
                      size="large"
                      src={programmerGif}
                      style={{ width: "70%" }}
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row />
              </Grid>
            </Segment>
          </Container>

          {/* footer */}
          <Segment inverted vertical style={{ padding: "5em 0em" }}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header inverted as="h4" content="About" />
                    <List link inverted>
                      <List.Item as="a">Sitemap</List.Item>
                      <List.Item as="a">Contact Us</List.Item>
                      <List.Item as="a">Religious Ceremonies</List.Item>
                      <List.Item as="a">Gazebo Plans</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as="h4" content="Services" />
                    <List link inverted>
                      <List.Item as="a">Banana Pre-Order</List.Item>
                      <List.Item as="a">DNA FAQ</List.Item>
                      <List.Item as="a">How To Access</List.Item>
                      <List.Item as="a">Favorite X-Men</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <Header as="h4" inverted>
                      Footer Header
                    </Header>
                    <p>
                      Extra space for a call to action inside the footer that
                      could help re-engage users.
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </div>
      </Router>
    );
  }
}

export default App;

import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

import HomepageHeading from "./component/pages/Home/HomePageHeading";
import DesktopContainer from "./component/pages/Home/DekstopContainer";
import MobileContainer from "./component/pages/Home/MobileContainer";
import ResponsiveContainer from "./component/pages/Home/ResponsiveContainer";

import container1 from "./component/img/container1.jpeg";
import ryu from "./component/img/Ryu.jpeg";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
//mulai coding dibawah

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

DesktopContainer.propTypes = {
  children: PropTypes.node
};

MobileContainer.propTypes = {
  children: PropTypes.node
};

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
  <Router>
    <ResponsiveContainer>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                We Help Advance Indonesian Technology
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                We are aware that technological advances are now growing
                rapidly, and every country must be able to follow it. that's one
                reason why we want to be a developer.
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
              <Button size="huge">Check Them Out</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "Why the alumni community?"
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Alumni can be a source of information on the world of work &
                business for new graduates of a bootcamp, in addition to being
                an inspiration for students in today's bootcamp.
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "Individually we are one drop. But together, we are an ocean"
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <Image avatar src={ryu} />
                <b>Ryunosuke Satoro</b>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Breaking The Grid, Grabs Your Attention
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Instead of focusing on content creation and hard work, we have
            learned how to master the art of doing nothing by providing massive
            amounts of whitespace and generic content that can seem massive,
            monolithic and worth your attention.
          </p>
          <Button as="a" size="large">
            Read More
          </Button>
          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            <a href="#">Case Studies</a>
          </Divider>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Did We Tell You About Our Bananas?
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Yes I know you probably disregarded the earlier boasts as
            non-sequitur filler content, but it's really true. It took years of
            gene splicing and combinatory DNA research, but our bananas can
            really dance.
          </p>
          <Button as="a" size="large">
            I'm Still Quite Interested
          </Button>
        </Container>
      </Segment>
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
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </ResponsiveContainer>
  </Router>
);

export default HomepageLayout;

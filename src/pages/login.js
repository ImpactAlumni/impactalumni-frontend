import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Container,
  List
} from "semantic-ui-react";

import impactlogo from "../img/impactlogo.jpeg";

import SignUpForm from "./signup";

class LoginForm extends Component {
  constructor() {
    super();
  }

  state = {
    isSignUp: false
  };

  handleClick = () => {
    this.setState({ isSignUp: true });
  };

  render() {
    return (
      <div className="login-form">
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="red" textAlign="center">
              <Image src={impactlogo} /> Log-in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />

                <Button color="red" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              Let's see if we already have an account for you. Many alumni are
              already in our directory. click:{" "}
              <Button inverted color="blue" onClick={this.handleClick}>
                Here
              </Button>{" "}
              to Activate Your Account
            </Message>
            {this.state.isSignUp && <SignUpForm />}
          </Grid.Column>
        </Grid>
        {/* footer */}
        <Segment
          inverted="inverted"
          vertical="vertical"
          style={{
            padding: "5em 0em"
          }}
        >
          <Container>
            <Grid divided="divided" inverted="inverted" stackable="stackable">
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted="inverted" as="h4" content="About" />
                  <List link="link" inverted="inverted">
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                    <List.Item as="a">Religious Ceremonies</List.Item>
                    <List.Item as="a">Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted="inverted" as="h4" content="Services" />
                  <List link="link" inverted="inverted">
                    <List.Item as="a">Banana Pre-Order</List.Item>
                    <List.Item as="a">DNA FAQ</List.Item>
                    <List.Item as="a">How To Access</List.Item>
                    <List.Item as="a">Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4" inverted="inverted">
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
    );
  }
}

export default LoginForm;

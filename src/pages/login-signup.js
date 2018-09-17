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
  List,
  Modal
} from "semantic-ui-react";
import { Redirect } from "react-router-dom";

import impactlogo from "../img/impactlogo.jpeg";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input_email: "",
      input_password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { input_email, input_password } = this.state;
    if (this.props.isAuthenticated === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-form">
        <Container>
          <Grid divided="vertically">
            <Grid.Row columns={2}>
              <Grid.Column>
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
                          name="input_email"
                          fluid
                          icon="user"
                          iconPosition="left"
                          placeholder="E-mail address"
                          value={this.state.input_email}
                          onChange={this.handleChange}
                        />
                        <Form.Input
                          name="input_password"
                          fluid
                          icon="lock"
                          iconPosition="left"
                          placeholder="Password"
                          type="password"
                          value={this.state.input_password}
                          onChange={this.handleChange}
                        />
                        <Button
                          color="red"
                          fluid
                          size="large"
                          onClick={() => {
                            this.props.login(input_email, input_password);
                          }}
                        >
                          Login
                        </Button>
                      </Segment>
                    </Form>
                    <Message>
                      You can log in if you have registered on this website
                    </Message>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
              <Grid.Column>
                <Grid
                  textAlign="center"
                  style={{ height: "100%" }}
                  verticalAlign="middle"
                >
                  <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" color="blue" textAlign="center">
                      Activate to your account
                    </Header>
                    <Form size="large">
                      <Segment stacked>
                        <Form.Input
                          fluid
                          icon="user"
                          iconPosition="left"
                          placeholder="E-mail address"
                        />
                        <Modal
                          trigger={
                            <Button color="blue" fluid size="large">
                              Request Permission
                            </Button>
                          }
                          basic
                          size="small"
                        >
                          <Header icon="mail" content="Sent To Your Email!" />
                          <Modal.Content>
                            <p>
                              Check your email, we have sent an access link so
                              you can join our website
                            </p>
                          </Modal.Content>
                        </Modal>
                      </Segment>
                    </Form>
                    <Message>
                      Let's see if we already have an account for you. Many
                      alumni are already in our directory. Enter your e-mail to
                      Activate Your Account
                    </Message>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

        {/* footer */}
        <Segment
          id="login-footer"
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

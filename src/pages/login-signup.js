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
  Modal
} from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import impactlogo from "../img/impactlogo.jpeg";
import Footer from "./footer";
import axios from "axios"

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input_email: "",
      input_password: "",
      input_request_email: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  generateSignUpForm = () => {
    axios.post(`${process.env.REACT_APP_IMPACTALUMNI}/students/generate_sign_up_form`, {
      email: this.state.input_request_email
    }).then(res => console.log(res))
  }

  render() {
    const { input_email, input_password } = this.state;
    if (this.props.isAuthenticated === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-form">
        <Container className="loginSignup-isi">
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
                          name="input_request_email"
                          value={this.state.input_request_email}
                          onChange={this.handleChange}
                          icon="user"
                          iconPosition="left"
                          placeholder="E-mail address"
                        />
                        <Modal
                          trigger={
                            <Button color="blue" fluid size="large" onClick={() => this.generateSignUpForm()}>
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
        <Footer />
      </div>
    );
  }
}

export default LoginForm;

import React, { Component } from "react";
import { Button, Form, Grid, Header, Segment, Image } from "semantic-ui-react";

import "../App.css";
import impactlogo from "../img/impactlogo.jpeg";
import axios from "axios";

import Footer from "./footer";

class newPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      confim_password: ""
    };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  setPassword = () => {
    axios
      .post(`${process.env.REACT_APP_IMPACTALUMNI}/students/set_password`, {
        password: this.state.password,
        token: this.props.match.params.token
      })
      .then(res => {
        console.log(res.data);
        this.props.history.push("/login");
      });
  };

  render() {
    return (
      <div>
        <div className="newPassword-form">
          <Grid
            textAlign="center"
            style={{ height: "100%" }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h2" color="red" textAlign="center">
                <Image src={impactlogo} />
                Activate to your account
              </Header>
              <Form size="large">
                <Segment stacked>
                  <Form.Input
                    fluid
                    name="password"
                    onChange={this.handleOnChange}
                    icon="key"
                    iconPosition="left"
                    placeholder="New Password"
                    type="password"
                  />
                  <Form.Input
                    fluid
                    icon="key"
                    name="confirm_password"
                    onChange={this.handleOnChange}
                    iconPosition="left"
                    placeholder="Confim Password"
                    type="password"
                  />
                  <Button
                    color="red"
                    fluid
                    size="large"
                    onClick={this.setPassword}
                  >
                    New Password
                  </Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}
export default newPassword;

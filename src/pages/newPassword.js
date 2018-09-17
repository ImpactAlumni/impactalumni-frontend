import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Container,
  List,
  Image
} from "semantic-ui-react";

import "../App.css";
import impactlogo from "../img/impactlogo.jpeg";
import axios from "axios";

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
      .post("http://localhost:3000/students/set_password", {
        password: this.state.password,
        token: this.props.match.params.token
      })
      .then(res => console.log(res.data));
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
        <Segment
          id="newPassword-footer"
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
export default newPassword;

import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SignUpForm = () => (
  <div className="signup-form">
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
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
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
            <Button color="blue" fluid size="large" as={Link} to="/newpassword">
              Request Permission
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
);

export default SignUpForm;

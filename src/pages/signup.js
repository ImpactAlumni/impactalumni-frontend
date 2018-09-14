import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SignUpForm = () => (
  <div>
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

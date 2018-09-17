import React, { Component } from "react";
import { Grid, Container, Header, List, Segment } from "semantic-ui-react";
import "../App.css";

import axios from "axios";
import BatchCard from "./batchCard";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = { batches: [] };
  }

  componentDidMount = async () => {
    await axios.get(`http://localhost:3000/batches`).then(res => {
      console.log(res.data.data);
      this.setState({ batches: res.data.data });
    });
  };

  render() {
    return (
      <div className="info-menu">
        <Container>
          <div>
            <h1 className="alumni-title">Batch</h1>
          </div>
          <div className="batch-logo1">
            <Grid centered divided="vertically">
              <Grid.Row columns={3}>
                {this.state.batches.map(batch => (
                  <BatchCard data={batch} />
                ))}
              </Grid.Row>
            </Grid>
          </div>
        </Container>
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

export default Info;

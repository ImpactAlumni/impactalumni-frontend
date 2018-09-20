import React, { Component } from "react";

import { Segment, Container, Grid, Header, List } from "semantic-ui-react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
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
                <List>
                  <List.Item icon="users" content="blackKuda" />
                  <List.Item icon="marker" content="Jakarta" />
                  <List.Item
                    icon="mail"
                    content={
                      <a href="mailto:surbaktievan@ymail.com">
                        impactbyte@gmail.com
                      </a>
                    }
                  />
                  <List.Item
                    icon="linkify"
                    content={
                      <a href="https://impactalumni.netlify.com/">
                        https://impactalumni.com/
                      </a>
                    }
                  />
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted="inverted" as="h4" content="Social Media" />
                <List link="link" inverted="inverted">
                  <List.Item
                    icon="instagram"
                    content={
                      <a href="https://www.instagram.com/waysp/?hl=en">
                        @waysp
                      </a>
                    }
                  />
                  <List.Item
                    icon="instagram"
                    content={
                      <a href="https://www.instagram.com/michaelyps/?hl=en">
                        @michaelyps
                      </a>
                    }
                  />
                  <List.Item
                    icon="instagram"
                    content={
                      <a href="https://www.instagram.com/apip_shato/?hl=en">
                        @apip_shato
                      </a>
                    }
                  />
                  <List.Item
                    icon="instagram"
                    content={
                      <a href="https://www.instagram.com/badzlinx/?hl=en">
                        @badzlinx
                      </a>
                    }
                  />
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted="inverted">
                  Thank you for visiting our website :)
                </Header>
                <p>
                  We apologize if our website makes you uncomfortable.
                  development of this website will continue. coming soon . . .
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Footer;

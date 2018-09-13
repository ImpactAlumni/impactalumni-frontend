import React, { Component } from "react";
import {
  Container,
  Grid,
  Image,
  Reveal,
  Card,
  Segment,
  Header,
  List
} from "semantic-ui-react";

import "../App.css";

import evan1 from "../img/evan1.jpg";
import evan2 from "../img/evan2.jpg";
import apip1 from "../img/apip1.jpg";
import apip2 from "../img/apip2.jpg";
import hesti1 from "../img/hesti1.jpg";
import hesti2 from "../img/hesti2.jpg";
import wahyu1 from "../img/wahyu1.jpg";
import wahyu2 from "../img/wahyu2.jpg";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div className="aboutus">
        <div className="aboutus-title">
          <h1>Our Team Project</h1>
        </div>
        <div>
          <Container>
            <Grid divided="vertically">
              <Grid.Row columns={4}>
                <Grid.Column>
                  <Card>
                    <Reveal animated="fade">
                      <Reveal.Content visible>
                        <Image src={evan1} size="medium" />
                      </Reveal.Content>
                      <Reveal.Content hidden>
                        <Image src={evan2} size="medium" />
                      </Reveal.Content>
                    </Reveal>
                    <Card.Content>
                      <Card.Header>Michael Yosavani Putra</Card.Header>
                      <Card.Meta>
                        <span className="date">Team Leader</span>
                      </Card.Meta>
                      <Card.Description>
                        FullStack Web Developer
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Reveal animated="fade">
                      <Reveal.Content visible>
                        <Image src={apip1} size="medium" />
                      </Reveal.Content>
                      <Reveal.Content hidden>
                        <Image src={apip2} size="medium" />
                      </Reveal.Content>
                    </Reveal>
                    <Card.Content>
                      <Card.Header>Afif Shato</Card.Header>
                      <Card.Meta>
                        <span className="date">Team Member</span>
                      </Card.Meta>
                      <Card.Description>
                        FullStack Web Developer
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Reveal animated="fade">
                      <Reveal.Content visible>
                        <Image src={hesti1} size="medium" />
                      </Reveal.Content>
                      <Reveal.Content hidden>
                        <Image src={hesti2} size="medium" />
                      </Reveal.Content>
                    </Reveal>
                    <Card.Content>
                      <Card.Header>Purwanti Hestinanengsih</Card.Header>
                      <Card.Meta>
                        <span className="date">Team Member</span>
                      </Card.Meta>
                      <Card.Description>
                        FrontEnd Web Developer
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Reveal animated="fade">
                      <Reveal.Content visible>
                        <Image src={wahyu1} size="medium" />
                      </Reveal.Content>
                      <Reveal.Content hidden>
                        <Image src={wahyu2} size="medium" />
                      </Reveal.Content>
                    </Reveal>
                    <Card.Content>
                      <Card.Header>Mhd Wahyu Sanusi Putra</Card.Header>
                      <Card.Meta>
                        <span className="date">Team Member</span>
                      </Card.Meta>
                      <Card.Description>
                        FullStack Web Developer
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          <Segment
            id="aboutus-footer"
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
      </div>
    );
  }
}

export default AboutUs;

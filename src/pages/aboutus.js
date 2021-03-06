import React, { Component } from "react";
import { Container, Grid, Image, Reveal, Card } from "semantic-ui-react";

import "../App.css";

import evan1 from "../img/evan1.jpg";
import evan2 from "../img/evan2.jpg";
import apip1 from "../img/apip1.jpg";
import apip2 from "../img/apip2.jpg";
import hesti1 from "../img/hesti1.jpg";
import hesti2 from "../img/hesti2.jpg";
import wahyu1 from "../img/wahyu1.jpg";
import wahyu2 from "../img/wahyu2.jpg";

import Footer from "./footer";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div className="aboutus">
        <div className="aboutus-title">
          <h1
            style={{
              fontFamily: "Menlo, Monaco, 'Courier New', monospace"
            }}
          >
            Our Team Project
          </h1>
        </div>
        <div>
          <Container
            style={{
              fontFamily: "Menlo, Monaco, 'Courier New', monospace"
            }}
            className="aboutus-isi"
          >
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
          <Footer />
        </div>
      </div>
    );
  }
}

export default AboutUs;

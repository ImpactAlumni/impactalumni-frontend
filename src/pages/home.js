import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";
import "../App.css";

import {
  Segment,
  Grid,
  Button,
  Container,
  Image,
  Header,
  Icon
} from "semantic-ui-react";

import Typing from "react-typing-animation";

import container1 from "../img/container1.jpeg";
import ryu from "../img/Ryu.jpeg";
import programmerGif from "../img/programmer.gif";

import Footer from "./footer";
import Partner from "./partner";

import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        {/* header */}
        <Segment
          id="header"
          inverted="inverted"
          textAlign="center"
          style={{
            minHeight: 600,
            padding: "1em 0em"
          }}
          vertical="vertical"
        >
          <Container>
            <div>
              <Typing loop speed={150}>
                <div className="header-kata1">console.log("impactAlumni")</div>
              </Typing>
            </div>
            <div className="header-kata2">Impact Byte Alumni Community :)</div>
            <div>
              {" "}
              <Button
                style={{
                  fontFamily: "Menlo, Monaco, 'Courier New', monospace"
                }}
                as={Link}
                to="/gallery"
                primary
                size="huge"
              >
                Get Started
                <Icon name="right arrow" />
              </Button>{" "}
            </div>
          </Container>
        </Segment>
        {/* middle1 */}
        <Container>
          <Segment
            style={{
              padding: "8em 0em"
            }}
            vertical="vertical"
          >
            <Grid
              container="container"
              stackable="stackable"
              verticalAlign="middle"
            >
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header
                    as="h3"
                    style={{
                      fontSize: "2em",
                      fontFamily: "Menlo, Monaco, 'Courier New', monospace"
                    }}
                  >
                    Get advice from experts.
                  </Header>
                  <p
                    style={{
                      fontSize: "1.33em",
                      fontFamily: "Menlo, Monaco, 'Courier New', monospace",
                      textAlign: "justify"
                    }}
                  >
                    Being part of a large, diverse group gives you many
                    opportunities to get advice from people who’ve gone through
                    it all. What to do. What not to do. Their experiences can
                    point you in the right direction and help you avoid many
                    costly pitfalls.
                  </p>
                </Grid.Column>
                <Grid.Column floated="right" width={6}>
                  <Image
                    bordered="bordered"
                    rounded="rounded"
                    size="large"
                    src={container1}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
        {/* middle2 */}
        <div className="middle2">
          <Segment
            style={{
              padding: "0em"
            }}
            vertical="vertical"
          >
            <Grid celled="internally" columns="equal" stackable="stackable">
              <Grid.Row textAlign="center">
                <Grid.Column
                  style={{
                    paddingBottom: "5em",
                    paddingTop: "5em"
                  }}
                >
                  <Header
                    as="h3"
                    style={{
                      fontSize: "2em",
                      fontFamily: "Menlo, Monaco, 'Courier New', monospace"
                    }}
                  >
                    What is our purpose?
                  </Header>
                  <p
                    style={{
                      fontSize: "1.33em",
                      fontFamily: "Menlo, Monaco, 'Courier New', monospace",
                      textAlign: "justify"
                    }}
                  >
                    One of our main purposes is to support a network of former
                    graduates who will, in turn, help to raise the profile of
                    the boot camp. Alumni associations aim to bring together
                    like-minded individuals and offer a broader networking
                    scope.
                  </p>
                </Grid.Column>
                <Grid.Column
                  style={{
                    paddingBottom: "5em",
                    paddingTop: "5em"
                  }}
                >
                  <Header
                    as="h3"
                    style={{
                      fontSize: "2em",
                      fontFamily: "Menlo, Monaco, 'Courier New', monospace"
                    }}
                  >
                    "Individually we are one drop. But together, we are an
                    ocean"
                  </Header>
                  <p
                    style={{
                      fontSize: "1.33em",
                      fontFamily: "Menlo, Monaco, 'Courier New', monospace"
                    }}
                  >
                    <Image avatar="avatar" src={ryu} />
                    <b>Ryunosuke Satoro</b>
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </div>
        {/* middle3 */}
        <Segment
          id="middle3"
          inverted="inverted"
          textAlign="justify"
          style={{
            minHeight: 600,
            padding: "1em 0em"
          }}
          vertical="vertical"
        >
          {" "}
          <Container>
            <Typing loop speed={150}>
              <div className="middle3-kata">"First, Solve The Problem.</div>
              <div className="middle3-kata1">Then, Write The Code"</div>
              <div className="middle3-kata2">- John Jhonson</div>
            </Typing>
          </Container>
        </Segment>
        {/* middle4 */}
        <Container>
          <Segment
            style={{
              padding: "6em 0em"
            }}
            vertical="vertical"
          >
            <Grid
              container="container"
              stackable="stackable"
              verticalAlign="middle"
            >
              <Grid.Row>
                <Grid.Column floated="right" width={6}>
                  <Image
                    bordered="bordered"
                    rounded="rounded"
                    size="large"
                    src={programmerGif}
                    style={{
                      width: "70%"
                    }}
                  />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header
                    as="h3"
                    style={{
                      fontSize: "2em",
                      fontFamily: "Menlo, Monaco, 'Courier New', monospace",
                      textAlign: "justify"
                    }}
                  >
                    Happiness is not something ready made. It comes from your
                    own actions.
                  </Header>
                  <p
                    style={{
                      fontSize: "1.33em",
                      fontFamily: "Menlo, Monaco, 'Courier New', monospace",
                      textAlign: "right"
                    }}
                  >
                    - 14th Dalai Lama
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row />
            </Grid>
          </Segment>
          <Partner />
        </Container>
        {/* footer */}
        <Footer />
      </div>
    );
  }
}

export default Home;

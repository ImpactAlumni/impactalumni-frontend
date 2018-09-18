import React, { Component } from "react";
import {
  Container,
  Grid,
  Image,
  Table,
  Header,
  Button,
  Icon
} from "semantic-ui-react";
import axios from "axios";

import "../App.css";

import Footer from "./footer";

class profileStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    await axios
      .get(`http://localhost:3000/students/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data.data);
        this.setState({ profile: res.data.data });
      });
  };

  render() {
    console.log(this.props);
    if (!this.state.profile) {
      return null;
    }
    return (
      <div className="studentProfile">
        <Container>
          <div>
            <h1 className="profileStudent-title">Student profile</h1>
          </div>
          <div className="profileStudent-isi">
            <Grid>
              <Grid.Column style={{ textAlign: "center" }} width={4}>
                <Image
                  style={{ minWidth: "100%", marginBottom: "20px" }}
                  src={`http://localhost:3000/assets/foto/${
                    this.state.profile.foto
                  }`}
                />
                {this.props.isAuthenticated ? (
                  <Button
                    inverted
                    color="red"
                    style={{ width: "45%" }}
                    animated="vertical"
                  >
                    <Button.Content hidden>
                      <Icon name="edit" />
                    </Button.Content>
                    <Button.Content visible>Edit Profile</Button.Content>
                  </Button>
                ) : null}
              </Grid.Column>
              <Grid.Column width={9}>
                <Table basic="very" celled collapsing>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell />
                      <Table.HeaderCell />
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>Full Name:</Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{this.state.profile.fullName}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>Nick Name:</Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{this.state.profile.nickName}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>E-Mail:</Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{this.state.profile.email}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>Gender:</Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{this.state.profile.gender}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>Address:</Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{this.state.profile.address}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>Github:</Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>
                        <a target="_blank" href={this.state.profile.github}>
                          {this.state.profile.github}
                        </a>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
              <Grid.Column width={3}>
                <b>Current Status:</b>
                <br />
                {this.state.profile.current_status}
              </Grid.Column>
            </Grid>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default profileStudent;

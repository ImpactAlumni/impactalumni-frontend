import React, { Component } from "react";
import {
  Container,
  Grid,
  Image,
  Table,
  Header,
  Button,
  Icon,
  Modal,
  Select,
  Form
} from "semantic-ui-react";
import axios from "axios";

import "../App.css";

import Footer from "./footer";

const options = [
  { key: "Male", text: "Male", value: "Male" },
  { key: "Female", text: "Female", value: "Female" }
];

class ProfileStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal_open: false
    };
  }

  handleChange = e => {
    const profile = Object.assign(this.state.profile);
    profile[e.target.name] = e.target.value;
    this.setState({ profile });
  };

  componentDidMount = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_IMPACTALUMNI}/students/${
          this.props.match.params.id
        }`
      )
      .then(res => {
        console.log(res);
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
                  src={`${process.env.REACT_APP_IMPACTALUMNI}/assets/foto/${
                    this.state.profile.foto
                  }`}
                />
                {this.props.user_id == this.props.match.params.id ? (
                  <Modal
                    trigger={
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
                    }
                  >
                    <Modal.Header>Edit My Profile</Modal.Header>
                    <Modal.Content image>
                      <Image
                        wrapped
                        size="medium"
                        src={`${
                          process.env.REACT_APP_IMPACTALUMNI
                        }/assets/foto/${this.state.profile.foto}`}
                      />
                      <Modal.Description style={{ width: "70%" }}>
                        <Header>Edit Profile</Header>
                        <Form>
                          <Form.Group widths="equal">
                            <Form.Input
                              name="fullName"
                              required
                              fluid
                              id="form-subcomponent-shorthand-input-first-name"
                              label="Full Name"
                              value={this.state.profile.fullName}
                              onChange={this.handleChange}
                            />
                            <Form.Input
                              name="nickName"
                              required
                              fluid
                              id="form-subcomponent-shorthand-input-last-name"
                              label="Nick Name"
                              value={this.state.profile.nickName}
                              onChange={this.handleChange}
                            />
                          </Form.Group>
                          <Form.Group widths="equal">
                            <Form.Input
                              name="password"
                              type="password"
                              required
                              fluid
                              id="form-subcomponent-shorthand-input-first-name"
                              label="Password"
                            />
                            <Form.Input
                              name="email"
                              required
                              fluid
                              id="form-subcomponent-shorthand-input-first-name"
                              label="E-Mail"
                              value={this.state.profile.email}
                              onChange={this.handleChange}
                            />
                            <Form.Field
                              name="gender"
                              required
                              control={Select}
                              label="Gender"
                              options={options}
                              placeholder="Gender"
                              value={this.state.profile.gender}
                              onChange={this.handleChange}
                            />
                          </Form.Group>
                          <Form.Group widths="equal">
                            <Form.Input
                              name="github"
                              required
                              fluid
                              id="form-subcomponent-shorthand-input-first-name"
                              label="Github"
                              value={this.state.profile.github}
                              onChange={this.handleChange}
                            />
                            <Form.Input
                              name="current_status"
                              required
                              fluid
                              id="form-subcomponent-shorthand-input-first-name"
                              label="Current Status"
                              value={this.state.profile.current_status}
                              onChange={this.handleChange}
                            />
                          </Form.Group>
                          <Form.Group widths="equal">
                            <Form.Input
                              name="address"
                              required
                              fluid
                              id="form-subcomponent-shorthand-input-first-name"
                              label="Address"
                              value={this.state.profile.address}
                              onChange={this.handleChange}
                            />
                          </Form.Group>
                          <Modal
                            open={this.state.modal_open}
                            trigger={
                              <Button
                                onClick={() =>
                                  this.setState({ modal_open: true })
                                }
                                secondary
                              >
                                UPDATE
                              </Button>
                            }
                            basic
                            size="small"
                          >
                            <Header
                              icon="edit"
                              content="sure you want to update?"
                            />
                            <Modal.Actions>
                              <Button
                                basic
                                color="red"
                                inverted
                                onClick={() =>
                                  this.setState({ modal_open: false })
                                }
                              >
                                <Icon name="remove" /> No
                              </Button>
                              <Button color="green">
                                <Icon name="checkmark" /> Yes
                              </Button>
                            </Modal.Actions>
                          </Modal>
                        </Form>
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
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

export default ProfileStudent;

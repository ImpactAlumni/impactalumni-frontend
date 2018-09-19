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
  Input,
  Form
} from "semantic-ui-react";
import axios from "axios";

import "../App.css";

import Footer from "./footer";

class ProfileStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_IMPACTALUMNI}/students/${
          this.props.match.params.id
        }`
      )
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
                    <Modal.Content image scrolling>
                      <Image
                        size="medium"
                        src="https://react.semantic-ui.com/images/wireframe/image.png"
                        wrapped
                      />

                      <Modal.Description style={{ width: "60%" }}>
                        <Header>Edit</Header>
                        {/* <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Harum dignissimos rerum necessitatibus corporis.
                          Harum dolore eaque iure labore quasi vel cum veritatis
                          nemo voluptatibus? Libero quaerat suscipit iste quo
                          dicta!
                        </p> */}
                        <Form>
                          <Form.Field required>
                            <label>Last name</label>
                            <Input placeholder="Full name" />
                          </Form.Field>
                          <Form.Field required>
                            <label>Last name</label>
                            <Input placeholder="Full name" />
                          </Form.Field>
                          <Form.Field required>
                            <label>Last name</label>
                            <Input placeholder="Full name" />
                          </Form.Field>
                          <Form.Field required>
                            <label>Last name</label>
                            <Input placeholder="Full name" />
                          </Form.Field>
                          <Form.Field required>
                            <label>Last name</label>
                            <Input placeholder="Full name" />
                          </Form.Field>
                          <Form.Field required>
                            <label>Last name</label>
                            <Input placeholder="Full name" />
                          </Form.Field>
                          <Form.Field required>
                            <label>Last name</label>
                            <Input placeholder="Full name" />
                          </Form.Field>
                        </Form>
                      </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button primary>
                        Proceed <Icon name="chevron right" />
                      </Button>
                    </Modal.Actions>
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

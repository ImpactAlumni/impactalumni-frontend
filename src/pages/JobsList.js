import {
  Grid,
  Image,
  Accordion,
  Icon,
  List,
  Divider,
  Button,
  Modal,
  Header
} from "semantic-ui-react";
import React, { Component } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

class JobsList extends Component {
  state = { activeIndex: 0, modal_open: false };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  componentDidMount = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_IMPACTALUMNI}/partners/${
          this.props.data.id_company
        }`
      )
      .then(res => {
        this.setState({ company: res.data.data });
      });
  };

  onApplyJob = async () => {
    axios
      .post(`${process.env.REACT_APP_IMPACTALUMNI}/students_apply`, {
        id_students: localStorage.getItem("user_id"),
        id_jobDetails: this.state.company.id,
        apply_date: Date.now()
      })
      .then(data => {
        console.log(data);
        this.setState({ modal_open: false });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { activeIndex } = this.state;
    if (!this.state.company) {
      return null;
    }

    return (
      <div>
        <Grid>
          <Grid.Column
            style={{ textAlign: "center" }}
            // style={{ display: "flex", alignItems: "center" }}
            width={4}
          >
            <Image
              style={{ marginBottom: "90px" }}
              src={`${process.env.REACT_APP_IMPACTALUMNI}/assets/partner-logo/${
                this.state.company.logo
              }`}
            />
            <Modal
              trigger={
                <Button
                  inverted
                  color="red"
                  animated
                  onClick={() => this.setState({ modal_open: true })}
                >
                  <Button.Content visible>Apply For Job</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              }
              basic
              open={this.state.modal_open}
              size="small"
            >
              <Header
                icon="question circle"
                content="Do you want to apply for this job ?"
              />
              <Modal.Actions>
                <Modal.Actions>
                  <Button
                    onClick={() => this.setState({ modal_open: false })}
                    basic
                    color="red"
                    inverted
                  >
                    <Icon name="remove" /> No
                  </Button>
                  <Button color="green" inverted onClick={this.onApplyJob}>
                    <Icon name="checkmark" /> Yes
                  </Button>
                </Modal.Actions>
              </Modal.Actions>
            </Modal>
          </Grid.Column>
          <Grid.Column width={9}>
            <Accordion styled>
              <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                Job Name
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <p>{this.props.data.jobName}</p>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                Job Desciption
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <p>{this.props.data.jobDesc}</p>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                Location
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <p>{this.props.data.location}</p>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 3}
                index={3}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                Qualifications
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 3}>
                <p>{this.props.data.qualifications}</p>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 4}
                index={4}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                Employment Type
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 4}>
                <p>{this.props.data.employmentType}</p>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 5}
                index={5}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                Minimum Experience
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 5}>
                <p>{this.props.data.minimumExperience}</p>
              </Accordion.Content>
            </Accordion>
          </Grid.Column>
          <Grid.Column
            style={{ display: "flex", alignItems: "center" }}
            width={3}
          >
            <div>
              <List>
                <List.Item>
                  <List.Header>Company Name</List.Header>
                  <p>{this.state.company.companyName}</p>
                </List.Item>
                <List.Item>
                  <List.Header>Company Address</List.Header>
                  <p>{this.state.company.companyAddress}</p>
                </List.Item>
                <List.Item>
                  <List.Header>Company Industry</List.Header>
                  <p>{this.state.company.companyIndustry}</p>
                </List.Item>
              </List>
            </div>
          </Grid.Column>
        </Grid>
        <Divider section />
      </div>
    );
  }
}

export default JobsList;

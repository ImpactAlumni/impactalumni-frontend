import React, { Component } from "react";
import { Container, Table } from "semantic-ui-react";
import axios from "axios";

class JobsApplied extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    await axios
      .get(`${process.env.REACT_APP_IMPACTALUMNI}/students_apply/`)
      .then(res => {
        console.log(res);
        this.setState({ jobs: res.data.data });
      });
  };

  render() {
    if (!this.state.jobs) {
      return null;
    }
    return (
      <Container>
        <div>
          <h1 style={{ textAlign: "center" }}>Jobs Applied</h1>
        </div>
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Job Name</Table.HeaderCell>
                <Table.HeaderCell>Company Name</Table.HeaderCell>
                <Table.HeaderCell>Location</Table.HeaderCell>
                <Table.HeaderCell>Company Address</Table.HeaderCell>
                <Table.HeaderCell>Apply Date</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {this.state.jobs.map(res => (
              <Table.Body>
                <Table.Row>
                  <Table.Cell>John Lilki</Table.Cell>
                  <Table.Cell>September 14, 2013</Table.Cell>
                  <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                  <Table.Cell>No</Table.Cell>
                  <Table.Cell>{res.apply_date}</Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
        </div>
      </Container>
    );
  }
}

export default JobsApplied;

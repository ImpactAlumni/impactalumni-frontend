import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import "../App.css";

import axios from "axios";
import BatchCard from "./batchCard";

import Footer from "./footer";

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
        <Container>
          <div className="partner">
            <h1 className="partner-title">Partner</h1>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Info;

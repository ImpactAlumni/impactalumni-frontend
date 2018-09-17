import React, { Component } from "react";
import {
  Grid,
  Image,
  Container,
  Card,
  Icon,
  Modal,
  Button,
  Header,
  List
} from "semantic-ui-react";
import "../App.css";
import moment from "moment";
import axios from "axios";
import BatchCard from "./batchCard";

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
    );
  }
}

export default Info;

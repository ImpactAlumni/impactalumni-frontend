import React, { Component } from "react";
import moment from "moment";
import {
  Grid,
  Card,
  Image,
  Icon,
  Modal,
  List,
  Header
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

class BatchCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_IMPACTALUMNI}/batches/${
          this.props.data.id
        }/students`
      )
      .then(data => {
        console.log(data);
        this.setState({ students: data.data.data.students });
      });
  };

  render() {
    const batch = this.props.data;
    if (!this.state.students) {
      return null;
    }

    return (
      <Modal
        trigger={
          <Grid.Column>
            <Card link>
              <Image
                src={`${process.env.REACT_APP_IMPACTALUMNI}/assets/batch-logo/${
                  batch.image
                }`}
              />
              <Card.Content>
                <Card.Header
                  style={{
                    fontFamily: "Menlo, Monaco, 'Courier New', monospace"
                  }}
                >
                  {batch.batchName}
                </Card.Header>
                <Card.Meta>
                  <span className="date">
                    {moment(batch.startDate).format("LL")}
                  </span>
                  <span>-</span>
                  <span className="date">
                    {moment(batch.endDate).format("LL")}
                  </span>
                </Card.Meta>
              </Card.Content>
              <Card.Content
                style={{
                  fontFamily: "Menlo, Monaco, 'Courier New', monospace"
                }}
                extra
              >
                <a>
                  <Icon name="user" />
                  {this.state.students.length} Students
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
        }
      >
        <Modal.Header
          style={{
            fontFamily: "Menlo, Monaco, 'Courier New', monospace"
          }}
        >
          Batch Detail
        </Modal.Header>
        <Modal.Content image scrolling>
          <Image
            size="medium"
            src={`${process.env.REACT_APP_IMPACTALUMNI}/assets/batch-logo/${
              batch.image
            }`}
            wrapped
          />
          <Modal.Description>
            <Header
              style={{
                fontFamily: "Menlo, Monaco, 'Courier New', monospace"
              }}
            >
              {batch.batchName}
            </Header>
            <List animated verticalAlign="middle">
              {this.state.students.map(student => (
                <List.Item>
                  <Image
                    avatar
                    src={`${process.env.REACT_APP_IMPACTALUMNI}/assets/foto/${
                      student.foto
                    }`}
                  />
                  <List.Content>
                    <List.Header
                      style={{
                        fontFamily: "Menlo, Monaco, 'Courier New', monospace"
                      }}
                      as={Link}
                      to={"/profile/" + student.id}
                    >
                      {student.fullName}
                    </List.Header>
                  </List.Content>
                </List.Item>
              ))}
            </List>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default BatchCard;

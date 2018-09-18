import React, { Component } from "react";
import moment from "moment";
import {
  Grid,
  Card,
  Image,
  Icon,
  Modal,
  List,
  Header,
  Button
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
      .get(`http://localhost:3000/batches/${this.props.data.id}/students`)
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
              <Image src={`http://localhost:3000/assets/${batch.image}`} />
              <Card.Content>
                <Card.Header>{batch.batchName}</Card.Header>
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
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  {this.state.students.length} Students
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
        }
      >
        <Modal.Header>Batch Detail</Modal.Header>
        <Modal.Content image scrolling>
          <Image
            size="medium"
            src={`http://localhost:3000/assets/${batch.image}`}
            wrapped
          />
          <Modal.Description>
            <Header>{batch.batchName}</Header>
            <p>
              This is an example of expanded content that will cause the modal's
              dimmer to scroll
            </p>
            <List animated verticalAlign="middle">
              {this.state.students.map(student => (
                <List.Item>
                  <Image
                    avatar
                    src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                  />
                  <List.Content>
                    <List.Header as={Link} to={"/profile/" + student.id}>
                      {student.fullName}
                    </List.Header>
                  </List.Content>
                </List.Item>
              ))}
            </List>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary>
            Proceed <Icon name="chevron right" />
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default BatchCard;

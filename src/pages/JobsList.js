import {
  Container,
  Grid,
  Image,
  state,
  Accordion,
  Icon,
  List,
  Divider
} from "semantic-ui-react";
import React, { Component } from "react";

import axios from "axios";

class JobsList extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  componentDidMount = async () => {
    await axios
      .get(`http://localhost:3000/partners/${this.props.data.id_company}`)
      .then(res => {
        console.log(res.data.data);
        // this.setState({ jobs: res.data.data });
      });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <div>
        <Grid>
          <Grid.Column width={4}>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
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
          <Grid.Column width={3}>
            <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
          </Grid.Column>
        </Grid>
        <Divider section />
      </div>
    );
  }
}

export default JobsList;

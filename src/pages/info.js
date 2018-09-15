import React from "react";
import { Grid, Image, Container, Card, Icon } from "semantic-ui-react";
import "../App.css";

import batch1 from "../img/batch1.svg";
import batch2 from "../img/batch2.svg";
import batch3 from "../img/batch3.svg";
import batch4 from "../img/batch4.svg";

const GridExampleVerticallyDivided = () => (
  <Container>
    <div>
      <h1 className="alumni-title">Batch</h1>
    </div>
    <div className="batch-logo1">
      <Grid divided="vertically">
        <Grid.Row columns={4}>
          <Grid.Column>
            <Card>
              <Image src={batch1} />
              <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Image src={batch2} />
              <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Image src={batch3} />
              <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Image src={batch4} />
              <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </Container>
);

export default GridExampleVerticallyDivided;

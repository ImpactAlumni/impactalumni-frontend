import React, { Component } from "react";
import { Container, Grid, Image } from "semantic-ui-react";

class Gallery extends Component {
  state = {};
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Container>
          <div>
            <h1>Gallery</h1>
          </div>
          <div style={{ marginTop: "50px" }}>
            <Grid>
              <Grid.Column width={4}>
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              </Grid.Column>
              <Grid.Column width={9}>
                <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
              </Grid.Column>
              <Grid.Column width={3}>
                <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
              </Grid.Column>
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
}

export default Gallery;

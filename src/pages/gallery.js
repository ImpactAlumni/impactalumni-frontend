import React, { Component } from "react";
import { Container, Grid, Image } from "semantic-ui-react";

import a from "../img/gallery/a.jpg";
import b from "../img/gallery/b.jpg";
import c from "../img/gallery/c.jpg";
import d from "../img/gallery/d.jpg";
import e from "../img/gallery/e.jpg";
import f from "../img/gallery/f.jpg";
import g from "../img/gallery/g.jpg";
import h from "../img/gallery/h.jpg";
import i from "../img/gallery/i.jpg";
import j from "../img/gallery/j.jpg";
import k from "../img/gallery/k.jpg";
import l from "../img/gallery/l.jpg";
// import m from "../img/gallery/m.jpeg";
import n from "../img/gallery/n.jpeg";
import o from "../img/gallery/o.jpeg";
import p from "../img/gallery/p.jpeg";
import q from "../img/gallery/q.jpeg";
import r from "../img/gallery/r.jpeg";
// import s from "../img/gallery/s.jpeg";
import Footer from "./footer";

class Gallery extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          verticalAlign: "middle"
        }}
      >
        <div style={{ marginBottom: "50px" }}>
          <Container>
            <div>
              <h1>Gallery</h1>
            </div>
            <div style={{ marginTop: "50px" }}>
              <Grid style={{ display: "flex", alignItems: "center" }}>
                <Grid.Column width={4}>
                  <Image style={{ marginBottom: "20px" }} src={c} />
                  <Image src={d} />
                </Grid.Column>
                <Grid.Column width={9}>
                  <Image src={e} fluid />
                </Grid.Column>
                <Grid.Column width={3}>
                  <Image style={{ marginBottom: "20px" }} src={f} fluid />
                  <Image style={{ marginBottom: "20px" }} src={g} />
                  <Image src={h} />
                </Grid.Column>
              </Grid>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Image src={j} />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Image src={o} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Image src={a} />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Image src={b} />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Image src={k} />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Image src={p} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Image src={l} />
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Image src={q} />
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Image src={r} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Image src={i} />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Image src={n} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Gallery;

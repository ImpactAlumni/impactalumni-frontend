import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import axios from "axios";

class Partner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    await axios.get(`http://localhost:3000/partners`).then(res => {
      console.log(res.data.data);
      this.setState({ partner: res.data.data });
    });
  };

  render() {
    if (!this.state.partner) {
      return null;
    }
    return (
      <div>
        <div className="partner">
          <h1 className="partner-title">Partners</h1>
        </div>
        <div className="partnerIsi">
          <Grid divided="vertically">
            <Grid.Row columns={4}>
              {this.state.partner.map(partner => (
                <Grid.Column style={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src={`http://localhost:3000/assets/partner-logo/${
                      partner.logo
                    }`}
                  />
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Partner;

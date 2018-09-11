import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
} from "semantic-ui-react";

import HomepageHeading from "./HomePageHeading";

import "../../../App.css";

import { Link } from "react-router-dom";

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility //untuk navbar biar fixed
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}>
          <Segment
            id="segment"
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical>
            <Menu //navbar fixed
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large">
              <Container>
                <Link to="/">
                  <Menu.Item as="a">Home</Menu.Item>
                </Link>
                <Link to="/info">
                  <Menu.Item as="a">Info</Menu.Item>
                </Link>
                <Link to="/forum">
                  <Menu.Item as="a">Forum</Menu.Item>
                </Link>
                <Link to="/aboutus">
                  <Menu.Item as="aboutus">About Us</Menu.Item>
                </Link>
                <Menu.Item position="right">
                  <Button as="a" inverted={!fixed}>
                    Log in
                  </Button>
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

export default DesktopContainer;

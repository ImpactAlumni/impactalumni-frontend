import PropTypes from "prop-types";
import React from "react";
import DesktopContainer from "./DekstopContainer";
import MobileContainer from "./MobileContainer";

//codingan dibawah
const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};
export default ResponsiveContainer;

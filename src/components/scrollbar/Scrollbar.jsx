import { Box } from "@chakra-ui/react";
import React from "react";

/* TRACK */
export const renderTrack = ({ style, ...props }) => {
  const trackStyle = {
    position: "absolute",
    width: 10,
    right: 4,
    top: 6,
    bottom: 6,
    borderRadius: 20,
    background: "#FFFFFF",
    border: "2px solid #111",
    boxShadow: "3px 3px 0 #111",
    transition: "all 0.2s ease",
  };

  return <div style={{ ...style, ...trackStyle }} {...props} />;
};

/* THUMB */
export const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 20,
    background: "#4D96FF",
    border: "2px solid #111",
    boxShadow: "2px 2px 0 #111",
    cursor: "grab",
  };

  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

/* VIEW */
export const renderView = ({ style, ...props }) => {
  const viewStyle = {
    marginBottom: -22,
    paddingRight: "8px",
  };

  return (
    <Box
      me={{ base: "0px !important", lg: "-10px !important" }}
      style={{ ...style, ...viewStyle }}
      {...props}
    />
  );
};
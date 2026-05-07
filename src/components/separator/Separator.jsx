import { Flex } from "@chakra-ui/react";
import React from "react";

const THEME = {
  black: "#111111",
  yellow: "#F5FF63",
  cyan: "#33DFFF",
  pink: "#FF4FD8",
  soft: "#FFFDEB",
};

const HSeparator = (props) => {
  const { ...rest } = props;

  return (
    <Flex
      h="4px"
      w="100%"
      bg={THEME.black}
      borderRadius="999px"
      boxShadow={`2px 2px 0 ${THEME.yellow}`}
      {...rest}
    />
  );
};

const VSeparator = (props) => {
  const { ...rest } = props;

  return (
    <Flex
      w="4px"
      h="100%"
      bg={THEME.black}
      borderRadius="999px"
      boxShadow={`2px 2px 0 ${THEME.cyan}`}
      {...rest}
    />
  );
};

export { HSeparator, VSeparator };
import React from "react";
import { Flex } from "@chakra-ui/react";

export default function IconBox(props) {
  const { icon, children, ...rest } = props;

  return (
    <Flex
      align="center"
      justify="center"
      w="46px"
      h="46px"
      bg="#4ECDC4"
      color="#111"
      border="3px solid #111"
      borderRadius="14px"
      boxShadow="4px 4px 0 #111"
      {...rest}
    >
      {icon || children}
    </Flex>
  );
}
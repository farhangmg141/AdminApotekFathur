import React from "react";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import {
  MdInfo,
  MdCheckCircle,
  MdWarning,
  MdError,
} from "react-icons/md";
import { THEME } from "../../theme/themeConstants";

export default function NeoAlert({ status = "info", title, description, ...rest }) {
  const getThemeConfig = () => {
    switch (status) {
      case "success":
        return {
          bg: THEME.success || "#A7FF3D",
          icon: MdCheckCircle,
        };
      case "warning":
        return {
          bg: THEME.yellow || "#F5FF63",
          icon: MdWarning,
        };
      case "danger":
        return {
          bg: THEME.danger || "#FF4FD8",
          icon: MdError,
        };
      case "info":
      default:
        return {
          bg: THEME.primary || "#33DFFF",
          icon: MdInfo,
        };
    }
  };

  const config = getThemeConfig();

  return (
    <Flex
      direction="row"
      align="center"
      bg={config.bg}
      border={`3px solid ${THEME.black}`}
      borderRadius="14px"
      boxShadow={`4px 4px 0 ${THEME.black}`}
      p="16px"
      gap="12px"
      fontFamily="'Inter', sans-serif"
      {...rest}
    >
      <Flex
        align="center"
        justify="center"
        w="36px"
        h="36px"
        bg="#FFFFFF"
        border={`2px solid ${THEME.black}`}
        borderRadius="8px"
        boxShadow={`2px 2px 0 ${THEME.black}`}
        flexShrink={0}
      >
        <Icon as={config.icon} w="20px" h="20px" color={THEME.black} />
      </Flex>
      <Box>
        {title && (
          <Text
            fontSize="14px"
            fontWeight="900"
            color={THEME.black}
            textTransform="uppercase"
            letterSpacing="-0.02em"
          >
            {title}
          </Text>
        )}
        {description && (
          <Text fontSize="12px" fontWeight="800" color={THEME.black}>
            {description}
          </Text>
        )}
      </Box>
    </Flex>
  );
}

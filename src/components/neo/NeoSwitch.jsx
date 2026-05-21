import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { THEME } from "../../theme/themeConstants";

export default function NeoSwitch({
  isChecked = false,
  onChange,
  label,
  color = THEME.primary,
  ...rest
}) {
  const toggle = () => {
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <Flex align="center" gap="10px" cursor="pointer" onClick={toggle} {...rest}>
      <Box
        position="relative"
        w="58px"
        h="32px"
        bg={isChecked ? color : "#E2E8F0"}
        border={`3px solid ${THEME.black}`}
        borderRadius="999px"
        boxShadow={`3px 3px 0 ${THEME.black}`}
        transition="all 0.2s ease"
        _hover={{
          boxShadow: `4px 4px 0 ${THEME.black}`,
        }}
      >
        <Box
          position="absolute"
          top="3px"
          left={isChecked ? "28px" : "4px"}
          w="20px"
          h="20px"
          bg="#FFFFFF"
          border={`3px solid ${THEME.black}`}
          borderRadius="50%"
          transition="all 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55)"
        />
      </Box>
      {label && (
        <Text
          fontSize="13px"
          fontWeight="900"
          color={THEME.black}
          userSelect="none"
          textTransform="uppercase"
          letterSpacing="-0.02em"
        >
          {label}
        </Text>
      )}
    </Flex>
  );
}

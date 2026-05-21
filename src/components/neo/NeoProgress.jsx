import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { THEME } from "../../theme/themeConstants";

export default function NeoProgress({
  value = 0,
  color = THEME.primary,
  height = "24px",
  showLabel = false,
  ...rest
}) {
  const percent = Math.min(Math.max(value, 0), 100);

  return (
    <Box w="100%" {...rest}>
      <Flex justify="space-between" mb="6px">
        {showLabel && (
          <Text
            fontSize="12px"
            fontWeight="900"
            color={THEME.black}
            textTransform="uppercase"
            letterSpacing="-0.02em"
          >
            Progress
          </Text>
        )}
        {showLabel && (
          <Text fontSize="12px" fontWeight="900" color={THEME.black}>
            {percent}%
          </Text>
        )}
      </Flex>
      <Box
        w="100%"
        h={height}
        bg="#FFFFFF"
        border={`3px solid ${THEME.black}`}
        borderRadius="10px"
        boxShadow={`3px 3px 0 ${THEME.black}`}
        overflow="hidden"
        position="relative"
      >
        <Box
          w={`${percent}%`}
          h="100%"
          bg={color}
          transition="width 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
          position="relative"
          overflow="hidden"
          backgroundImage="linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent)"
          backgroundSize="30px 30px"
        />
      </Box>
    </Box>
  );
}

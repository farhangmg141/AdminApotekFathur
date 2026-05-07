import React from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Brand from "./Brand.jsx";
import Links from "./Links.jsx";

const THEME = {
  black: "#111111",
  white: "#FFFFFF",
  yellow: "#F5FF63",
  cyan: "#33DFFF",
  pink: "#FF4FD8",
  green: "#A7FF3D",
  orange: "#FF8A00",
  purple: "#C8A2FF",
  soft: "#FFFDEB",
  muted: "#666666",
};

function SidebarContent(props) {
  const { routes } = props;

  return (
    <Flex
      direction="column"
      height="100%"
      pt="10px"
      px="12px"
      bg={THEME.soft}
      fontFamily="'Inter', sans-serif"
    >
      <Brand />

      <Stack direction="column" mb="auto" mt="8px" spacing="4px">
        <Box ps="2px" pe="2px">
          <Links routes={routes} />
        </Box>
      </Stack>

      <Box
        mt="18px"
        mb="18px"
        mx="2px"
        p="14px"
        bg={THEME.cyan}
        border={`3px solid ${THEME.black}`}
        borderRadius="14px"
        boxShadow={`5px 5px 0 ${THEME.black}`}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="-16px"
          right="-14px"
          w="46px"
          h="46px"
          bg={THEME.yellow}
          border={`3px solid ${THEME.black}`}
          borderRadius="10px"
          transform="rotate(14deg)"
        />

        <Text
          fontSize="10px"
          fontWeight="900"
          color={THEME.black}
          mb="4px"
          textTransform="uppercase"
          letterSpacing="1px"
          position="relative"
          zIndex="2"
        >
          Status
        </Text>

        <Text
          fontSize="13px"
          fontWeight="900"
          color={THEME.black}
          lineHeight="1.4"
          position="relative"
          zIndex="2"
        >
          Sistem apotek aktif
        </Text>

        <Text
          mt="6px"
          fontSize="11px"
          fontWeight="700"
          color={THEME.black}
          opacity="0.75"
          position="relative"
          zIndex="2"
        >
          Semua layanan berjalan normal
        </Text>
      </Box>
    </Flex>
  );
}

export default SidebarContent;
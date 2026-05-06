import React from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Brand from "./Brand.jsx";
import Links from "./Links.jsx";

function SidebarContent(props) {
  const { routes } = props;

  return (
    <Flex
      direction="column"
      height="100%"
      pt="10px"
      px="14px"
      bg="#FFFFFF"
    >
      <Brand />

      <Stack direction="column" mb="auto" mt="10px">
        <Box ps="4px" pe="10px">
          <Links routes={routes} />
        </Box>
      </Stack>

      <Box
        mt="24px"
        mb="22px"
        mx="4px"
        p="16px"
        bg="#4ECDC4"
        border="3px solid #111"
        borderRadius="18px"
        boxShadow="6px 6px 0 #111"
      >
        <Text fontSize="12px" fontWeight="900" color="#111" mb="1">
          STATUS
        </Text>
        <Text fontSize="13px" fontWeight="800" color="#111">
          Sistem apotek aktif
        </Text>
      </Box>
    </Flex>
  );
}

export default SidebarContent;
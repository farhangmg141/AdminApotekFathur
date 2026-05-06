import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export function SidebarBrand() {
  return (
    <Flex align="center" direction="column" px="4" pt="28px" pb="20px">
      <Box
        bg="#FFE66D"
        border="4px solid #111"
        borderRadius="22px"
        boxShadow="8px 8px 0 #111"
        px="5"
        py="4"
        w="100%"
        textAlign="center"
        transform="rotate(-1deg)"
      >
        <Text
          fontSize="2xl"
          fontWeight="900"
          color="#111"
          fontFamily="Poppins"
          lineHeight="1"
          letterSpacing="-1px"
        >
          APOTEK
        </Text>

        <Text
          fontSize="3xl"
          fontWeight="900"
          color="#111"
          fontFamily="Poppins"
          lineHeight="1"
          mt="1"
        >
          <Text
            as="span"
            bg="#FF6B6B"
            border="3px solid #111"
            borderRadius="12px"
            px="3"
            py="1"
            boxShadow="4px 4px 0 #111"
            display="inline-block"
          >
            PATUR
          </Text>
        </Text>
      </Box>

      <Box
        w="85%"
        h="5px"
        bg="#111"
        borderRadius="999px"
        mt="24px"
      />
    </Flex>
  );
}

export default SidebarBrand;
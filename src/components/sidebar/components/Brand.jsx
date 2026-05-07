import React from "react";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { MdLocalPharmacy } from "react-icons/md";

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
};

export function SidebarBrand() {
  return (
    <Flex
      align="center"
      direction="column"
      px="16px"
      pt="22px"
      pb="18px"
      fontFamily="'Inter', sans-serif"
    >
      <Box
        bg={THEME.white}
        border={`3px solid ${THEME.black}`}
        borderRadius="14px"
        boxShadow={`5px 5px 0 ${THEME.black}`}
        px="16px"
        py="16px"
        w="100%"
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="-18px"
          right="-18px"
          w="62px"
          h="62px"
          bg={THEME.yellow}
          border={`3px solid ${THEME.black}`}
          borderRadius="12px"
          transform="rotate(14deg)"
        />

        <Flex align="center" gap="12px" position="relative" zIndex="2">
          <Flex
            w="48px"
            h="48px"
            bg={THEME.cyan}
            border={`3px solid ${THEME.black}`}
            borderRadius="12px"
            boxShadow={`3px 3px 0 ${THEME.black}`}
            align="center"
            justify="center"
          >
            <Icon
              as={MdLocalPharmacy}
              w="24px"
              h="24px"
              color={THEME.black}
            />
          </Flex>

          <Box>
            <Text
              fontSize="12px"
              fontWeight="900"
              color={THEME.black}
              textTransform="uppercase"
              lineHeight="1"
              letterSpacing="1px"
            >
              Dashboard
            </Text>

            <Text
              fontSize="22px"
              fontWeight="900"
              color={THEME.black}
              lineHeight="1"
              letterSpacing="-1px"
              mt="4px"
            >
              APOTEK
            </Text>

            <Box
              display="inline-block"
              mt="8px"
              bg={THEME.pink}
              border={`3px solid ${THEME.black}`}
              borderRadius="10px"
              px="10px"
              py="4px"
              boxShadow={`3px 3px 0 ${THEME.black}`}
            >
              <Text
                fontSize="12px"
                fontWeight="900"
                color={THEME.black}
                textTransform="uppercase"
                lineHeight="1"
              >
                Rustaf
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box
        w="88%"
        h="4px"
        bg={THEME.black}
        borderRadius="999px"
        mt="18px"
        boxShadow={`2px 2px 0 ${THEME.cyan}`}
      />
    </Flex>
  );
}

export default SidebarBrand;
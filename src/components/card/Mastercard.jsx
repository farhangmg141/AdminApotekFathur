import React from "react";
import { Flex, Box, Icon, Text, Spacer } from "@chakra-ui/react";
import Card from "components/card/Card";
import { RiMastercardFill } from "react-icons/ri";
import { THEME } from "../../theme/themeConstants";

export default function Mastercard(props) {
  const { number = "•••• •••• •••• 1234", exp = "12/30", cvv = "000", cardHolder = "FATHUR RAHMAN", bg = "#FF4FD8", ...rest } = props;

  return (
    <Card
      bg={bg}
      p="24px"
      h="190px"
      w="100%"
      border={`3px solid ${THEME.black || "#111"}`}
      boxShadow={`6px 6px 0 ${THEME.black || "#111"}`}
      position="relative"
      overflow="hidden"
      transition="all 0.2s ease"
      _hover={{
        transform: "translate(-2px, -2px)",
        boxShadow: `8px 8px 0 ${THEME.black || "#111"}`,
      }}
      {...rest}
    >
      {/* Abstract Neo-Brutalist Background Elements */}
      <Box
        position="absolute"
        bottom="-20px"
        right="-20px"
        w="120px"
        h="120px"
        borderRadius="full"
        bg={THEME.success || "#A7FF3D"}
        border={`3px solid ${THEME.black || "#111"}`}
        zIndex={0}
        opacity={0.8}
      />
      <Box
        position="absolute"
        top="-10px"
        right="30px"
        w="60px"
        h="60px"
        transform="rotate(15deg)"
        bg={THEME.primary || "#33DFFF"}
        border={`3px solid ${THEME.black || "#111"}`}
        zIndex={0}
        opacity={0.6}
      />

      <Flex direction="column" h="100%" w="100%" justify="space-between" zIndex={1} position="relative">
        <Flex justify="space-between" align="center">
          <Box>
            <Text
              fontSize="12px"
              fontWeight="900"
              color={THEME.black || "#111"}
              letterSpacing="1px"
              textTransform="uppercase"
            >
              Apotek Rustaf
            </Text>
            <Text
              fontSize="8px"
              fontWeight="800"
              color={THEME.black || "#111"}
              opacity={0.8}
            >
              PREMIUM HEALTHCARD
            </Text>
          </Box>
          <Icon as={RiMastercardFill} w="40px" h="40px" color={THEME.black || "#111"} />
        </Flex>

        {/* SIM Chip representation */}
        <Box
          w="38px"
          h="28px"
          bg="#F5FF63"
          border={`2px solid ${THEME.black || "#111"}`}
          borderRadius="6px"
          boxShadow={`1.5px 1.5px 0 ${THEME.black || "#111"}`}
          mt="4px"
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="2px"
        >
          <Box w="8px" h="100%" borderRight={`1.5px solid ${THEME.black || "#111"}`} />
          <Box w="8px" h="100%" borderRight={`1.5px solid ${THEME.black || "#111"}`} />
        </Box>

        <Spacer />

        <Flex direction="column" mt="10px">
          <Text
            fontSize="18px"
            fontWeight="900"
            fontFamily="monospace"
            color={THEME.black || "#111"}
            letterSpacing="1.5px"
          >
            {number}
          </Text>

          <Flex mt="10px" justify="space-between" align="flex-end">
            <Flex direction="column">
              <Text fontSize="7px" fontWeight="900" color="#444" textTransform="uppercase">
                Card Holder
              </Text>
              <Text fontSize="11px" fontWeight="900" color={THEME.black || "#111"}>
                {cardHolder}
              </Text>
            </Flex>

            <Flex gap="16px">
              <Flex direction="column">
                <Text fontSize="7px" fontWeight="900" color="#444" textTransform="uppercase">
                  Valid Thru
                </Text>
                <Text fontSize="11px" fontWeight="900" color={THEME.black || "#111"}>
                  {exp}
                </Text>
              </Flex>
              <Flex direction="column">
                <Text fontSize="7px" fontWeight="900" color="#444" textTransform="uppercase">
                  CVV
                </Text>
                <Text fontSize="11px" fontWeight="900" color={THEME.black || "#111"}>
                  {cvv}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}

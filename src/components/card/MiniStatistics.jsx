import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import Card from "components/card/Card";
import { THEME } from "../../theme/themeConstants";

export default function MiniStatistics(props) {
  const { startContent, endContent, name, growth, value, bg = "#FFFFFF", ...rest } = props;

  return (
    <Card
      bg={bg}
      p="20px"
      transition="all 0.2s ease"
      _hover={{
        transform: "translate(-2px, -2px)",
        boxShadow: `7px 7px 0 ${THEME.black || "#111"}`,
      }}
      {...rest}
    >
      <Flex align="center" justify="space-between" w="100%" h="100%">
        <Flex align="center" gap="14px">
          {startContent && (
            <Flex align="center" justify="center" flexShrink={0}>
              {startContent}
            </Flex>
          )}

          <Box>
            <Text
              fontSize="12px"
              fontWeight="900"
              color="#555"
              textTransform="uppercase"
              letterSpacing="0.5px"
              mb="4px"
            >
              {name}
            </Text>
            <Text
              fontSize="26px"
              fontWeight="900"
              color={THEME.black || "#111"}
              lineHeight="1.1"
              letterSpacing="-0.5px"
            >
              {value}
            </Text>

            {growth && (
              <Flex align="center" mt="8px" gap="6px">
                <Text
                  bg={THEME.success || "#A7FF3D"}
                  color={THEME.black || "#111"}
                  fontSize="10px"
                  fontWeight="900"
                  px="6px"
                  py="2px"
                  border={`1.5px solid ${THEME.black || "#111"}`}
                  borderRadius="6px"
                  boxShadow={`1px 1px 0 ${THEME.black || "#111"}`}
                >
                  {growth}
                </Text>
                <Text fontSize="10px" fontWeight="800" color="#666">
                  bulan ini
                </Text>
              </Flex>
            )}
          </Box>
        </Flex>

        {endContent && (
          <Flex align="center" justify="center" flexShrink={0}>
            {endContent}
          </Flex>
        )}
      </Flex>
    </Card>
  );
}

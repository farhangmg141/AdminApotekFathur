import React from "react";
import {
  Box,
  Flex,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const THEME = {
  black: "#111111",
  white: "#FFFFFF",
  yellow: "#F5FF63",
  cyan: "#33DFFF",
  pink: "#FF4FD8",
  orange: "#FF8A00",
  green: "#A7FF3D",
  soft: "#FFFDEB",
  muted: "#666666",
};

const PageHeader = ({
  title,
  subtitle,
  breadcrumb,
  children,
  hideBreadcrumb = false,
  compact = false,
}) => {
  const breadcrumbs = breadcrumb
    ? Array.isArray(breadcrumb)
      ? breadcrumb
      : [breadcrumb]
    : [];

  return (
    <Box
      mb={compact ? "12px" : "20px"}
      pt="0"
      fontFamily="'Inter', sans-serif"
    >
      <Flex direction="column">
        {!hideBreadcrumb && breadcrumbs.length > 0 && (
          <Breadcrumb
            separator={<ChevronRightIcon color={THEME.black} />}
            spacing="7px"
            mb="12px"
            flexWrap="wrap"
          >
            <BreadcrumbItem
              bg={THEME.white}
              color={THEME.muted}
              fontSize="10px"
              fontWeight="900"
              textTransform="uppercase"
              letterSpacing="0.8px"
              border={`2px solid ${THEME.black}`}
              borderRadius="8px"
              px="10px"
              py="4px"
              boxShadow={`3px 3px 0 ${THEME.black}`}
            >
              <BreadcrumbLink href="#">Apotek Rustaf</BreadcrumbLink>
            </BreadcrumbItem>

            {breadcrumbs.map((item, index) => (
              <BreadcrumbItem
                key={index}
                bg={index === breadcrumbs.length - 1 ? THEME.cyan : THEME.white}
                color={THEME.black}
                fontSize="10px"
                fontWeight="900"
                textTransform="uppercase"
                letterSpacing="0.8px"
                border={`2px solid ${THEME.black}`}
                borderRadius="8px"
                px="10px"
                py="4px"
                boxShadow={`3px 3px 0 ${THEME.black}`}
              >
                <BreadcrumbLink href="#">{item}</BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        )}

        <Flex justify="space-between" align="flex-start" wrap="wrap" gap="12px">
          <Box flex="1" minW="0">
            <Text
              color={THEME.black}
              fontSize={
                compact
                  ? { base: "26px", md: "34px", xl: "38px" }
                  : { base: "30px", md: "42px", xl: "48px" }
              }
              fontWeight="900"
              lineHeight="1"
              letterSpacing="-1.5px"
            >
              {title}
            </Text>

            <Box
              h={compact ? "6px" : "8px"}
              bg={THEME.pink}
              mt={compact ? "8px" : "10px"}
              w={{ base: "72px", md: compact ? "90px" : "110px" }}
              border={`3px solid ${THEME.black}`}
              borderRadius="999px"
              boxShadow={`3px 3px 0 ${THEME.black}`}
            />
            {subtitle && (
              <Text
                mt={compact ? "10px" : "12px"}
                fontSize={{ base: "13px", md: compact ? "14px" : "16px" }}
                fontWeight="800"
                color={THEME.muted}
                maxW="720px"
                lineHeight="1.5"
              >
                {subtitle}
              </Text>
            )}
          </Box>

          {children && <Box flexShrink={0}>{children}</Box>}
        </Flex>
      </Flex>
    </Box>
  );
};

export default PageHeader;
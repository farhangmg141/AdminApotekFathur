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

const PageHeader = ({ title, breadcrumb, children }) => {
  const breadcrumbs = Array.isArray(breadcrumb) ? breadcrumb : [breadcrumb];

  return (
    <Box mb="24px" pt="0px" fontFamily="'Inter', sans-serif">
      <Flex direction="column">
        <Breadcrumb
          separator={<ChevronRightIcon color={THEME.black} />}
          spacing="7px"
          mb="16px"
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

        <Flex justify="space-between" align="flex-start" wrap="wrap" gap="16px">
          <Box>
            <Text
              color={THEME.black}
              fontSize={{ base: "30px", md: "42px", xl: "48px" }}
              fontWeight="900"
              lineHeight="0.95"
              letterSpacing="-2px"
            >
              {title}
            </Text>

            <Box
              h="8px"
              bg={THEME.pink}
              mt="12px"
              w={{ base: "78px", md: "110px" }}
              border={`3px solid ${THEME.black}`}
              borderRadius="999px"
              boxShadow={`3px 3px 0 ${THEME.black}`}
            />
          </Box>

          {children && <Box>{children}</Box>}
        </Flex>
      </Flex>
    </Box>
  );
};

export default PageHeader;
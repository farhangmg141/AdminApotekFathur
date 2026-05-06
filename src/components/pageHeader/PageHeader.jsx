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

const PageHeader = ({ title, breadcrumb, children }) => {
  const textColor = "#111111";
  const subTextColor = "#555555";
  const accentColor = "#4D96FF";

  const breadcrumbs = Array.isArray(breadcrumb) ? breadcrumb : [breadcrumb];

  return (
   <Box mb="28px" pt="0px">
      <Flex direction="column">
        <Breadcrumb
          separator={<ChevronRightIcon color="#111" />}
          spacing="8px"
          mb="18px"
        >
          <BreadcrumbItem
            bg="#FFFFFF"
            color={subTextColor}
            fontSize="11px"
            fontWeight="900"
            textTransform="uppercase"
            letterSpacing="1px"
            border="2px solid #111"
            borderRadius="10px"
            px="3"
            py="1"
            boxShadow="4px 4px 0 #111"
          >
            <BreadcrumbLink href="#">Apotek Rustaf</BreadcrumbLink>
          </BreadcrumbItem>

          {breadcrumbs.map((item, index) => (
            <BreadcrumbItem
              key={index}
              bg={index === breadcrumbs.length - 1 ? accentColor : "#FFFFFF"}
              color={index === breadcrumbs.length - 1 ? "#111" : subTextColor}
              fontSize="11px"
              fontWeight="900"
              textTransform="uppercase"
              letterSpacing="1px"
              border="2px solid #111"
              borderRadius="10px"
              px="3"
              py="1"
              boxShadow="4px 4px 0 #111"
            >
              <BreadcrumbLink href="#">{item}</BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>

        <Flex justify="space-between" align="flex-start" wrap="wrap" gap="18px">
          <Box>
            <Text
              color={textColor}
              fontSize={{ base: "38px", md: "54px", xl: "66px" }}
              fontWeight="900"
              lineHeight="1"
              letterSpacing="-2px"
              textShadow="3px 3px 0 #FFFFFF"
            >
              {title}
            </Text>

            <Box
              h="10px"
              bg="#FF6B6B"
              mt="16px"
              w={{ base: "90px", md: "130px" }}
              border="3px solid #111"
              borderRadius="20px"
              boxShadow="5px 5px 0 #111"
            />
          </Box>

          {children && <Box>{children}</Box>}
        </Flex>
      </Flex>
    </Box>
  );
};

export default PageHeader;
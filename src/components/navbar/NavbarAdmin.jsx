import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Link,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import AdminNavbarLinks from "components/navbar/NavbarLinksAdmin";

const THEME = {
  black: "#111111",
  white: "#FFFFFF",
  yellow: "#F5FF63",
  cyan: "#33DFFF",
  pink: "#FF4FD8",
  green: "#A7FF3D",
  orange: "#FF8A00",
  soft: "#FFFDEB",
  muted: "#666666",
};

export default function AdminNavbar(props) {
  const [scrolled, setScrolled] = useState(false);
  const { secondary, message, brandText } = props;

  useEffect(() => {
    const changeNavbar = () => setScrolled(window.scrollY > 1);

    window.addEventListener("scroll", changeNavbar);
    changeNavbar();

    return () => window.removeEventListener("scroll", changeNavbar);
  }, []);

  return (
    <Box
      position="fixed"
      bg={THEME.white}
      border={`3px solid ${THEME.black}`}
      borderRadius="14px"
      boxShadow={scrolled ? `6px 6px 0 ${THEME.black}` : `4px 4px 0 ${THEME.black}`}
      minH={{ base: "72px", md: "82px" }}
      mx="auto"
      px={{ base: "14px", md: "20px" }}
      py={{ base: "12px", md: "14px" }}
      left={{ xl: "310px" }}
      right={{ base: "10px", md: "22px", xl: "26px" }}
      top={{ base: "10px", md: "14px", xl: "18px" }}
      w={{
        base: "calc(100vw - 20px)",
        md: "calc(100vw - 44px)",
        xl: "calc(100vw - 336px)",
        "2xl": "calc(100vw - 336px)",
      }}
      zIndex="30"
      pointerEvents="auto"
      transition="all 0.2s ease"
      fontFamily="'Inter', sans-serif"
    >
      <Flex
        w="100%"
        align="center"
        justify="space-between"
        gap="14px"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box w={{ base: "100%", md: "auto" }}>
          <Breadcrumb mb="3px">
            <BreadcrumbItem color={THEME.muted} fontSize="10px" fontWeight="900">
              <BreadcrumbLink href="#">PAGES</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color={THEME.cyan} fontSize="10px" fontWeight="900">
              <BreadcrumbLink href="#">{brandText}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Link
            href="#"
            color={THEME.black}
            fontWeight="900"
            fontSize={{ base: "22px", md: "28px", xl: "32px" }}
            lineHeight="1"
            letterSpacing="-1.6px"
            _hover={{
              color: THEME.pink,
              textDecoration: "none",
            }}
            _focus={{ boxShadow: "none" }}
          >
            {brandText}
          </Link>
        </Box>

        <Box
          w={{ base: "100%", md: "auto" }}
          display="flex"
          justifyContent={{ base: "flex-start", md: "flex-end" }}
          position="relative"
          zIndex="31"
          pointerEvents="auto"
        >
          <AdminNavbarLinks
            onOpen={props.onOpen}
            logoText={props.logoText}
            secondary={props.secondary}
            fixed={props.fixed}
            scrolled={scrolled}
          />
        </Box>
      </Flex>

      {secondary && (
        <Text
          color={THEME.black}
          fontWeight="900"
          mt="2"
          fontSize="12px"
          bg={THEME.yellow}
          border={`2px solid ${THEME.black}`}
          borderRadius="8px"
          px="10px"
          py="4px"
          display="inline-block"
        >
          {message}
        </Text>
      )}
    </Box>
  );
}

AdminNavbar.propTypes = {
  brandText: PropTypes.string,
  variant: PropTypes.string,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func,
  logoText: PropTypes.string,
};
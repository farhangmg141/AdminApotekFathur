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

export default function AdminNavbar(props) {
  const [scrolled, setScrolled] = useState(false);
  const { secondary, message, brandText } = props;

  useEffect(() => {
    const changeNavbar = () => {
      setScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", changeNavbar);
    changeNavbar();

    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  }, []);

  return (
    <Box
      position="fixed"
      bg="#FFFFFF"
      border="4px solid #111"
      borderRadius="22px"
      boxShadow={scrolled ? "10px 10px 0 #111" : "7px 7px 0 #111"}
      display={secondary ? "block" : "flex"}
      minH="78px"
      alignItems="center"
      justifyContent="center"
      lineHeight="25.6px"
      mx="auto"
      pb="8px"
      pt="8px"
      right={{ base: "12px", md: "30px", lg: "30px", xl: "30px" }}
      top={{ base: "12px", md: "16px", lg: "20px", xl: "20px" }}
      px={{ base: "14px", md: "18px" }}
      w={{
        base: "calc(100vw - 6%)",
        md: "calc(100vw - 8%)",
        lg: "calc(100vw - 6%)",
        xl: "calc(100vw - 350px)",
        "2xl": "calc(100vw - 365px)",
      }}
      zIndex="9999"
      transition="all 0.25s ease"
      pointerEvents="auto"
    >
      <Flex
        w="100%"
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "flex-start", md: "center" }}
        gap={{ base: "8px", md: "0px" }}
      >
        <Box mb={{ base: "8px", md: "0px" }}>
          <Breadcrumb>
            <BreadcrumbItem
              color="#555"
              fontSize="11px"
              mb="5px"
              fontWeight="900"
              textTransform="uppercase"
              letterSpacing="1px"
            >
              <BreadcrumbLink href="#">Pages</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem
              color="#4D96FF"
              fontSize="11px"
              mb="5px"
              fontWeight="900"
              textTransform="uppercase"
              letterSpacing="1px"
            >
              <BreadcrumbLink href="#">{brandText}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Link
            color="#111"
            href="#"
            bg="inherit"
            borderRadius="inherit"
            fontWeight="900"
            fontSize={{ base: "24px", md: "34px" }}
            letterSpacing="-1px"
            lineHeight="1"
            _hover={{
              color: "#FF6B6B",
              textDecoration: "none",
            }}
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
          >
            {brandText}
          </Link>
        </Box>

        <Box
          ms={{ base: "0", md: "auto" }}
          w={{ base: "100%", md: "unset" }}
          position="relative"
          zIndex="10000"
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

      {secondary ? (
        <Text color="#111" fontWeight="900" mt="2">
          {message}
        </Text>
      ) : null}
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
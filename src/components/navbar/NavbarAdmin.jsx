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
    const changeNavbar = () => setScrolled(window.scrollY > 1);

    window.addEventListener("scroll", changeNavbar);
    changeNavbar();

    return () => window.removeEventListener("scroll", changeNavbar);
  }, []);

  return (
    <Box
      position="fixed"
      bg="#FFFFFF"
      border="4px solid #111"
      borderRadius="24px"
      boxShadow={scrolled ? "9px 9px 0 #111" : "6px 6px 0 #111"}
      minH={{ base: "74px", md: "86px" }}
      mx="auto"
      px={{ base: "14px", md: "20px" }}
      py={{ base: "10px", md: "12px" }}
      right={{ base: "12px", md: "24px", xl: "28px" }}
      top={{ base: "10px", md: "14px", xl: "18px" }}
      w={{
        base: "calc(100vw - 24px)",
        md: "calc(100vw - 48px)",
        xl: "calc(100vw - 340px)",
        "2xl": "calc(100vw - 360px)",
      }}
      zIndex="30"
      pointerEvents="auto"
      transition="all 0.25s ease"
    >
      <Flex
        w="100%"
        align="center"
        justify="space-between"
        gap="16px"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box w={{ base: "100%", md: "auto" }}>
          <Breadcrumb mb="3px">
            <BreadcrumbItem color="#555" fontSize="11px" fontWeight="900">
              <BreadcrumbLink href="#">Pages</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color="#4D96FF" fontSize="11px" fontWeight="900">
              <BreadcrumbLink href="#">{brandText}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Link
            href="#"
            color="#111"
            fontWeight="900"
            fontSize={{ base: "24px", md: "30px", xl: "34px" }}
            lineHeight="1"
            letterSpacing="-1.5px"
            _hover={{ color: "#FF6B6B", textDecoration: "none" }}
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
        <Text color="#111" fontWeight="900" mt="2">
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
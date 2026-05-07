import React from "react";
import { Flex, Link, List, ListItem, Text, Box } from "@chakra-ui/react";

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

export default function Footer() {
  const links = [
    { label: "Support", bg: THEME.cyan },
    { label: "License", bg: THEME.yellow },
    { label: "Terms", bg: THEME.orange },
    { label: "Blog", bg: THEME.green },
  ];

  return (
    <Box mt="34px" px={{ base: "14px", md: "22px" }} pb="28px">
      <Flex
        direction={{ base: "column", xl: "row" }}
        align="center"
        justify="space-between"
        gap="16px"
        bg={THEME.white}
        border={`3px solid ${THEME.black}`}
        borderRadius="14px"
        boxShadow={`5px 5px 0 ${THEME.black}`}
        px={{ base: "16px", md: "22px" }}
        py="18px"
        wrap="wrap"
        fontFamily="'Inter', sans-serif"
      >
        <Box>
          <Text
            color={THEME.black}
            fontWeight="900"
            fontSize={{ base: "13px", md: "15px" }}
            textAlign={{ base: "center", xl: "left" }}
            textTransform="uppercase"
            letterSpacing="-0.02em"
          >
            © {new Date().getFullYear()} Dashboard Apotek Rustaf
          </Text>

          <Text
            mt="4px"
            color={THEME.muted}
            fontWeight="800"
            fontSize="12px"
            textAlign={{ base: "center", xl: "left" }}
          >
            Sistem Manajemen Obat & Transaksi Apotek Modern
          </Text>
        </Box>

        <List
          display="flex"
          gap={{ base: "9px", md: "12px" }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {links.map((item) => (
            <ListItem key={item.label}>
              <Link
                fontWeight="900"
                fontSize="12px"
                color={THEME.black}
                bg={item.bg}
                px="13px"
                py="7px"
                border={`3px solid ${THEME.black}`}
                borderRadius="10px"
                boxShadow={`3px 3px 0 ${THEME.black}`}
                textTransform="uppercase"
                transition="all .18s ease"
                _hover={{
                  textDecoration: "none",
                  bg: THEME.pink,
                  transform: "translate(-1px,-1px)",
                  boxShadow: `4px 4px 0 ${THEME.black}`,
                }}
              >
                {item.label}
              </Link>
            </ListItem>
          ))}
        </List>

        <Box
          bg={THEME.black}
          color={THEME.white}
          px="14px"
          py="9px"
          borderRadius="12px"
          border={`3px solid ${THEME.black}`}
          boxShadow={`4px 4px 0 ${THEME.cyan}`}
        >
          <Text fontWeight="900" fontSize="12px" textAlign="center">
            APOTEK • HEALTHCARE • DASHBOARD
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
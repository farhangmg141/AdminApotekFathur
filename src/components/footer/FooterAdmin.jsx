import React from "react";
import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  Box,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      mt="40px"
      px={{ base: "16px", md: "24px" }}
      pb="30px"
    >
      <Flex
        direction={{ base: "column", xl: "row" }}
        align={{ base: "center", xl: "center" }}
        justify="space-between"
        gap="18px"
        bg="#FFFFFF"
        border="4px solid #111"
        borderRadius="24px"
        boxShadow="8px 8px 0 #111"
        px={{ base: "20px", md: "30px" }}
        py="22px"
        wrap="wrap"
      >
        {/* LEFT */}
        <Box>
          <Text
            color="#111"
            fontWeight="900"
            fontSize={{ base: "sm", md: "md" }}
            textAlign={{ base: "center", xl: "left" }}
          >
            © {new Date().getFullYear()} Dashboard Apotek Rustaf
          </Text>

          <Text
            mt="4px"
            color="#666"
            fontWeight="700"
            fontSize="sm"
            textAlign={{ base: "center", xl: "left" }}
          >
            Sistem Manajemen Obat & Transaksi Apotek Modern
          </Text>
        </Box>

        {/* CENTER */}
        <List
          display="flex"
          gap={{ base: "10px", md: "16px" }}
          flexWrap="wrap"
          justifyContent="center"
        >
          <ListItem>
            <Link
              fontWeight="900"
              color="#111"
              bg="#4ECDC4"
              px="14px"
              py="8px"
              border="3px solid #111"
              borderRadius="14px"
              boxShadow="4px 4px 0 #111"
              _hover={{
                textDecoration: "none",
                transform: "translate(-2px,-2px)",
                boxShadow: "6px 6px 0 #111",
              }}
            >
              Support
            </Link>
          </ListItem>

          <ListItem>
            <Link
              fontWeight="900"
              color="#111"
              bg="#FFD93D"
              px="14px"
              py="8px"
              border="3px solid #111"
              borderRadius="14px"
              boxShadow="4px 4px 0 #111"
              _hover={{
                textDecoration: "none",
                transform: "translate(-2px,-2px)",
                boxShadow: "6px 6px 0 #111",
              }}
            >
              License
            </Link>
          </ListItem>

          <ListItem>
            <Link
              fontWeight="900"
              color="#111"
              bg="#FF8E3C"
              px="14px"
              py="8px"
              border="3px solid #111"
              borderRadius="14px"
              boxShadow="4px 4px 0 #111"
              _hover={{
                textDecoration: "none",
                transform: "translate(-2px,-2px)",
                boxShadow: "6px 6px 0 #111",
              }}
            >
              Terms
            </Link>
          </ListItem>

          <ListItem>
            <Link
              fontWeight="900"
              color="#111"
              bg="#B8F2E6"
              px="14px"
              py="8px"
              border="3px solid #111"
              borderRadius="14px"
              boxShadow="4px 4px 0 #111"
              _hover={{
                textDecoration: "none",
                transform: "translate(-2px,-2px)",
                boxShadow: "6px 6px 0 #111",
              }}
            >
              Blog
            </Link>
          </ListItem>
        </List>

        {/* RIGHT */}
        <Box
          bg="#111"
          color="#fff"
          px="16px"
          py="10px"
          borderRadius="16px"
          border="3px solid #111"
          boxShadow="4px 4px 0 #4ECDC4"
        >
          <Text
            fontWeight="900"
            fontSize="sm"
            textAlign="center"
          >
            APOTEK • HEALTHCARE • DASHBOARD
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
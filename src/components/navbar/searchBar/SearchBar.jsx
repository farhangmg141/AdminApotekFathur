import React from "react";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export function SearchBar(props) {
  const { placeholder, borderRadius, background, ...rest } = props;

  return (
    <InputGroup w={{ base: "100%", md: "240px" }} {...rest}>
      <InputLeftElement
        h="100%"
        w="46px"
        pointerEvents="none"
      >
        <Box
          w="38px"
          h="36px"
          ml="6px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="#FFFFFF"
          borderRight="3px solid #111"
          borderRadius="10px 0 0 10px"
        >
          <SearchIcon color="#111" w="15px" h="15px" />
        </Box>
      </InputLeftElement>

      <Input
        fontSize="14px"
        bg={background || "#FFFFFF"}
        color="#111"
        fontWeight="900"
        border="3px solid #111"
        borderRadius={borderRadius || "14px"}
        h="46px"
        pl="52px"
        boxShadow="4px 4px 0 #111"
        placeholder={placeholder || "Cari..."}
        _placeholder={{
          color: "#666",
          fontSize: "13px",
          fontWeight: "800",
        }}
        _hover={{
          bg: "#FFFDEB",
          boxShadow: "5px 5px 0 #111",
        }}
        _focus={{
          bg: "#FFFFFF",
          borderColor: "#111",
          boxShadow: "5px 5px 0 #111",
        }}
        transition="all 0.18s ease"
      />
    </InputGroup>
  );
}

export default SearchBar;
import React from "react";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export function SearchBar(props) {
  const { placeholder, borderRadius, background, ...rest } = props;

  return (
    <InputGroup w={{ base: "100%", md: "240px" }} {...rest}>
      <InputLeftElement h="100%">
        <IconButton
          bg="transparent"
          borderRadius="inherit"
          _hover={{ bg: "transparent" }}
          _active={{
            bg: "transparent",
            transform: "none",
          }}
          _focus={{
            boxShadow: "none",
          }}
          icon={<SearchIcon color="#111" w="15px" h="15px" />}
          aria-label="Search"
        />
      </InputLeftElement>

      <Input
        fontSize="sm"
        bg={background || "#FFFFFF"}
        color="#111"
        fontWeight="800"
        border="3px solid #111"
        borderRadius={borderRadius || "16px"}
        h="48px"
        pl="44px"
        boxShadow="5px 5px 0 #111"
        placeholder={placeholder || "Cari..."}
        _placeholder={{
          color: "#555",
          fontSize: "14px",
          fontWeight: "700",
        }}
        _hover={{
          bg: "#F7F7F7",
          transform: "translate(-1px, -1px)",
          boxShadow: "6px 6px 0 #111",
        }}
        _focus={{
          bg: "#FFFFFF",
          borderColor: "#111",
          boxShadow: "7px 7px 0 #111",
        }}
        transition="all 0.2s"
      />
    </InputGroup>
  );
}

export default SearchBar;
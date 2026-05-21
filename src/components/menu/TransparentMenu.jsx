import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { THEME } from "../../theme/themeConstants";

export default function TransparentMenu(props) {
  const { icon, ...rest } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu isOpen={isOpen} onClose={onClose} {...rest}>
      <MenuButton
        as={IconButton}
        onClick={onOpen}
        variant="no-effects"
        bg="transparent"
        p="0px"
        minW="auto"
        minH="auto"
        _hover={{ bg: "transparent", opacity: 0.8 }}
        _active={{ bg: "transparent" }}
        icon={icon}
      />
      <MenuList
        bg="#FFFFFF"
        border={`3px solid ${THEME.black}`}
        borderRadius="12px"
        boxShadow={`3px 3px 0 ${THEME.black}`}
        p="6px"
        minW="120px"
        zIndex="99"
      >
        <MenuItem
          fontWeight="800"
          fontSize="12px"
          borderRadius="8px"
          _hover={{ bg: THEME.yellow }}
          _focus={{ bg: THEME.yellow }}
        >
          Sunting
        </MenuItem>
        <MenuItem
          fontWeight="800"
          fontSize="12px"
          borderRadius="8px"
          _hover={{ bg: THEME.yellow }}
          _focus={{ bg: THEME.yellow }}
        >
          Unduh
        </MenuItem>
        <MenuItem
          fontWeight="800"
          fontSize="12px"
          borderRadius="8px"
          color="red.500"
          _hover={{ bg: THEME.danger, color: "#111" }}
          _focus={{ bg: THEME.danger, color: "#111" }}
        >
          Hapus
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

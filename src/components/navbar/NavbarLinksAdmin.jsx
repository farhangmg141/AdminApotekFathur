import {
  Avatar,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { SearchBar } from "./searchBar/SearchBar.jsx";
import { SidebarResponsive } from "../sidebar/Sidebar.jsx";
import PropTypes from "prop-types";
import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import routes from "../../routes.jsx";
import { useNavigate } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";

export default function HeaderLinks(props) {
  const { secondary } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    navigate("/pertemuan-7/login");
  };

  return (
    <Flex
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
      gap="10px"
      bg="#FFFFFF"
      flexWrap={secondary ? { base: "wrap", md: "nowrap" } : "nowrap"}
      px="12px"
      py="11px"
      border="4px solid #111"
      borderRadius="22px"
      boxShadow="7px 7px 0 #111"
      position="relative"
      zIndex="10001"
      pointerEvents="auto"
    >
      <SearchBar
        mb={secondary ? { base: "10px", md: "0px" } : "0px"}
        borderRadius="16px"
      />

      <SidebarResponsive routes={routes} />

      {/* Notifikasi */}
      <Menu>
        <MenuButton
          as={Button}
          minW="42px"
          h="42px"
          p="0"
          bg="#FFFFFF"
          border="3px solid #111"
          borderRadius="14px"
          boxShadow="4px 4px 0 #111"
          _hover={{
            bg: "#FFE66D",
            transform: "translate(-2px, -2px)",
            boxShadow: "6px 6px 0 #111",
          }}
          _active={{
            transform: "translate(2px, 2px)",
            boxShadow: "2px 2px 0 #111",
          }}
        >
          <Icon as={MdNotificationsNone} color="#111" w="22px" h="22px" />
        </MenuButton>

        <MenuList
          bg="#FFFFFF"
          border="4px solid #111"
          boxShadow="8px 8px 0 #111"
          borderRadius="18px"
          p="18px"
          mt="12px"
          zIndex="10002"
        >
          <Text fontSize="md" fontWeight="900" color="#111" mb="12px">
            Notifikasi
          </Text>
          <Text fontSize="sm" color="#555" fontWeight="700">
            Tidak ada notifikasi baru.
          </Text>
        </MenuList>
      </Menu>

      {/* Toggle dark/light */}
      <Button
        minW="42px"
        h="42px"
        p="0"
        bg="#4D96FF"
        border="3px solid #111"
        borderRadius="14px"
        boxShadow="4px 4px 0 #111"
        onClick={toggleColorMode}
        _hover={{
          bg: "#FFE66D",
          transform: "translate(-2px, -2px)",
          boxShadow: "6px 6px 0 #111",
        }}
        _active={{
          transform: "translate(2px, 2px)",
          boxShadow: "2px 2px 0 #111",
        }}
      >
        <Icon
          h="22px"
          w="22px"
          color="#111"
          as={colorMode === "light" ? IoMdMoon : IoMdSunny}
        />
      </Button>

      {/* Avatar menu */}
      <Menu>
        <MenuButton
          as={Button}
          p="0"
          minW="42px"
          h="42px"
          bg="transparent"
          borderRadius="50%"
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
        >
          <Avatar
            color="white"
            name="Admin User"
            bg="#11047A"
            size="sm"
            w="42px"
            h="42px"
            border="3px solid #111"
            boxShadow="4px 4px 0 #111"
            cursor="pointer"
          />
        </MenuButton>

        <MenuList
          bg="#FFFFFF"
          border="4px solid #111"
          boxShadow="8px 8px 0 #111"
          borderRadius="18px"
          p="10px"
          mt="12px"
          zIndex="10002"
        >
          <Text
            px="14px"
            pt="10px"
            pb="12px"
            fontSize="sm"
            fontWeight="900"
            color="#111"
            borderBottom="3px solid #111"
          >
            👋 Halo, Admin!
          </Text>

          <MenuItem
            mt="10px"
            borderRadius="12px"
            fontWeight="800"
            color="#111"
            _hover={{ bg: "#FFE66D" }}
            onClick={() => navigate("/admin/pelanggan")}
          >
            Pengaturan Profil
          </MenuItem>

          <MenuItem
            borderRadius="12px"
            fontWeight="900"
            color="#EF4444"
            _hover={{ bg: "#FFD6D6" }}
            onClick={handleLogout}
          >
            Keluar
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
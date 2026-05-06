import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Link,
  Menu,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { SidebarResponsive } from "components/sidebar/Sidebar";
import { SidebarContext } from "contexts/SidebarContext";
import { GoChevronDown } from "react-icons/go";
import { MdLocalPharmacy } from "react-icons/md";
import routes from "routes.js";

export default function AuthNavbar(props) {
  const { logoText = "APOTEK RUSTAF", sidebarWidth, ...rest } = props;

  const {
    isOpen: isOpenMenu,
    onOpen: onOpenMenu,
    onClose: onCloseMenu,
  } = useDisclosure();

  const flatLinks = routes
    .flatMap((route) => route.items || [route])
    .filter((route) => route.layout && route.path && route.name)
    .slice(0, 5);

  return (
    <SidebarContext.Provider value={{ sidebarWidth }}>
      <Flex
        position="absolute"
        top="16px"
        left="50%"
        transform="translate(-50%, 0)"
        bg="#FFFFFF"
        border="4px solid #111"
        boxShadow="8px 8px 0 #111"
        borderRadius="22px"
        px="18px"
        py="14px"
        mx="auto"
        width="1044px"
        maxW="92%"
        alignItems="center"
        zIndex="20"
      >
        <Flex w="100%" justifyContent="space-between" align="center">
          <Link
            href={`${process.env.PUBLIC_URL}/#/`}
            display="flex"
            alignItems="center"
            gap="10px"
            color="#111"
            _hover={{ textDecoration: "none" }}
          >
            <Flex
              w="44px"
              h="44px"
              align="center"
              justify="center"
              bg="#FF6B6B"
              border="3px solid #111"
              borderRadius="14px"
              boxShadow="4px 4px 0 #111"
            >
              <Icon as={MdLocalPharmacy} w="24px" h="24px" />
            </Flex>

            <Text fontSize="18px" fontWeight="900" letterSpacing="-0.5px">
              {logoText}
            </Text>
          </Link>

          <Box
            ms="auto"
            display={{ base: "flex", lg: "none" }}
            justifyContent="center"
            alignItems="center"
          >
            <SidebarResponsive
              logoText={props.logoText}
              secondary={props.secondary}
              routes={routes}
              {...rest}
            />
          </Box>

          <HStack display={{ base: "none", lg: "flex" }} spacing="12px">
            {flatLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.layout + link.path}
                style={{ textDecoration: "none" }}
              >
                <Text
                  bg="#FFE66D"
                  color="#111"
                  border="3px solid #111"
                  borderRadius="14px"
                  boxShadow="4px 4px 0 #111"
                  px="4"
                  py="2"
                  fontSize="13px"
                  fontWeight="900"
                  _hover={{
                    bg: "#4ECDC4",
                    transform: "translate(-2px, -2px)",
                    boxShadow: "6px 6px 0 #111",
                  }}
                  transition="all 0.2s"
                >
                  {link.name}
                </Text>
              </NavLink>
            ))}

            <Stack
              direction="row"
              spacing="6px"
              align="center"
              cursor="pointer"
              position="relative"
              onMouseEnter={onOpenMenu}
              onMouseLeave={onCloseMenu}
              bg="#FFFFFF"
              border="3px solid #111"
              borderRadius="14px"
              boxShadow="4px 4px 0 #111"
              px="4"
              py="2"
              _hover={{
                bg: "#B983FF",
                transform: "translate(-2px, -2px)",
                boxShadow: "6px 6px 0 #111",
              }}
              transition="all 0.2s"
            >
              <Text fontSize="13px" color="#111" fontWeight="900">
                Menu
              </Text>
              <Icon as={GoChevronDown} color="#111" w="15px" h="15px" />

              <Menu isOpen={isOpenMenu}>
                <MenuList
                  bg="#FFFFFF"
                  p="16px"
                  border="4px solid #111"
                  boxShadow="8px 8px 0 #111"
                  borderRadius="18px"
                  position="absolute"
                  top="34px"
                  right="0"
                  minW="240px"
                >
                  <Stack spacing="10px">
                    {flatLinks.map((link, index) => (
                      <NavLink
                        key={index}
                        to={link.layout + link.path}
                        style={{ textDecoration: "none" }}
                      >
                        <Text
                          color="#111"
                          fontSize="14px"
                          fontWeight="900"
                          border="2px solid #111"
                          borderRadius="12px"
                          px="3"
                          py="2"
                          _hover={{ bg: "#FFE66D" }}
                        >
                          {link.name}
                        </Text>
                      </NavLink>
                    ))}
                  </Stack>
                </MenuList>
              </Menu>
            </Stack>
          </HStack>

          <Button
            bg="#4ECDC4"
            color="#111"
            border="3px solid #111"
            borderRadius="14px"
            boxShadow="4px 4px 0 #111"
            fontSize="13px"
            fontWeight="900"
            px="6"
            display={{ base: "none", lg: "flex" }}
            _hover={{
              bg: "#6FF3EA",
              transform: "translate(-2px, -2px)",
              boxShadow: "6px 6px 0 #111",
            }}
            _active={{
              transform: "translate(2px, 2px)",
              boxShadow: "2px 2px 0 #111",
            }}
          >
            Masuk
          </Button>
        </Flex>
      </Flex>
    </SidebarContext.Provider>
  );
}

AuthNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: PropTypes.string,
};
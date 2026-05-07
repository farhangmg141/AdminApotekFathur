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
import { THEME } from "theme/themeConstants";

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
        top="14px"
        left="50%"
        transform="translate(-50%, 0)"
        bg={THEME.white}
        border={`3px solid ${THEME.black}`}
        boxShadow={`5px 5px 0 ${THEME.black}`}
        borderRadius="12px"
        px={{ base: "12px", md: "16px" }}
        py={{ base: "10px", md: "12px" }}
        mx="auto"
        width="1044px"
        maxW="92%"
        alignItems="center"
        zIndex="20"
        fontFamily="'Inter', sans-serif"
      >
        <Flex w="100%" justifyContent="space-between" align="center" gap="12px">
          <Link
            href={`${process.env.PUBLIC_URL}/#/`}
            display="flex"
            alignItems="center"
            gap="10px"
            color={THEME.black}
            _hover={{ textDecoration: "none" }}
          >
            <Flex
              w="42px"
              h="42px"
              align="center"
              justify="center"
              bg={THEME.pink}
              border={`3px solid ${THEME.black}`}
              borderRadius="12px"
              boxShadow={`3px 3px 0 ${THEME.black}`}
            >
              <Icon as={MdLocalPharmacy} w="23px" h="23px" />
            </Flex>

            <Text
              fontSize="17px"
              fontWeight="900"
              letterSpacing="-0.04em"
              textTransform="uppercase"
            >
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

          <HStack display={{ base: "none", lg: "flex" }} spacing="10px">
            {flatLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.layout + link.path}
                style={{ textDecoration: "none" }}
              >
                <Text
                  bg={index % 2 === 0 ? THEME.yellow : THEME.white}
                  color={THEME.black}
                  border={`3px solid ${THEME.black}`}
                  borderRadius="12px"
                  boxShadow={`3px 3px 0 ${THEME.black}`}
                  px="13px"
                  py="8px"
                  fontSize="12px"
                  fontWeight="900"
                  textTransform="uppercase"
                  transition="all 0.18s ease"
                  _hover={{
                    bg: THEME.cyan,
                    transform: "translate(-1px, -1px)",
                    boxShadow: `4px 4px 0 ${THEME.black}`,
                  }}
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
              bg={THEME.white}
              border={`3px solid ${THEME.black}`}
              borderRadius="12px"
              boxShadow={`3px 3px 0 ${THEME.black}`}
              px="13px"
              py="8px"
              _hover={{
                bg: THEME.purple,
                transform: "translate(-1px, -1px)",
                boxShadow: `4px 4px 0 ${THEME.black}`,
              }}
              transition="all 0.18s ease"
            >
              <Text
                fontSize="12px"
                color={THEME.black}
                fontWeight="900"
                textTransform="uppercase"
              >
                Menu
              </Text>

              <Icon as={GoChevronDown} color={THEME.black} w="15px" h="15px" />

              <Menu isOpen={isOpenMenu}>
                <MenuList
                  bg={THEME.white}
                  p="12px"
                  border={`3px solid ${THEME.black}`}
                  boxShadow={`5px 5px 0 ${THEME.black}`}
                  borderRadius="12px"
                  position="absolute"
                  top="32px"
                  right="0"
                  minW="230px"
                >
                  <Stack spacing="9px">
                    {flatLinks.map((link, index) => (
                      <NavLink
                        key={index}
                        to={link.layout + link.path}
                        style={{ textDecoration: "none" }}
                      >
                        <Text
                          color={THEME.black}
                          fontSize="13px"
                          fontWeight="900"
                          border={`2px solid ${THEME.black}`}
                          borderRadius="12px"
                          px="11px"
                          py="8px"
                          textTransform="uppercase"
                          _hover={{ bg: THEME.yellow }}
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
            bg={THEME.cyan}
            color={THEME.black}
            border={`3px solid ${THEME.black}`}
            borderRadius="12px"
            boxShadow={`3px 3px 0 ${THEME.black}`}
            fontSize="12px"
            fontWeight="900"
            textTransform="uppercase"
            px="18px"
            h="38px"
            display={{ base: "none", lg: "flex" }}
            _hover={{
              bg: THEME.pink,
              transform: "translate(-1px, -1px)",
              boxShadow: `4px 4px 0 ${THEME.black}`,
            }}
            _active={{
              bg: THEME.yellow,
              transform: "translate(2px, 2px)",
              boxShadow: `1px 1px 0 ${THEME.black}`,
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
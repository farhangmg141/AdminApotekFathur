/* eslint-disable */
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

const THEME = {
  black: "#111111",
  white: "#FFFFFF",
  yellow: "#F5FF63",
  cyan: "#33DFFF",
  pink: "#FF4FD8",
  green: "#A7FF3D",
  orange: "#FF8A00",
  purple: "#C8A2FF",
  soft: "#FFFDEB",
  muted: "#666666",
};

export function SidebarLinks(props) {
  const location = useLocation();
  const { routes } = props;

  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (route.category) {
        return (
          <Box key={index}>
            <Text
              fontSize="10px"
              color={THEME.muted}
              fontWeight="900"
              ps="10px"
              pt="16px"
              pb="9px"
              textTransform="uppercase"
              letterSpacing="1px"
            >
              {route.name}
            </Text>
            {createLinks(route.items)}
          </Box>
        );
      }

      if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        const isActive = activeRoute(route.path.toLowerCase());

        return (
          <NavLink
            key={index}
            to={route.layout + route.path}
            style={{ textDecoration: "none" }}
          >
            <Box
              mb="10px"
              bg={isActive ? THEME.pink : THEME.white}
              border={`3px solid ${THEME.black}`}
              borderRadius="12px"
              boxShadow={
                isActive
                  ? `5px 5px 0 ${THEME.black}`
                  : `3px 3px 0 ${THEME.black}`
              }
              transform={isActive ? "translate(-1px, -1px)" : "none"}
              transition="all 0.18s ease"
              _hover={{
                bg: isActive ? THEME.pink : THEME.yellow,
                transform: "translate(-1px, -1px)",
                boxShadow: `5px 5px 0 ${THEME.black}`,
              }}
              _active={{
                transform: "translate(2px, 2px)",
                boxShadow: `1px 1px 0 ${THEME.black}`,
              }}
            >
              <HStack spacing="12px" py="10px" px="12px">
                {route.icon && (
                  <Flex
                    w="34px"
                    h="34px"
                    align="center"
                    justify="center"
                    bg={isActive ? THEME.white : THEME.cyan}
                    border={`2px solid ${THEME.black}`}
                    borderRadius="10px"
                    boxShadow={`2px 2px 0 ${THEME.black}`}
                    color={THEME.black}
                    flexShrink="0"
                  >
                    {route.icon}
                  </Flex>
                )}

                <Text
                  me="auto"
                  color={THEME.black}
                  fontWeight="900"
                  fontSize="13px"
                  lineHeight="1.2"
                  textTransform="uppercase"
                  letterSpacing="-0.02em"
                >
                  {route.name}
                </Text>

                {isActive && (
                  <Box
                    h="12px"
                    w="12px"
                    bg={THEME.black}
                    borderRadius="50%"
                    flexShrink="0"
                    boxShadow={`2px 2px 0 ${THEME.yellow}`}
                  />
                )}
              </HStack>
            </Box>
          </NavLink>
        );
      }

      return null;
    });
  };

  return createLinks(routes);
}

export default SidebarLinks;
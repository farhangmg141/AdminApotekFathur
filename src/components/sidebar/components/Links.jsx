/* eslint-disable */
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

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
              fontSize="12px"
              color="#555"
              fontWeight="900"
              mx="auto"
              ps="12px"
              pt="18px"
              pb="10px"
              textTransform="uppercase"
              letterSpacing="1.2px"
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
              mb="12px"
              bg={isActive ? "#FF6B6B" : "#FFFFFF"}
              border="3px solid #111"
              borderRadius="16px"
              boxShadow={isActive ? "6px 6px 0 #111" : "4px 4px 0 #111"}
              transform={isActive ? "translate(-2px, -2px)" : "none"}
              _hover={{
                bg: isActive ? "#FF6B6B" : "#FFE66D",
                transform: "translate(-2px, -2px)",
                boxShadow: "6px 6px 0 #111",
              }}
              _active={{
                transform: "translate(2px, 2px)",
                boxShadow: "2px 2px 0 #111",
              }}
              transition="all 0.2s"
            >
              <HStack spacing="14px" py="12px" px="14px">
                {route.icon && (
                  <Flex
                    w="36px"
                    h="36px"
                    align="center"
                    justify="center"
                    bg={isActive ? "#FFFFFF" : "#4D96FF"}
                    border="2px solid #111"
                    borderRadius="12px"
                    color="#111"
                    flexShrink="0"
                  >
                    {route.icon}
                  </Flex>
                )}

                <Text
                  me="auto"
                  color="#111"
                  fontWeight="900"
                  fontSize="14px"
                  lineHeight="1.2"
                >
                  {route.name}
                </Text>

                {isActive && (
                  <Box
                    h="14px"
                    w="14px"
                    bg="#111"
                    borderRadius="50%"
                    flexShrink="0"
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
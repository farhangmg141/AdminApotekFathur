import React from "react";
import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  Icon,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Content from "./components/Content.jsx";
import {
  renderThumb,
  renderTrack,
  renderView,
} from "../scrollbar/Scrollbar.jsx";
import { Scrollbars } from "react-custom-scrollbars-2";
import PropTypes from "prop-types";
import { IoMenuOutline } from "react-icons/io5";

const THEME = {
  yellow: "#F5FF63",
  cyan: "#33DFFF",
  pink: "#FF4FD8",
  orange: "#FF8A00",
  green: "#A7FF3D",
  black: "#111111",
  white: "#FFFFFF",
  soft: "#FFFDEB",
};

function Sidebar(props) {
  const { routes } = props;

  return (
    <Box
      display={{ sm: "none", xl: "block" }}
      w="300px"
      position="fixed"
      left="0"
      top="0"
      h="100vh"
      zIndex="20"
      pointerEvents="auto"
    >
      <Box
        bg={THEME.soft}
        w="300px"
        h="100vh"
        minH="100%"
        overflowX="hidden"
        borderRight={`4px solid ${THEME.black}`}
        boxShadow={`8px 0 0 ${THEME.black}`}
        position="relative"
      >
        <Box
          position="absolute"
          top="14px"
          left="22px"
          right="22px"
          h="8px"
          bg={THEME.yellow}
          border={`3px solid ${THEME.black}`}
          borderRadius="999px"
          zIndex="2"
        />

        <Box pt="24px" h="100%">
          <Scrollbars
            autoHide
            renderTrackVertical={renderTrack}
            renderThumbVertical={renderThumb}
            renderView={renderView}
          >
            <Content routes={routes} />
          </Scrollbars>
        </Box>
      </Box>
    </Box>
  );
}

export function SidebarResponsive(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { routes } = props;

  return (
    <Flex display={{ sm: "flex", xl: "none" }} alignItems="center">
      <Flex
        ref={btnRef}
        w="42px"
        h="42px"
        align="center"
        justify="center"
        onClick={onOpen}
        bg={THEME.white}
        border={`3px solid ${THEME.black}`}
        borderRadius="12px"
        boxShadow={`3px 3px 0 ${THEME.black}`}
        _hover={{
          cursor: "pointer",
          bg: THEME.cyan,
          transform: "translate(-1px, -1px)",
          boxShadow: `4px 4px 0 ${THEME.black}`,
        }}
        _active={{
          bg: THEME.yellow,
          transform: "translate(2px, 2px)",
          boxShadow: `1px 1px 0 ${THEME.black}`,
        }}
        transition="all 0.18s ease"
      >
        <Icon as={IoMenuOutline} color={THEME.black} w="25px" h="25px" />
      </Flex>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={document.documentElement.dir === "rtl" ? "right" : "left"}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay bg="rgba(17,17,17,0.55)" />

        <DrawerContent
          w="286px"
          maxW="286px"
          bg={THEME.soft}
          borderRight={`4px solid ${THEME.black}`}
          boxShadow={`8px 0 0 ${THEME.black}`}
          overflow="hidden"
          position="relative"
        >
          <Box
            position="absolute"
            top="14px"
            left="18px"
            right="58px"
            h="8px"
            bg={THEME.yellow}
            border={`3px solid ${THEME.black}`}
            borderRadius="999px"
            zIndex="2"
          />

          <DrawerCloseButton
            zIndex="3"
            top="10px"
            right="10px"
            bg={THEME.pink}
            color={THEME.black}
            border={`3px solid ${THEME.black}`}
            borderRadius="10px"
            boxShadow={`3px 3px 0 ${THEME.black}`}
            _focus={{ boxShadow: `3px 3px 0 ${THEME.black}` }}
            _hover={{
              bg: THEME.cyan,
              transform: "translate(-1px, -1px)",
              boxShadow: `4px 4px 0 ${THEME.black}`,
            }}
            _active={{
              bg: THEME.yellow,
              transform: "translate(2px, 2px)",
              boxShadow: `1px 1px 0 ${THEME.black}`,
            }}
          />

          <DrawerBody maxW="286px" px="0" pb="0" pt="24px">
            <Scrollbars
              autoHide
              renderTrackVertical={renderTrack}
              renderThumbVertical={renderThumb}
              renderView={renderView}
            >
              <Content routes={routes} />
            </Scrollbars>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

Sidebar.propTypes = {
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  variant: PropTypes.string,
};

export default Sidebar;
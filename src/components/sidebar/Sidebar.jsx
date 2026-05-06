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
        bg="#FFFFFF"
        w="300px"
        h="100vh"
        minH="100%"
        overflowX="hidden"
        borderRight="5px solid #111"
        boxShadow="12px 0 0 #111"
      >
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
        w="46px"
        h="46px"
        align="center"
        justify="center"
        onClick={onOpen}
        bg="#FFFFFF"
        border="3px solid #111"
        borderRadius="14px"
        boxShadow="5px 5px 0 #111"
        _hover={{
          cursor: "pointer",
          transform: "translate(-2px, -2px)",
          boxShadow: "7px 7px 0 #111",
        }}
        _active={{
          transform: "translate(2px, 2px)",
          boxShadow: "2px 2px 0 #111",
        }}
        transition="all 0.2s"
      >
        <Icon as={IoMenuOutline} color="#111" w="28px" h="28px" />
      </Flex>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={document.documentElement.dir === "rtl" ? "right" : "left"}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay bg="rgba(0,0,0,0.45)" />

        <DrawerContent
          w="285px"
          maxW="285px"
          bg="#FFFFFF"
          borderRight="5px solid #111"
          boxShadow="12px 0 0 #111"
        >
          <DrawerCloseButton
            zIndex="3"
            top="16px"
            right="16px"
            bg="#FF6B6B"
            color="#111"
            border="3px solid #111"
            borderRadius="12px"
            boxShadow="4px 4px 0 #111"
            _focus={{ boxShadow: "4px 4px 0 #111" }}
            _hover={{
              bg: "#FF8585",
              transform: "translate(-1px, -1px)",
              boxShadow: "5px 5px 0 #111",
            }}
          />

          <DrawerBody maxW="285px" px="0" pb="0">
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
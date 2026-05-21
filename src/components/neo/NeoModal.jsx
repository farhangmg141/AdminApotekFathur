import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Box,
} from "@chakra-ui/react";
import { THEME } from "../../theme/themeConstants";

export default function NeoModal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  ...rest
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInBottom">
      <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
      <ModalContent
        bg={THEME.white}
        border={`4px solid ${THEME.black}`}
        borderRadius="16px"
        boxShadow={`8px 8px 0 ${THEME.black}`}
        p="10px"
        fontFamily="'Inter', sans-serif"
        maxW={{ base: "90%", md: "500px" }}
        {...rest}
      >
        <ModalHeader borderBottom={`3px solid ${THEME.black}`} pb="14px">
          <Text
            fontSize="18px"
            fontWeight="900"
            color={THEME.black}
            textTransform="uppercase"
            letterSpacing="-0.02em"
          >
            {title}
          </Text>
        </ModalHeader>
        <ModalCloseButton
          top="22px"
          right="22px"
          border={`2px solid ${THEME.black}`}
          borderRadius="8px"
          bg="#FFFFFF"
          boxShadow={`2px 2px 0 ${THEME.black}`}
          _hover={{
            bg: THEME.yellow,
            transform: "translate(-1px, -1px)",
            boxShadow: `3px 3px 0 ${THEME.black}`,
          }}
          _active={{
            transform: "translate(1px, 1px)",
            boxShadow: `1px 1px 0 ${THEME.black}`,
          }}
        />
        <ModalBody py="20px">
          {children}
        </ModalBody>
        {footer && (
          <ModalFooter borderTop={`3px solid ${THEME.black}`} pt="14px">
            {footer}
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
}

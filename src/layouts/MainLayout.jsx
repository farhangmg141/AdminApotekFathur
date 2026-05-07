import React, { Suspense } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  HStack,
  Container,
  Icon,
  Badge,
} from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import { MdLocalPharmacy, MdLogin } from "react-icons/md";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const THEME = {
  yellow: "#F5FF63",
  cyan: "#33DFFF",
  pink: "#FF4FD8",
  green: "#A7FF3D",
  orange: "#FF8A00",
  purple: "#C8A2FF",
  black: "#111111",
  white: "#FFFFFF",
  soft: "#FFFDEB",
  muted: "#666666",
};

const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <Box
      minH="100vh"
      bg={THEME.yellow}
      position="relative"
      overflow="hidden"
      fontFamily="'Inter', 'Manrope', sans-serif"
    >
      <Box
        position="absolute"
        inset="0"
        opacity="0.08"
        bgImage="linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)"
        bgSize="28px 28px"
        pointerEvents="none"
      />

      <Box
        position="absolute"
        top="8%"
        left={{ base: "5%", xl: "340px" }}
        w="82px"
        h="82px"
        bg={THEME.pink}
        border={`3px solid ${THEME.black}`}
        boxShadow={`5px 5px 0 ${THEME.black}`}
        borderRadius="14px"
        transform="rotate(-10deg)"
        display={{ base: "none", md: "block" }}
      />

      <Box
        position="absolute"
        bottom="12%"
        right="8%"
        w="72px"
        h="72px"
        bg={THEME.cyan}
        border={`3px solid ${THEME.black}`}
        boxShadow={`5px 5px 0 ${THEME.black}`}
        borderRadius="14px"
        transform="rotate(12deg)"
        display={{ base: "none", md: "block" }}
      />

      <Flex
        as="header"
        position="fixed"
        top={{ base: "10px", md: "16px" }}
        left={{ base: "10px", md: "18px", xl: "320px" }}
        right={{ base: "10px", md: "18px" }}
        zIndex={100}
        bg={THEME.white}
        border={`3px solid ${THEME.black}`}
        borderRadius="14px"
        boxShadow={`5px 5px 0 ${THEME.black}`}
        px={{ base: 3, md: 5 }}
        py={{ base: 3, md: 4 }}
        align="center"
        justify="space-between"
      >
        <HStack spacing={3}>
          <Flex
            w="44px"
            h="44px"
            bg={THEME.cyan}
            border={`3px solid ${THEME.black}`}
            borderRadius="12px"
            boxShadow={`3px 3px 0 ${THEME.black}`}
            align="center"
            justify="center"
          >
            <Icon as={MdLocalPharmacy} w="22px" h="22px" color={THEME.black} />
          </Flex>

          <Box>
            <Text
              fontSize={{ base: "16px", md: "19px" }}
              fontWeight="900"
              color={THEME.black}
              lineHeight="1"
              textTransform="uppercase"
              letterSpacing="-0.04em"
            >
              Apotek Sehat
            </Text>
            <Text fontSize="11px" fontWeight="800" color={THEME.muted}>
              Sistem Manajemen Apotek
            </Text>
          </Box>
        </HStack>

        <MotionButton
          rightIcon={<MdLogin />}
          bg={THEME.black}
          color={THEME.yellow}
          border={`3px solid ${THEME.black}`}
          borderRadius="12px"
          fontWeight="900"
          fontSize="13px"
          h="42px"
          px="18px"
          boxShadow={`4px 4px 0 ${THEME.pink}`}
          textTransform="uppercase"
          _hover={{
            bg: "#222",
            transform: "translate(-1px, -1px)",
            boxShadow: `5px 5px 0 ${THEME.pink}`,
          }}
          _active={{
            transform: "translate(2px, 2px)",
            boxShadow: `2px 2px 0 ${THEME.pink}`,
          }}
          onClick={() => navigate("/login")}
          whileTap={{ scale: 0.98 }}
        >
          Masuk
        </MotionButton>
      </Flex>

      <Box
        pt={{ base: "92px", md: "105px" }}
        pl={{ base: "0px", xl: "300px" }}
        position="relative"
        zIndex="1"
      >
        <Suspense
          fallback={
            <Flex minH="80vh" align="center" justify="center">
              <VStack spacing={4}>
                <Box
                  w="56px"
                  h="56px"
                  bg={THEME.white}
                  border={`3px solid ${THEME.black}`}
                  borderRadius="14px"
                  boxShadow={`5px 5px 0 ${THEME.black}`}
                />
                <Text fontWeight="900" color={THEME.black}>
                  Memuat...
                </Text>
              </VStack>
            </Flex>
          }
        >
          <Outlet />
        </Suspense>
      </Box>

      <Box
        as="footer"
        bg={THEME.white}
        borderTop={`3px solid ${THEME.black}`}
        mt="auto"
        py={5}
        px={{ base: 4, md: 8 }}
        pl={{ base: "16px", md: "32px", xl: "332px" }}
        position="relative"
        zIndex="1"
      >
        <Container maxW="1200px">
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gap={4}
          >
            <HStack spacing={3}>
              <Flex
                w="38px"
                h="38px"
                bg={THEME.cyan}
                border={`3px solid ${THEME.black}`}
                borderRadius="10px"
                boxShadow={`3px 3px 0 ${THEME.black}`}
                align="center"
                justify="center"
              >
                <Icon
                  as={MdLocalPharmacy}
                  w="19px"
                  h="19px"
                  color={THEME.black}
                />
              </Flex>

              <Box>
                <Text
                  fontSize="13px"
                  fontWeight="900"
                  color={THEME.black}
                  textTransform="uppercase"
                >
                  Apotek Sehat
                </Text>
                <Text fontSize="11px" color={THEME.muted} fontWeight="800">
                  © 2026 - Sistem Informasi Apotek
                </Text>
              </Box>
            </HStack>

            <HStack spacing={3} flexWrap="wrap" justify="center">
              <Badge
                bg={THEME.yellow}
                color={THEME.black}
                border={`2px solid ${THEME.black}`}
                px={3}
                py={1}
                borderRadius="8px"
                fontWeight="900"
                boxShadow={`2px 2px 0 ${THEME.black}`}
              >
                v2.0.0
              </Badge>

              <Text fontSize="11px" color={THEME.muted} fontWeight="800">
                Dibuat untuk Quiz Minggu Depan
              </Text>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
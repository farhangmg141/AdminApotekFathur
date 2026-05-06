import React, { Suspense } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Container,
  SimpleGrid,
  Icon,
  Badge,
} from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  MdLocalPharmacy,
  MdHealthAndSafety,
  MdLocalHospital,
  MdMedication,
  MdSchedule,
  MdArrowForward,
  MdLogin,
} from "react-icons/md";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionFlex = motion(Flex);

// Feature Card Component
const FeatureCard = ({ icon, title, description, color, delay }) => (
  <MotionBox
    bg="#FFFFFF"
    border="4px solid #111"
    borderRadius="24px"
    boxShadow="8px 8px 0 #111"
    p={6}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{
      y: -4,
      boxShadow: "12px 12px 0 #111",
      transition: { duration: 0.2 },
    }}
  >
    <Flex
      w="60px"
      h="60px"
      bg={color}
      border="3px solid #111"
      borderRadius="16px"
      boxShadow="4px 4px 0 #111"
      align="center"
      justify="center"
      mb={4}
    >
      <Icon as={icon} w="28px" h="28px" color="#111" />
    </Flex>
    <Text fontSize="lg" fontWeight="900" color="#111" mb={2}>
      {title}
    </Text>
    <Text fontSize="sm" color="gray.700" fontWeight="600">
      {description}
    </Text>
  </MotionBox>
);

// Stat Card Component
const StatCard = ({ number, label, color, delay }) => (
  <MotionBox
    bg={color}
    border="4px solid #111"
    borderRadius="20px"
    boxShadow="6px 6px 0 #111"
    p={5}
    textAlign="center"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay }}
    whileHover={{
      scale: 1.02,
      boxShadow: "8px 8px 0 #111",
      transition: { duration: 0.2 },
    }}
  >
    <Text fontSize="3xl" fontWeight="900" color="#111">
      {number}
    </Text>
    <Text fontSize="sm" fontWeight="700" color="#111" mt={1}>
      {label}
    </Text>
  </MotionBox>
);

const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <Box minH="100vh" bg="#FFE66D" position="relative" overflow="hidden">
      {/* Background Pattern */}
      <Box
        position="absolute"
        inset="0"
        opacity="0.15"
        bgImage="linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)"
        bgSize="40px 40px"
        pointerEvents="none"
      />

      {/* Decorative Elements */}
      <Box
        position="absolute"
        top="5%"
        left="5%"
        w="100px"
        h="100px"
        bg="#FF6B6B"
        border="4px solid #111"
        boxShadow="8px 8px 0 #111"
        transform="rotate(-12deg)"
        display={{ base: "none", md: "block" }}
      />
      <Box
        position="absolute"
        bottom="10%"
        right="8%"
        w="80px"
        h="80px"
        bg="#4ECDC4"
        border="4px solid #111"
        boxShadow="8px 8px 0 #111"
        transform="rotate(15deg)"
        display={{ base: "none", md: "block" }}
      />
      <Box
        position="absolute"
        top="40%"
        right="10%"
        w="60px"
        h="60px"
        bg="#FFFFFF"
        border="4px solid #111"
        boxShadow="6px 6px 0 #111"
        borderRadius="50%"
        display={{ base: "none", lg: "block" }}
      />

      {/* Navigation Header */}
      <Flex
        as="header"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={100}
        bg="#FFFFFF"
        borderBottom="4px solid #111"
        boxShadow="6px 6px 0 #111"
        px={{ base: 4, md: 8 }}
        py={4}
        align="center"
        justify="space-between"
      >
        <HStack spacing={3}>
          <Flex
            w="48px"
            h="48px"
            bg="#4ECDC4"
            border="3px solid #111"
            borderRadius="14px"
            boxShadow="4px 4px 0 #111"
            align="center"
            justify="center"
          >
            <Icon as={MdLocalPharmacy} w="24px" h="24px" color="#111" />
          </Flex>
          <Box>
            <Text fontSize="xl" fontWeight="900" color="#111" lineHeight="1">
              Apotek Sehat
            </Text>
            <Text fontSize="xs" fontWeight="700" color="gray.600">
              Sistem Manajemen Apotek
            </Text>
          </Box>
        </HStack>

        <MotionButton
          rightIcon={<MdLogin />}
          bg="#111"
          color="#FFE66D"
          border="3px solid #111"
          borderRadius="12px"
          fontWeight="900"
          boxShadow="4px 4px 0 #FF6B6B"
          _hover={{
            bg: "#333",
            transform: "translate(-2px, -2px)",
            boxShadow: "6px 6px 0 #FF6B6B",
          }}
          _active={{
            transform: "translate(2px, 2px)",
            boxShadow: "2px 2px 0 #FF6B6B",
          }}
          onClick={() => navigate("/login")}
          whileTap={{ scale: 0.98 }}
        >
          Masuk
        </MotionButton>
      </Flex>

      {/* Main Content Area */}
      <Box pt="100px">
        <Suspense
          fallback={
            <Flex minH="80vh" align="center" justify="center">
              <VStack spacing={4}>
                <Box
                  w="60px"
                  h="60px"
                  bg="#FFFFFF"
                  border="4px solid #111"
                  borderRadius="16px"
                  boxShadow="6px 6px 0 #111"
                  animation="pulse 1.5s ease-in-out infinite"
                />
                <Text fontWeight="900" color="#111">
                  Memuat...
                </Text>
              </VStack>
            </Flex>
          }
        >
          <Outlet />
        </Suspense>
      </Box>

      {/* Footer */}
      <Box
        as="footer"
        bg="#FFFFFF"
        borderTop="4px solid #111"
        mt="auto"
        py={6}
        px={{ base: 4, md: 8 }}
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
                w="40px"
                h="40px"
                bg="#4ECDC4"
                border="3px solid #111"
                borderRadius="12px"
                align="center"
                justify="center"
              >
                <Icon as={MdLocalPharmacy} w="20px" h="20px" color="#111" />
              </Flex>
              <Box>
                <Text fontSize="sm" fontWeight="900" color="#111">
                  Apotek Sehat
                </Text>
                <Text fontSize="xs" color="gray.600">
                  © 2026 - Sistem Informasi Apotek
                </Text>
              </Box>
            </HStack>

            <HStack spacing={4}>
              <Badge
                bg="#FFE66D"
                border="2px solid #111"
                px={3}
                py={1}
                borderRadius="8px"
                fontWeight="700"
              >
                v2.0.0
              </Badge>
              <Text fontSize="xs" color="gray.600" fontWeight="600">
                Dibuat dengan ❤️ untuk Quiz Minggu Depan
              </Text>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;

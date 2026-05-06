import React from "react";
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
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  MdLocalPharmacy,
  MdHealthAndSafety,
  MdLocalHospital,
  MdMedication,
  MdSchedule,
  MdArrowForward,
  MdCheckCircle,
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

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Container maxW="1200px" pt={{ base: 8, md: 16 }} pb={16} px={{ base: 4, md: 8 }}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          gap={12}
        >
          {/* Hero Content */}
          <VStack
            align={{ base: "center", lg: "flex-start" }}
            spacing={6}
            maxW={{ base: "100%", lg: "550px" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                bg="#FF6B6B"
                color="#111"
                border="3px solid #111"
                px={4}
                py={2}
                borderRadius="12px"
                fontSize="sm"
                fontWeight="900"
                boxShadow="4px 4px 0 #111"
                mb={4}
              >
                🏥 SISTEM APOTEK MODERN
              </Badge>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Heading
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="900"
                color="#111"
                lineHeight="1.1"
                letterSpacing="-2px"
              >
                Kelola Apotek Anda dengan{" "}
                <Text as="span" color="#FF6B6B" position="relative">
                  Mudah
                  <Box
                    position="absolute"
                    bottom="-4px"
                    left="0"
                    right="0"
                    h="6px"
                    bg="#111"
                    borderRadius="3px"
                  />
                </Text>{" "}
                &{" "}
                <Text as="span" color="#4ECDC4">
                  Cepat
                </Text>
              </Heading>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.800"
                fontWeight="600"
                maxW="480px"
              >
                Sistem manajemen apotek terintegrasi untuk mengelola stok obat,
                resep pasien, dan data pelanggan dalam satu platform.
              </Text>
            </MotionBox>

            <MotionFlex
              gap={4}
              direction={{ base: "column", sm: "row" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <MotionButton
                rightIcon={<MdArrowForward />}
                bg="#111"
                color="#FFFFFF"
                size="lg"
                h="60px"
                px={8}
                border="4px solid #111"
                borderRadius="16px"
                fontWeight="900"
                fontSize="lg"
                boxShadow="8px 8px 0 #FF6B6B"
                _hover={{
                  bg: "#333",
                  transform: "translate(-3px, -3px)",
                  boxShadow: "11px 11px 0 #FF6B6B",
                }}
                _active={{
                  transform: "translate(4px, 4px)",
                  boxShadow: "4px 4px 0 #FF6B6B",
                }}
                onClick={() => navigate("/login")}
                whileTap={{ scale: 0.98 }}
              >
                Mulai Sekarang
              </MotionButton>

              <MotionButton
                variant="outline"
                bg="#FFFFFF"
                color="#111"
                size="lg"
                h="60px"
                px={8}
                border="4px solid #111"
                borderRadius="16px"
                fontWeight="900"
                fontSize="lg"
                boxShadow="8px 8px 0 #4ECDC4"
                _hover={{
                  bg: "#F7F7F7",
                  transform: "translate(-3px, -3px)",
                  boxShadow: "11px 11px 0 #4ECDC4",
                }}
                _active={{
                  transform: "translate(4px, 4px)",
                  boxShadow: "4px 4px 0 #4ECDC4",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Pelajari Lebih
              </MotionButton>
            </MotionFlex>

            {/* Trust Indicators */}
            <MotionFlex
              gap={6}
              mt={4}
              wrap="wrap"
              justify={{ base: "center", lg: "flex-start" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { icon: MdCheckCircle, text: "Aman & Terpercaya" },
                { icon: MdCheckCircle, text: "24/7 Support" },
              ].map((item, i) => (
                <HStack key={i} spacing={2}>
                  <Icon as={item.icon} color="#111" w="20px" h="20px" />
                  <Text fontSize="sm" fontWeight="700" color="#111">
                    {item.text}
                  </Text>
                </HStack>
              ))}
            </MotionFlex>
          </VStack>

          {/* Hero Visual */}
          <MotionBox
            position="relative"
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main Card */}
            <Box
              bg="#FFFFFF"
              border="5px solid #111"
              borderRadius="32px"
              boxShadow="16px 16px 0 #111"
              p={8}
              maxW="400px"
              transform="rotate(-2deg)"
            >
              <Flex
                w="80px"
                h="80px"
                bg="#4ECDC4"
                border="4px solid #111"
                borderRadius="24px"
                boxShadow="6px 6px 0 #111"
                align="center"
                justify="center"
                mb={6}
              >
                <Icon as={MdLocalPharmacy} w="40px" h="40px" color="#111" />
              </Flex>

              <Text fontSize="2xl" fontWeight="900" color="#111" mb={4}>
                Dashboard Apotek
              </Text>

              <VStack spacing={3} align="stretch">
                {[
                  { label: "Stok Obat", val: "1,234", color: "#FFE66D" },
                  { label: "Resep Hari Ini", val: "56", color: "#FF6B6B" },
                  { label: "Pelanggan", val: "892", color: "#4ECDC4" },
                ].map((stat, i) => (
                  <Flex
                    key={i}
                    bg={stat.color}
                    border="3px solid #111"
                    borderRadius="12px"
                    p={3}
                    justify="space-between"
                    align="center"
                    boxShadow="3px 3px 0 #111"
                  >
                    <Text fontSize="sm" fontWeight="700" color="#111">
                      {stat.label}
                    </Text>
                    <Text fontSize="lg" fontWeight="900" color="#111">
                      {stat.val}
                    </Text>
                  </Flex>
                ))}
              </VStack>
            </Box>

            {/* Floating Badge */}
            <Box
              position="absolute"
              top="-20px"
              right="-30px"
              bg="#FF6B6B"
              border="4px solid #111"
              borderRadius="20px"
              boxShadow="6px 6px 0 #111"
              px={4}
              py={2}
              transform="rotate(8deg)"
            >
              <Text fontSize="sm" fontWeight="900" color="#111">
                Live!
              </Text>
            </Box>
          </MotionBox>
        </Flex>
      </Container>

      {/* Stats Section */}
      <Box bg="#111" py={12} borderTop="5px solid #111" borderBottom="5px solid #111">
        <Container maxW="1200px" px={{ base: 4, md: 8 }}>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
            {[
              { number: "50+", label: "Apotek Partner", color: "#FFE66D", delay: 0 },
              { number: "10K+", label: "Obat Tersedia", color: "#4ECDC4", delay: 0.1 },
              { number: "100K+", label: "Resep Diproses", color: "#FF6B6B", delay: 0.2 },
              { number: "99.9%", label: "Uptime", color: "#FFFFFF", delay: 0.3 },
            ].map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="1200px" py={20} px={{ base: 4, md: 8 }}>
        <VStack spacing={4} textAlign="center" mb={16}>
          <Badge
            bg="#4ECDC4"
            border="3px solid #111"
            px={4}
            py={2}
            borderRadius="12px"
            fontSize="sm"
            fontWeight="900"
            boxShadow="4px 4px 0 #111"
          >
            FITUR UNGGULAN
          </Badge>
          <Heading
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="900"
            color="#111"
          >
            Semua yang Anda Butuhkan
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.800"
            fontWeight="600"
            maxW="600px"
          >
            Kelola seluruh operasional apotek dengan mudah menggunakan sistem
            yang terintegrasi
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {[
            {
              icon: MdMedication,
              title: "Manajemen Stok Obat",
              description:
                "Pantau stok obat real-time dengan notifikasi otomatis saat stok menipis.",
              color: "#FFE66D",
              delay: 0,
            },
            {
              icon: MdLocalHospital,
              title: "Kelola Resep Pasien",
              description:
                "Simpan dan kelola resep digital dengan riwayat pembelian lengkap.",
              color: "#FF6B6B",
              delay: 0.1,
            },
            {
              icon: MdSchedule,
              title: "Jadwal Kedaluwarsa",
              description:
                "Peringatan otomatis untuk obat yang akan kedaluwarsa.",
              color: "#4ECDC4",
              delay: 0.2,
            },
            {
              icon: MdHealthAndSafety,
              title: "Konsultasi Farmasi",
              description:
                "Catat konsultasi dan rekomendasi untuk setiap pelanggan.",
              color: "#FFE66D",
              delay: 0.3,
            },
            {
              icon: MdLocalPharmacy,
              title: "Laporan Penjualan",
              description:
                "Analitik lengkap untuk memahami tren penjualan dan profit.",
              color: "#FF6B6B",
              delay: 0.4,
            },
            {
              icon: MdMedication,
              title: "Multi Cabang",
              description:
                "Kelola beberapa cabang apotek dalam satu dashboard.",
              color: "#4ECDC4",
              delay: 0.5,
            },
          ].map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </SimpleGrid>
      </Container>

      {/* CTA Section */}
      <Box py={20} px={{ base: 4, md: 8 }}>
        <Container maxW="900px">
          <MotionBox
            bg="#FFFFFF"
            border="5px solid #111"
            borderRadius="32px"
            boxShadow="16px 16px 0 #111"
            p={{ base: 8, md: 12 }}
            textAlign="center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              bg="#FFE66D"
              border="3px solid #111"
              px={4}
              py={2}
              borderRadius="12px"
              fontSize="sm"
              fontWeight="900"
              boxShadow="4px 4px 0 #111"
              mb={4}
            >
              SIAP MULAI?
            </Badge>

            <Heading
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="900"
              color="#111"
              mb={4}
            >
              Transformasi Digital Apotek Anda
            </Heading>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.700"
              fontWeight="600"
              maxW="600px"
              mx="auto"
              mb={8}
            >
              Bergabung dengan 50+ apotek yang telah menggunakan sistem kami
              untuk meningkatkan efisiensi operasional.
            </Text>

            <MotionButton
              rightIcon={<MdArrowForward />}
              bg="#4ECDC4"
              color="#111"
              size="lg"
              h="64px"
              px={10}
              border="4px solid #111"
              borderRadius="16px"
              fontWeight="900"
              fontSize="lg"
              boxShadow="8px 8px 0 #111"
              _hover={{
                bg: "#3DBDB4",
                transform: "translate(-3px, -3px)",
                boxShadow: "11px 11px 0 #111",
              }}
              _active={{
                transform: "translate(4px, 4px)",
                boxShadow: "4px 4px 0 #111",
              }}
              onClick={() => navigate("/login")}
              whileTap={{ scale: 0.98 }}
            >
              Akses Dashboard
            </MotionButton>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;

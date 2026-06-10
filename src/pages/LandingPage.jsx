import React, { useState } from "react";
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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
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
  MdMenu,
  MdPeople,
  MdAttachMoney,
  MdInfo,
} from "react-icons/md";
import { motion } from "framer-motion";
import { THEME } from "../theme/themeConstants";
import { NeoStatCard } from "components/ui";

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionFlex = motion(Flex);

const FeatureCard = ({ icon, title, description, color, delay }) => (
  <MotionBox
    bg={THEME.white}
    border={`3px solid ${THEME.black}`}
    borderRadius="14px"
    boxShadow={`4px 4px 0 ${THEME.black}`}
    p={5}
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay }}
    whileHover={{
      y: -2,
      boxShadow: `6px 6px 0 ${THEME.black}`,
      transition: { duration: 0.18 },
    }}
  >
    <Flex
      w="48px"
      h="48px"
      bg={color}
      border={`3px solid ${THEME.black}`}
      borderRadius="12px"
      boxShadow={`3px 3px 0 ${THEME.black}`}
      align="center"
      justify="center"
      mb={4}
    >
      <Icon as={icon} w="24px" h="24px" color={THEME.black} />
    </Flex>

    <Text
      fontSize="15px"
      fontWeight="900"
      color={THEME.text}
      mb={2}
      textTransform="uppercase"
      letterSpacing="-0.02em"
    >
      {title}
    </Text>

    <Text
      fontSize="13px"
      color={THEME.black}
      fontWeight="800"
      lineHeight="1.6"
    >
      {description}
    </Text>
  </MotionBox>
);

const StatCard = ({ number, label, color, delay }) => (
  <MotionBox
    bg={color}
    border={`3px solid ${THEME.black}`}
    borderRadius="12px"
    boxShadow={`4px 4px 0 ${THEME.black}`}
    p={4}
    textAlign="center"
    initial={{ opacity: 0, scale: 0.94 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.35, delay }}
    whileHover={{
      scale: 1.02,
      boxShadow: `5px 5px 0 ${THEME.black}`,
      transition: { duration: 0.18 },
    }}
  >
    <Text fontSize="28px" fontWeight="900" color={THEME.black} lineHeight="1">
      {number}
    </Text>

    <Text
      fontSize="11px"
      fontWeight="900"
      color={THEME.black}
      mt={2}
      textTransform="uppercase"
    >
      {label}
    </Text>
  </MotionBox>
);

const LandingPage = () => {
  const navigate = useNavigate();
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();

  return (
    <Box
      bg={THEME.background}
      minH="100vh"
      position="relative"
      overflow="hidden"
      fontFamily="'Inter', sans-serif"
    >
      {/* ===== DRAWER — Mobile Navigation ===== */}
      <Drawer isOpen={isDrawerOpen} placement="left" onClose={onDrawerClose}>
        <DrawerOverlay />
        <DrawerContent
          bg={THEME.white}
          border={`3px solid ${THEME.black}`}
          boxShadow={`6px 0 0 ${THEME.black}`}
          fontFamily="'Inter', sans-serif"
        >
          <DrawerCloseButton fontWeight="900" />
          <DrawerHeader
            borderBottom={`3px solid ${THEME.black}`}
            fontSize="14px"
            fontWeight="900"
            textTransform="uppercase"
            bg={THEME.primary}
          >
            🏥 Apotek Sehat
          </DrawerHeader>
          <DrawerBody pt={4}>
            <VStack align="stretch" spacing={3}>
              {["Dashboard", "Daftar Obat", "Transaksi", "Pasien", "Laporan"].map((item) => (
                <Button
                  key={item}
                  bg={THEME.white}
                  border={`2px solid ${THEME.black}`}
                  borderRadius="10px"
                  fontWeight="900"
                  fontSize="13px"
                  textTransform="uppercase"
                  boxShadow={`3px 3px 0 ${THEME.black}`}
                  _hover={{ bg: THEME.primary, transform: "translate(-1px,-1px)" }}
                  onClick={onDrawerClose}
                  justifyContent="flex-start"
                >
                  {item}
                </Button>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Tombol Buka Drawer (Mobile Nav) */}
      <Box position="fixed" top="16px" left="16px" zIndex="100" display={{ base: "block", md: "none" }}>
        <Button
          onClick={onDrawerOpen}
          bg={THEME.primary}
          border={`3px solid ${THEME.black}`}
          borderRadius="12px"
          boxShadow={`3px 3px 0 ${THEME.black}`}
          p="10px"
          minW="0"
          h="auto"
          _hover={{ transform: "translate(-1px,-1px)", boxShadow: `4px 4px 0 ${THEME.black}` }}
        >
          <Icon as={MdMenu} w="22px" h="22px" color={THEME.black} />
        </Button>
      </Box>

      <Box
        position="absolute"
        inset="0"
        opacity="0.08"
        bgImage="linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)"
        bgSize="28px 28px"
        pointerEvents="none"
      />

      <Container
        maxW="1200px"
        pt={{ base: 10, md: 16 }}
        pb={14}
        px={{ base: 4, md: 8 }}
        position="relative"
        zIndex="1"
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 10, lg: 14 }}
        >
          <VStack
            align={{ base: "center", lg: "flex-start" }}
            spacing={5}
            maxW={{ base: "100%", lg: "540px" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            <Badge
              bg={THEME.danger}
              color={THEME.black}
              border={`3px solid ${THEME.black}`}
              px="12px"
              py="7px"
              borderRadius="10px"
              fontSize="11px"
              fontWeight="900"
              boxShadow={`3px 3px 0 ${THEME.black}`}
            >
              SISTEM APOTEK MODERN
            </Badge>

            <Heading
              fontSize={{ base: "38px", md: "52px", lg: "64px" }}
              fontWeight="900"
              color={THEME.text}
              lineHeight="0.95"
              letterSpacing="-3px"
            >
              Kelola Apotek Dengan{" "}
              <Text as="span" color={THEME.danger}>
                Mudah
              </Text>{" "}
              &{" "}
              <Text as="span" color={THEME.primary}>
                Cepat
              </Text>
            </Heading>

            <Text
              fontSize={{ base: "14px", md: "16px" }}
              color={THEME.black}
              fontWeight="800"
              maxW="500px"
              lineHeight="1.7"
            >
              Sistem manajemen apotek terintegrasi untuk mengelola stok obat,
              transaksi, resep pasien, dan data pelanggan dalam satu dashboard.
            </Text>

            <MotionFlex gap={3} direction={{ base: "column", sm: "row" }}>
              <MotionButton
                rightIcon={<MdArrowForward />}
                bg={THEME.black}
                color={THEME.background}
                h="50px"
                px="22px"
                border={`3px solid ${THEME.black}`}
                borderRadius="12px"
                fontWeight="900"
                fontSize="13px"
                textTransform="uppercase"
                boxShadow={`4px 4px 0 ${THEME.danger}`}
                _hover={{
                  bg: THEME.black,
                  transform: "translate(-1px, -1px)",
                  boxShadow: `5px 5px 0 ${THEME.danger}`,
                }}
                _active={{
                  transform: "translate(2px, 2px)",
                  boxShadow: `2px 2px 0 ${THEME.danger}`,
                }}
                onClick={() => navigate("/login")}
                whileTap={{ scale: 0.98 }}
              >
                Mulai Sekarang
              </MotionButton>

              <MotionButton
                bg={THEME.white}
                color={THEME.black}
                h="50px"
                px="22px"
                border={`3px solid ${THEME.black}`}
                borderRadius="12px"
                fontWeight="900"
                fontSize="13px"
                textTransform="uppercase"
                boxShadow={`4px 4px 0 ${THEME.primary}`}
                _hover={{
                  bg: THEME.soft,
                  transform: "translate(-1px, -1px)",
                  boxShadow: `5px 5px 0 ${THEME.primary}`,
                }}
                _active={{
                  transform: "translate(2px, 2px)",
                  boxShadow: `2px 2px 0 ${THEME.primary}`,
                }}
                whileTap={{ scale: 0.98 }}
              >
                Pelajari Lebih
              </MotionButton>
            </MotionFlex>

            <HStack spacing={4} wrap="wrap" justify={{ base: "center", lg: "flex-start" }}>
              {["Aman & Terpercaya", "24/7 Support"].map((text) => (
                <HStack key={text} spacing={2}>
                  <Icon as={MdCheckCircle} color={THEME.black} w="18px" h="18px" />
                  <Text fontSize="12px" fontWeight="900" color={THEME.black}>
                    {text}
                  </Text>
                </HStack>
              ))}
            </HStack>
          </VStack>

          <MotionBox
            position="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <Box
              bg={THEME.white}
              border={`3px solid ${THEME.black}`}
              borderRadius="16px"
              boxShadow={`6px 6px 0 ${THEME.black}`}
              p={6}
              maxW="380px"
            >
              <Flex
                w="58px"
                h="58px"
                bg={THEME.primary}
                border={`3px solid ${THEME.black}`}
                borderRadius="12px"
                boxShadow={`3px 3px 0 ${THEME.black}`}
                align="center"
                justify="center"
                mb={5}
              >
                <Icon as={MdLocalPharmacy} w="30px" h="30px" color={THEME.black} />
              </Flex>

              <Text
                fontSize="22px"
                fontWeight="900"
                color={THEME.black}
                mb={4}
                textTransform="uppercase"
                letterSpacing="-0.04em"
              >
                Dashboard Apotek
              </Text>

              <VStack spacing={3} align="stretch">
                {[
                  { label: "Stok Obat", val: "1,234", color: THEME.background },
                  { label: "Resep Hari Ini", val: "56", color: THEME.danger },
                  { label: "Pelanggan", val: "892", color: THEME.primary },
                ].map((stat, i) => (
                  <Flex
                    key={i}
                    bg={stat.color}
                    border={`3px solid ${THEME.black}`}
                    borderRadius="10px"
                    p={3}
                    justify="space-between"
                    align="center"
                    boxShadow={`3px 3px 0 ${THEME.black}`}
                  >
                    <Text fontSize="13px" fontWeight="900" color={THEME.black}>
                      {stat.label}
                    </Text>
                    <Text fontSize="18px" fontWeight="900" color={THEME.black}>
                      {stat.val}
                    </Text>
                  </Flex>
                ))}
              </VStack>
            </Box>

            <Box
              position="absolute"
              top="-14px"
              right="-16px"
              bg={THEME.danger}
              border={`3px solid ${THEME.black}`}
              borderRadius="10px"
              boxShadow={`3px 3px 0 ${THEME.black}`}
              px="12px"
              py="6px"
            >
              <Text fontSize="12px" fontWeight="900" color={THEME.black}>
                LIVE
              </Text>
            </Box>
          </MotionBox>
        </Flex>
      </Container>

      {/* ===== NEOSTATCARD — Statistik Dashboard ===== */}
      <Box py={10} px={{ base: 4, md: 8 }} position="relative" zIndex="1">
        <Container maxW="1200px">
          <Flex align="center" gap={3} mb={6}>
            <Text fontSize="13px" fontWeight="900" textTransform="uppercase" color={THEME.black}>
              📊 Statistik Real-Time
            </Text>
            {/* ===== POPOVER — Info tooltip NeoStatCard ===== */}
            <Popover placement="right">
              <PopoverTrigger>
                <Box
                  as="button"
                  bg={THEME.primary}
                  border={`2px solid ${THEME.black}`}
                  borderRadius="8px"
                  boxShadow={`2px 2px 0 ${THEME.black}`}
                  p="4px"
                  cursor="pointer"
                  _hover={{ transform: "translate(-1px,-1px)", boxShadow: `3px 3px 0 ${THEME.black}` }}
                >
                  <Icon as={MdInfo} w="16px" h="16px" color={THEME.black} />
                </Box>
              </PopoverTrigger>
              <PopoverContent
                bg={THEME.white}
                border={`3px solid ${THEME.black}`}
                borderRadius="12px"
                boxShadow={`4px 4px 0 ${THEME.black}`}
                fontFamily="'Inter', sans-serif"
                _focus={{ outline: "none" }}
              >
                <PopoverArrow bg={THEME.white} />
                <PopoverCloseButton fontWeight="900" />
                <PopoverHeader fontWeight="900" fontSize="12px" textTransform="uppercase" borderBottom={`2px solid ${THEME.black}`}>
                  ℹ️ Info Statistik
                </PopoverHeader>
                <PopoverBody fontSize="12px" fontWeight="800" color={THEME.black}>
                  Data statistik diperbarui setiap hari. Klik kartu untuk melihat laporan detail.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} mb={10}>
            <NeoStatCard label="Total Pasien" value="1,240" trend="up" trendVal="+12%" color={THEME.primary} icon={<Icon as={MdPeople} />} />
            <NeoStatCard label="Stok Obat" value="3,891" trend="down" trendVal="-5%" color={THEME.pink} icon={<Icon as={MdMedication} />} />
            <NeoStatCard label="Pendapatan" value="Rp 4.5M" trend="up" trendVal="+18.5%" color="#A7FF3D" icon={<Icon as={MdAttachMoney} />} />
          </SimpleGrid>
        </Container>
      </Box>

      <Box bg={THEME.black} py={10} borderY={`3px solid ${THEME.black}`} position="relative" zIndex="1">
        <Container maxW="1200px" px={{ base: 4, md: 8 }}>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
            {[
              { number: "50+", label: "Apotek Partner", color: THEME.yellow, delay: 0 },
              { number: "10K+", label: "Obat Tersedia", color: THEME.primary, delay: 0.1 },
              { number: "100K+", label: "Resep Diproses", color: THEME.pink, delay: 0.2 },
              { number: "99.9%", label: "Uptime", color: THEME.white, delay: 0.3 },
            ].map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Container maxW="1200px" py={16} px={{ base: 4, md: 8 }} position="relative" zIndex="1">
        <VStack spacing={4} textAlign="center" mb={10}>
          <Badge
            bg={THEME.primary}
            border={`3px solid ${THEME.black}`}
            px="12px"
            py="7px"
            borderRadius="10px"
            fontSize="11px"
            fontWeight="900"
            boxShadow={`3px 3px 0 ${THEME.black}`}
          >
            FITUR UNGGULAN
          </Badge>

          <Heading
            fontSize={{ base: "30px", md: "42px" }}
            fontWeight="900"
            color={THEME.black}
            letterSpacing="-2px"
          >
            Semua yang Anda Butuhkan
          </Heading>

          <Text
            fontSize={{ base: "14px", md: "16px" }}
            color={THEME.black}
            fontWeight="800"
            maxW="600px"
          >
            Kelola seluruh operasional apotek dengan mudah menggunakan sistem
            yang terintegrasi.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          {[
            {
              icon: MdMedication,
              title: "Manajemen Stok Obat",
              description: "Pantau stok obat real-time dengan notifikasi otomatis.",
              color: THEME.yellow,
              delay: 0,
            },
            {
              icon: MdLocalHospital,
              title: "Kelola Resep Pasien",
              description: "Simpan dan kelola resep digital dengan riwayat lengkap.",
              color: THEME.pink,
              delay: 0.1,
            },
            {
              icon: MdSchedule,
              title: "Jadwal Kedaluwarsa",
              description: "Peringatan otomatis untuk obat yang akan kedaluwarsa.",
              color: THEME.primary,
              delay: 0.2,
            },
            {
              icon: MdHealthAndSafety,
              title: "Konsultasi Farmasi",
              description: "Catat konsultasi dan rekomendasi untuk pelanggan.",
              color: THEME.green,
              delay: 0.3,
            },
            {
              icon: MdLocalPharmacy,
              title: "Laporan Penjualan",
              description: "Analitik lengkap untuk memahami tren dan profit.",
              color: THEME.orange,
              delay: 0.4,
            },
            {
              icon: MdMedication,
              title: "Multi Cabang",
              description: "Kelola beberapa cabang apotek dalam satu dashboard.",
              color: THEME.purple,
              delay: 0.5,
            },
          ].map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </SimpleGrid>
      </Container>

      {/* ===== ACCORDION — FAQ Apotek ===== */}
      <Container maxW="860px" py={12} px={{ base: 4, md: 8 }} position="relative" zIndex="1">
        <VStack spacing={3} textAlign="center" mb={8}>
          <Badge
            bg={THEME.yellow}
            border={`3px solid ${THEME.black}`}
            px="12px" py="7px"
            borderRadius="10px"
            fontSize="11px"
            fontWeight="900"
            boxShadow={`3px 3px 0 ${THEME.black}`}
          >
            FAQ
          </Badge>
          <Heading fontSize={{ base: "26px", md: "36px" }} fontWeight="900" color={THEME.black} letterSpacing="-2px">
            Pertanyaan Umum
          </Heading>
        </VStack>
        <Accordion allowToggle>
          {[
            { q: "Apakah sistem ini bisa digunakan oleh beberapa apoteker?", a: "Ya, sistem mendukung multi-user dengan hak akses berbeda untuk apoteker, kasir, dan manajer." },
            { q: "Bagaimana cara import data stok obat yang sudah ada?", a: "Anda bisa import via file Excel (.xlsx) dari menu Pengaturan → Import Data. Format template tersedia di halaman tersebut." },
            { q: "Apakah ada laporan penjualan otomatis?", a: "Ya, laporan harian, mingguan, dan bulanan tersedia secara otomatis dan bisa diunduh dalam format PDF atau Excel." },
            { q: "Bagaimana keamanan data pasien?", a: "Data dienkripsi dan disimpan di server aman. Hanya pengguna dengan izin yang bisa mengakses data pasien." },
          ].map((faq, i) => (
            <AccordionItem
              key={i}
              border={`3px solid ${THEME.black}`}
              borderRadius="12px"
              mb="12px"
              overflow="hidden"
              boxShadow={`4px 4px 0 ${THEME.black}`}
            >
              <AccordionButton
                p="16px"
                _hover={{ bg: THEME.yellow }}
                _expanded={{ bg: THEME.primary }}
                fontWeight="900"
                fontSize="14px"
                textAlign="left"
              >
                <Box flex="1" mr={2}>{faq.q}</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                borderTop={`3px solid ${THEME.black}`}
                bg={THEME.white}
                px="16px"
                py="14px"
                fontSize="13px"
                fontWeight="800"
                color={THEME.black}
              >
                {faq.a}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>

      <Box py={14} px={{ base: 4, md: 8 }} position="relative" zIndex="1">
        <Container maxW="860px">
          <MotionBox
            bg={THEME.white}
            border={`3px solid ${THEME.black}`}
            borderRadius="16px"
            boxShadow={`6px 6px 0 ${THEME.black}`}
            p={{ base: 6, md: 10 }}
            textAlign="center"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              bg={THEME.background}
              border={`3px solid ${THEME.black}`}
              px="12px"
              py="7px"
              borderRadius="10px"
              fontSize="11px"
              fontWeight="900"
              boxShadow={`3px 3px 0 ${THEME.black}`}
              mb={4}
            >
              SIAP MULAI?
            </Badge>

            <Heading
              fontSize={{ base: "28px", md: "40px" }}
              fontWeight="900"
              color={THEME.black}
              mb={4}
              letterSpacing="-2px"
            >
              Transformasi Digital Apotek Anda
            </Heading>

            <Text
              fontSize={{ base: "14px", md: "16px" }}
              color={THEME.black}
              fontWeight="800"
              maxW="600px"
              mx="auto"
              mb={7}
            >
              Bergabung dengan apotek yang telah meningkatkan efisiensi
              operasional menggunakan sistem kami.
            </Text>

            <MotionButton
              rightIcon={<MdArrowForward />}
              bg={THEME.primary}
              color={THEME.black}
              h="52px"
              px="24px"
              border={`3px solid ${THEME.black}`}
              borderRadius="12px"
              fontWeight="900"
              fontSize="13px"
              textTransform="uppercase"
              boxShadow={`4px 4px 0 ${THEME.black}`}
              _hover={{
                bg: THEME.danger,
                transform: "translate(-1px, -1px)",
                boxShadow: `5px 5px 0 ${THEME.black}`,
              }}
              _active={{
                transform: "translate(2px, 2px)",
                boxShadow: `2px 2px 0 ${THEME.black}`,
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
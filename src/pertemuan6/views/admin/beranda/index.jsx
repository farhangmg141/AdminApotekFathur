import React from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Flex,
  Badge,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import PageHeader from "components/pageHeader/PageHeader.jsx";
import {
  MdDownload,
  MdSearch,
  MdMedication,
  MdLocalPharmacy,
  MdHealthAndSafety,
  MdAttachMoney,
} from "react-icons/md";

export default function DashboardApotek() {
  const bgPage = "#E9FFF3";
  const cardBg = "#FFFFFF";
  const textDark = "#111111";
  const textMuted = "#555555";

  const accentBlue = "#4D96FF";
  const accentYellow = "#FFD93D";
  const accentGreen = "#6BCB77";
  const accentRed = "#FF6B6B";
  const accentPurple = "#B983FF";

  const stats = [
    {
      label: "Obat Terjual Hari Ini",
      value: "128",
      help: "+18%",
      color: accentBlue,
      icon: MdMedication,
    },
    {
      label: "Pendapatan Apotek",
      value: "Rp 8,7jt",
      help: "+12%",
      color: accentGreen,
      icon: MdAttachMoney,
    },
    {
      label: "Stok Hampir Habis",
      value: "14",
      help: "Perlu restock",
      color: accentYellow,
      icon: MdHealthAndSafety,
    },
    {
      label: "Produk Aktif",
      value: "246",
      help: "Tersedia",
      color: accentPurple,
      icon: MdLocalPharmacy,
    },
  ];

  const salesData = [
    { value: 45, color: accentBlue },
    { value: 60, color: accentYellow },
    { value: 55, color: accentGreen },
    { value: 78, color: accentRed },
    { value: 66, color: accentBlue },
    { value: 92, color: accentYellow },
    { value: 80, color: accentPurple },
  ];

  return (
    <Box
      bg={bgPage}
      minH="100vh"
      px={{ base: "16px", md: "24px" }}
      pt={{ base: "135px", md: "140px", xl: "145px" }}
      pb="70px"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset="0"
        opacity="0.16"
        bgImage="linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)"
        bgSize="34px 34px"
        pointerEvents="none"
      />

      <Box position="relative" zIndex="1">
        <Flex
          align={{ base: "flex-start", lg: "flex-end" }}
          justify="space-between"
          gap="18px"
          mb="30px"
          direction={{ base: "column", lg: "row" }}
        >
          <Box>
            <PageHeader title="Dashboard Apotek" breadcrumb="Apotek" />
          </Box>

          <Flex gap="12px" flexWrap="wrap" mb={{ base: "0", lg: "14px" }}>
            <InputGroup w={{ base: "100%", md: "300px" }}>
              <InputLeftElement pointerEvents="none" h="100%">
                <Icon as={MdSearch} color={textDark} fontSize="22px" />
              </InputLeftElement>

              <Input
                placeholder="Cari obat / produk..."
                bg={cardBg}
                border="4px solid #111"
                borderRadius="18px"
                h="54px"
                pl="46px"
                fontSize="15px"
                fontWeight="900"
                color={textDark}
                boxShadow="6px 6px 0 #111"
                _placeholder={{ color: textMuted }}
                _focus={{
                  bg: "#FFFFFF",
                  borderColor: "#111",
                  boxShadow: "8px 8px 0 #111",
                }}
              />
            </InputGroup>

            <Button
              leftIcon={<MdDownload />}
              bg={accentBlue}
              color="#111"
              border="4px solid #111"
              borderRadius="18px"
              fontSize="14px"
              fontWeight="900"
              h="54px"
              boxShadow="6px 6px 0 #111"
              _hover={{
                bg: "#7BB2FF",
                transform: "translate(-2px, -2px)",
                boxShadow: "8px 8px 0 #111",
              }}
              _active={{
                transform: "translate(3px, 3px)",
                boxShadow: "2px 2px 0 #111",
              }}
            >
              Export Laporan
            </Button>
          </Flex>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="24px" mb="34px">
          {stats.map((s, i) => (
            <Box
              key={i}
              bg={cardBg}
              border="4px solid #111"
              p="24px"
              minH="190px"
              borderRadius="26px"
              boxShadow="10px 10px 0 #111"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top="-22px"
                right="-22px"
                w="94px"
                h="94px"
                bg={s.color}
                border="4px solid #111"
                borderRadius="50%"
              />

              <Flex
                align="center"
                justify="center"
                w="56px"
                h="56px"
                bg={s.color}
                border="4px solid #111"
                boxShadow="5px 5px 0 #111"
                borderRadius="16px"
                mb="18px"
                position="relative"
                zIndex="2"
              >
                <Icon as={s.icon} w="28px" h="28px" color="#111" />
              </Flex>

              <Text
                fontSize="11px"
                fontWeight="900"
                textTransform="uppercase"
                letterSpacing="1.5px"
                color={textMuted}
                mb="10px"
                position="relative"
                zIndex="2"
              >
                {s.label}
              </Text>

              <Text
                fontSize={{ base: "34px", md: "38px" }}
                fontWeight="900"
                color={textDark}
                lineHeight="1"
                mb="14px"
                position="relative"
                zIndex="2"
              >
                {s.value}
              </Text>

              <Badge
                bg={s.color}
                color="#111"
                border="3px solid #111"
                boxShadow="4px 4px 0 #111"
                px="3"
                py="1"
                borderRadius="12px"
                fontWeight="900"
                position="relative"
                zIndex="2"
              >
                {s.help}
              </Badge>
            </Box>
          ))}
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, xl: 2 }} gap="26px" mb="34px">
          <Box
            bg={cardBg}
            border="4px solid #111"
            p={{ base: "22px", md: "30px" }}
            borderRadius="26px"
            boxShadow="10px 10px 0 #111"
          >
            <Flex align="center" justify="space-between" mb="26px" gap="4">
              <Box>
                <Text fontSize="21px" fontWeight="900" color={textDark}>
                  📊 Penjualan Obat Mingguan
                </Text>
                <Text fontSize="13px" fontWeight="800" color={textMuted} mt="1">
                  Performa transaksi apotek 7 hari terakhir
                </Text>
              </Box>

              <Badge
                bg={accentGreen}
                color="#111"
                border="3px solid #111"
                boxShadow="4px 4px 0 #111"
                borderRadius="12px"
                px="3"
                py="1"
                fontWeight="900"
              >
                +18%
              </Badge>
            </Flex>

            <Flex h="240px" align="flex-end" gap="10px">
              {salesData.map((item, i) => (
                <Box
                  key={i}
                  flex="1"
                  bg={item.color}
                  h={`${item.value}%`}
                  border="4px solid #111"
                  borderRadius="14px 14px 0 0"
                  boxShadow="4px 4px 0 #111"
                />
              ))}
            </Flex>

            <Flex justify="space-between" mt="22px" gap="10px">
              {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"].map((day) => (
                <Text
                  key={day}
                  fontSize="12px"
                  color={textDark}
                  fontWeight="900"
                  w="100%"
                  textAlign="center"
                >
                  {day}
                </Text>
              ))}
            </Flex>
          </Box>

          <Box
            bg={cardBg}
            border="4px solid #111"
            borderRadius="26px"
            overflow="hidden"
            boxShadow="10px 10px 0 #111"
          >
            <Box p="28px" pb="18px" borderBottom="4px solid #111">
              <Text fontSize="21px" fontWeight="900" color={textDark}>
                📍 Lokasi Apotek
              </Text>
              <Text color={textMuted} fontSize="13px" fontWeight="800" mt="8px">
                Cabang Utama Jakarta Selatan
              </Text>
            </Box>

            <iframe
              title="Lokasi Apotek"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.1748281134!2d106.824964!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4a42903ab%3A0x62810d7a04944f6!2sSudirman%20Central%20Business%20District!5e0!3m2!1sen!2sid!4v1714000000000!5m2!1sen!2sid"
              width="100%"
              height="330"
              style={{ border: "none", display: "block" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </SimpleGrid>

        <Box
          bg={cardBg}
          border="4px solid #111"
          p={{ base: "24px", md: "30px" }}
          borderRadius="26px"
          boxShadow="10px 10px 0 #111"
        >
          <Text fontSize="21px" fontWeight="900" color={textDark} mb="12px">
            ⚡ Sistem Apotek Terintegrasi
          </Text>

          <Text
            color={textMuted}
            mb="18px"
            fontSize="15px"
            fontWeight="800"
            lineHeight="1.7"
          >
            Sistem mendukung manajemen{" "}
            <Text as="span" fontWeight="900" color={textDark}>
              stok obat
            </Text>
            ,{" "}
            <Text as="span" fontWeight="900" color={textDark}>
              transaksi penjualan
            </Text>
            , dan laporan apotek secara real-time.
          </Text>

          <Badge
            bg={accentYellow}
            color="#111"
            p="10px 16px"
            borderRadius="12px"
            border="3px solid #111"
            boxShadow="5px 5px 0 #111"
            fontSize="12px"
            fontWeight="900"
          >
            ✓ Sistem Apotek: Stabil
          </Badge>
        </Box>
      </Box>
    </Box>
  );
}
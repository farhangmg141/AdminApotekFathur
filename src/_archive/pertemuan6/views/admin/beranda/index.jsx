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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
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
  const bgPage = "#FFE66D";
  const cardBg = "#FFFFFF";
  const textDark = "#111111";
  const textMuted = "#4D4D4D";

  const accentCyan = "#48D8FF";
  const accentYellow = "#FFE66D";
  const accentGreen = "#8BFF58";
  const accentPink = "#FF5DD6";
  const accentOrange = "#FFB800";
  const softYellow = "#FFF9C2";

  const stats = [
    {
      label: "Obat Terjual",
      value: "128",
      help: "+18%",
      color: accentCyan,
      icon: MdMedication,
    },
    {
      label: "Pendapatan",
      value: "Rp 8,7jt",
      help: "+12%",
      color: accentGreen,
      icon: MdAttachMoney,
    },
    {
      label: "Stok Menipis",
      value: "14",
      help: "Restock",
      color: accentOrange,
      icon: MdHealthAndSafety,
    },
    {
      label: "Produk Aktif",
      value: "246",
      help: "Ready",
      color: accentPink,
      icon: MdLocalPharmacy,
    },
  ];

  const salesData = [
    { value: 45, color: accentCyan },
    { value: 60, color: accentYellow },
    { value: 55, color: accentGreen },
    { value: 78, color: accentPink },
    { value: 66, color: accentCyan },
    { value: 92, color: accentOrange },
    { value: 80, color: accentPink },
  ];

  return (
    <Box
      bg={bgPage}
      minH="100vh"
      px={{ base: "14px", md: "24px" }}
      pt={{ base: "128px", md: "138px", xl: "145px" }}
      pb="70px"
      position="relative"
      overflow="hidden"
      fontFamily="Manrope, sans-serif"
    >
      <Box
        position="absolute"
        inset="0"
        opacity="0.12"
        bgImage="linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)"
        bgSize="28px 28px"
        pointerEvents="none"
      />

      <Box position="relative" zIndex="1">
        <Flex
          align={{ base: "flex-start", lg: "flex-end" }}
          justify="space-between"
          gap="18px"
          mb="26px"
          direction={{ base: "column", lg: "row" }}
        >
          <Box>
            <PageHeader title="DASHBOARD APOTEK" breadcrumb="Apotek" />
          </Box>

          <Flex gap="12px" flexWrap="wrap" mb={{ base: "0", lg: "12px" }}>
            <InputGroup w={{ base: "100%", md: "300px" }}>
              <InputLeftElement h="100%" pl="6px">
                <Flex
                  w="34px"
                  h="34px"
                  align="center"
                  justify="center"
                  bg={accentCyan}
                  border="3px solid #111"
                  borderRadius="12px"
                  boxShadow="3px 3px 0 #111"
                >
                  <Icon as={MdSearch} color={textDark} fontSize="21px" />
                </Flex>
              </InputLeftElement>

              <Input
                placeholder="Cari obat / produk..."
                bg={cardBg}
                border="4px solid #111"
                borderRadius="18px"
                h="54px"
                pl="54px"
                fontSize="14px"
                fontWeight="900"
                color={textDark}
                boxShadow="6px 6px 0 #111"
                _placeholder={{
                  color: textMuted,
                  fontWeight: "900",
                }}
                _hover={{
                  bg: softYellow,
                  transform: "translate(-2px, -2px)",
                  boxShadow: "8px 8px 0 #111",
                }}
                _focus={{
                  bg: "#FFFFFF",
                  borderColor: "#111",
                  boxShadow: `8px 8px 0 ${accentCyan}`,
                }}
                transition="all .18s ease"
              />
            </InputGroup>

            <Button
              leftIcon={<MdDownload />}
              bg={accentPink}
              color="#111"
              border="4px solid #111"
              borderRadius="18px"
              fontSize="13px"
              fontWeight="900"
              h="54px"
              textTransform="uppercase"
              boxShadow="6px 6px 0 #111"
              _hover={{
                bg: accentCyan,
                transform: "translate(-2px, -2px)",
                boxShadow: "8px 8px 0 #111",
              }}
              _active={{
                bg: accentYellow,
                transform: "translate(3px, 3px)",
                boxShadow: "2px 2px 0 #111",
              }}
            >
              Export
            </Button>
          </Flex>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="22px" mb="32px">
          {stats.map((s, i) => (
            <Box
              key={i}
              bg={cardBg}
              border="4px solid #111"
              p="22px"
              minH="176px"
              borderRadius="22px"
              boxShadow="8px 8px 0 #111"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top="-26px"
                right="-24px"
                w="92px"
                h="92px"
                bg={s.color}
                border="4px solid #111"
                borderRadius="20px"
                transform="rotate(8deg)"
              />

              <Flex
                align="center"
                justify="center"
                w="54px"
                h="54px"
                bg={s.color}
                border="4px solid #111"
                boxShadow="4px 4px 0 #111"
                borderRadius="16px"
                mb="18px"
                position="relative"
                zIndex="2"
              >
                <Icon as={s.icon} w="28px" h="28px" color="#111" />
              </Flex>

              <Text
                fontSize="10px"
                fontWeight="900"
                textTransform="uppercase"
                letterSpacing="1.2px"
                color={textMuted}
                mb="9px"
                position="relative"
                zIndex="2"
              >
                {s.label}
              </Text>

              <Text
                fontSize={{ base: "34px", md: "37px" }}
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
                boxShadow="3px 3px 0 #111"
                px="3"
                py="1"
                borderRadius="10px"
                fontSize="11px"
                fontWeight="900"
                textTransform="uppercase"
                position="relative"
                zIndex="2"
              >
                {s.help}
              </Badge>
            </Box>
          ))}
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, xl: 2 }} gap="24px" mb="32px">
          <Box
            bg={cardBg}
            border="4px solid #111"
            p={{ base: "22px", md: "28px" }}
            borderRadius="24px"
            boxShadow="8px 8px 0 #111"
          >
            <Flex align="center" justify="space-between" mb="24px" gap="4">
              <Box>
                <Text fontSize="21px" fontWeight="900" color={textDark}>
                  TRAFFIC OVERVIEW
                </Text>
                <Text fontSize="12px" fontWeight="900" color={textMuted} mt="1">
                  Penjualan obat 7 hari terakhir
                </Text>
              </Box>

              <Badge
                bg={accentGreen}
                color="#111"
                border="3px solid #111"
                boxShadow="3px 3px 0 #111"
                borderRadius="10px"
                px="3"
                py="1"
                fontWeight="900"
              >
                +18%
              </Badge>
            </Flex>

            <Flex h="220px" align="flex-end" gap="9px">
              {salesData.map((item, i) => (
                <Box
                  key={i}
                  flex="1"
                  bg={item.color}
                  h={`${item.value}%`}
                  border="4px solid #111"
                  borderRadius="12px 12px 0 0"
                  boxShadow="4px 4px 0 #111"
                />
              ))}
            </Flex>

            <Flex justify="space-between" mt="20px" gap="8px">
              {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
                <Text
                  key={day}
                  fontSize="11px"
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
            borderRadius="24px"
            overflow="hidden"
            boxShadow="8px 8px 0 #111"
          >
            <Box p="24px" pb="16px" borderBottom="4px solid #111" bg={softYellow}>
              <Text fontSize="21px" fontWeight="900" color={textDark}>
                LOKASI APOTEK
              </Text>
              <Text color={textMuted} fontSize="12px" fontWeight="900" mt="7px">
                Cabang Utama Jakarta Selatan
              </Text>
            </Box>

            <iframe
              title="Lokasi Apotek"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.1748281134!2d106.824964!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4a42903ab%3A0x62810d7a04944f6!2sSudirman%20Central%20Business%20District!5e0!3m2!1sen!2sid!4v1714000000000!5m2!1sen!2sid"
              width="100%"
              height="330"
              style={{
                border: "none",
                display: "block",
                filter: "grayscale(1) contrast(1.15)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </SimpleGrid>

        <Box
          bg={softYellow}
          border="4px solid #111"
          p={{ base: "24px", md: "30px" }}
          borderRadius="24px"
          boxShadow="8px 8px 0 #111"
          position="relative"
          overflow="hidden"
        >
          <Box
            position="absolute"
            top="-18px"
            right="-18px"
            w="90px"
            h="90px"
            bg={accentCyan}
            border="4px solid #111"
            borderRadius="20px"
            transform="rotate(10deg)"
          />

          <Text fontSize="21px" fontWeight="900" color={textDark} mb="12px">
            SISTEM APOTEK TERINTEGRASI
          </Text>

          <Text
            color={textMuted}
            mb="18px"
            fontSize="15px"
            fontWeight="800"
            lineHeight="1.7"
            maxW="760px"
            position="relative"
            zIndex="2"
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
            boxShadow="4px 4px 0 #111"
            fontSize="12px"
            fontWeight="900"
          >
            ✓ SYSTEM STATUS: STABLE
          </Badge>
        </Box>

        <Box
          mt="32px"
          bg={cardBg}
          border="4px solid #111"
          p={{ base: "24px", md: "30px" }}
          borderRadius="24px"
          boxShadow="8px 8px 0 #111"
        >
          <Text fontSize="21px" fontWeight="900" color={textDark} mb="20px">
            PANDUAN OPERASIONAL & FAQ APOTEK
          </Text>
          <Accordion allowToggle>
            <AccordionItem border="3px solid #111" borderRadius="14px" bg="#FFFFFF" mb="14px" overflow="hidden" boxShadow="4px 4px 0 #111">
              <h2>
                <AccordionButton p="16px" _hover={{ bg: softYellow }} _expanded={{ bg: accentCyan }}>
                  <Box flex="1" textAlign="left" fontWeight="900" fontSize="14px" color={textDark}>
                    Bagaimana alur penerimaan resep obat di apotek?
                  </Box>
                  <AccordionIcon color={textDark} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} pt={4} px="16px" borderTop="3px solid #111" bg="#FFFFFF" fontWeight="800" fontSize="13px" color={textMuted}>
                Resep dimasukkan oleh petugas di menu "Resep Pasien". Setelah itu apoteker memverifikasi persediaan obat di menu "Daftar Obat". Jika stok cukup, status transaksi diubah menjadi "Selesai" dan stok obat akan terpotong secara otomatis di sistem CRM.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="3px solid #111" borderRadius="14px" bg="#FFFFFF" mb="14px" overflow="hidden" boxShadow="4px 4px 0 #111">
              <h2>
                <AccordionButton p="16px" _hover={{ bg: softYellow }} _expanded={{ bg: accentGreen }}>
                  <Box flex="1" textAlign="left" fontWeight="900" fontSize="14px" color={textDark}>
                    Apa tindakan yang harus dilakukan jika stok obat berstatus "Habis"?
                  </Box>
                  <AccordionIcon color={textDark} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} pt={4} px="16px" borderTop="3px solid #111" bg="#FFFFFF" fontWeight="800" fontSize="13px" color={textMuted}>
                Segera klik tombol sunting (ikon pensil kuning) pada obat terkait di menu "Daftar Obat" untuk memperbarui jumlah stok setelah pengadaan baru tiba, atau ubah status produk menjadi "Habis" agar petugas kasir/dokter tidak meresepkannya sementara waktu.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="3px solid #111" borderRadius="14px" bg="#FFFFFF" overflow="hidden" boxShadow="4px 4px 0 #111">
              <h2>
                <AccordionButton p="16px" _hover={{ bg: softYellow }} _expanded={{ bg: accentPink }}>
                  <Box flex="1" textAlign="left" fontWeight="900" fontSize="14px" color={textDark}>
                    Bagaimana cara mendaftarkan pasien dengan kategori BPJS atau Member?
                  </Box>
                  <AccordionIcon color={textDark} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} pt={4} px="16px" borderTop="3px solid #111" bg="#FFFFFF" fontWeight="800" fontSize="13px" color={textMuted}>
                Buka menu "Daftar Pasien", lalu pilih tombol "Tambah Pasien" di pojok kanan atas. Masukkan nama, email, nomor telepon, dan pastikan untuk memilih Kategori Pasien yang sesuai (Umum, BPJS, atau Member) untuk pencatatan profil medis dan program diskon yang terintegrasi.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
}
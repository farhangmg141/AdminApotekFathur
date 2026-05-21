import React, { useState } from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Button,
  VStack,
  HStack,
  Icon,
  useDisclosure,
  useToast,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { MdCheck, MdCode, MdInfo, MdMoreVert } from "react-icons/md";

import {
  Card,
  Mastercard,
  Member,
  MiniStatistics,
  NFT,
  IconBox,
  SearchBar,
  PageHeader,
  HSeparator,
  VSeparator,
  FooterAdmin,
  NeoAlert,
  NeoModal,
  NeoSwitch,
  NeoProgress,
  NeoSlider,
  NeoBadge,
  NeoTooltip,
  GooeyNav,
  TransparentMenu,
  ComponentShowcaseCard,
} from "components/ui";
import { NEO_THEME, NEO_PAGE } from "theme/neoBrutal";

import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import nftImage from "assets/img/nfts/Nft1.png";

const { bgPage, textDark, cyan, green, pink } = NEO_THEME;

const IMPORT_UI = 'import { Card, NeoAlert, PageHeader } from "components/ui";';

export default function ComponentsPage() {
  const toast = useToast();
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();

  const [sliderVal, setSliderVal] = useState(60);
  const [switchVal, setSwitchVal] = useState(true);
  const [copiedId, setCopiedId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  const copyToClipboard = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast({
      title: "Kode berhasil disalin!",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "bottom-right",
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleCode = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const catalog = [
    {
      id: "card",
      category: "Cards & Display",
      name: "Card Component",
      description:
        "Card dasar dengan styling border tebal dan drop-shadow 3D khas Neo-Brutalism.",
      code: `${IMPORT_UI}

<Card p="20px" w="300px">
  <Text fontWeight="900">Neo-Brutal Card</Text>
  <Text fontSize="13px" mt="5px">Konten dalam card</Text>
</Card>`,
      render: () => (
        <Card p="20px" maxW="300px" w="100%">
          <Text fontWeight="900" fontSize="16px" color={textDark}>
            NEO-BRUTAL CARD
          </Text>
          <Text fontSize="13px" fontWeight="800" color={NEO_THEME.textMuted} mt="8px">
            Card kustom dengan border tegas untuk konten dashboard.
          </Text>
        </Card>
      ),
    },
    {
      id: "mastercard",
      category: "Cards & Display",
      name: "Mastercard Component",
      description:
        "Kartu debit/kredit premium bertema Neo-Brutalist dengan warna latar dinamis dan simulasi chip.",
      code: `import { Mastercard } from "components/ui";

<Mastercard
  number="•••• •••• •••• 9876"
  exp="12/28"
  cvv="321"
  cardHolder="FATHUR RAHMAN"
  bg="#FF4FD8"
/>`,
      render: () => (
        <Box maxW="320px" w="100%">
          <Mastercard
            number="•••• •••• •••• 9876"
            exp="12/28"
            cvv="321"
            cardHolder="FATHUR RAHMAN"
            bg={pink}
          />
        </Box>
      ),
    },
    {
      id: "member",
      category: "Cards & Display",
      name: "Member Component",
      description:
        "Kartu data pasien/member apotek dengan avatar ber-border tebal, nama, jabatan, dan menu aksi.",
      code: `import { Member } from "components/ui";
import avatar1 from "assets/img/avatars/avatar1.png";

<Member avatar={avatar1} name="Fathur Rahman" job="Member Gold" />`,
      render: () => (
        <Box maxW="320px" w="100%">
          <Member avatar={avatar1} name="Fathur Rahman" job="Member Gold" />
        </Box>
      ),
    },
    {
      id: "ministats",
      category: "Cards & Display",
      name: "Mini Statistics",
      description:
        "Statistik ringkas bergaya Neo-Brutalist dengan ikon dan badge pertumbuhan (growth).",
      code: `import { MiniStatistics, IconBox } from "components/ui";
import { MdInfo } from "react-icons/md";

<MiniStatistics
  startContent={<IconBox bg="#33DFFF" icon={<MdInfo size={24} />} />}
  name="Total Obat"
  value="1,245"
  growth="+15%"
/>`,
      render: () => (
        <Box maxW="320px" w="100%">
          <MiniStatistics
            startContent={
              <IconBox bg={cyan} icon={<Icon as={MdInfo} w="24px" h="24px" color={textDark} />} />
            }
            name="Pendapatan Obat"
            value="Rp 4.5M"
            growth="+18.5%"
          />
        </Box>
      ),
    },
    {
      id: "nft",
      category: "Cards & Display",
      name: "NFT Card",
      description:
        "Showcase NFT card lengkap dengan artwork, bids, author, avatar group, dan like button.",
      code: `import { NFT } from "components/ui";
import nftImage from "assets/img/nfts/Nft1.png";
import avatar1 from "assets/img/avatars/avatar1.png";

<NFT
  image={nftImage}
  name="Premium Healing Capsule"
  author="Dr. H. Rustaf"
  bidders={[avatar1]}
  currentbid="0.45 ETH"
  download="#"
/>`,
      render: () => (
        <Box maxW="300px" w="100%">
          <NFT
            image={nftImage}
            name="Capsule #09"
            author="Dr. H. Rustaf"
            bidders={[avatar2, avatar3, avatar1]}
            currentbid="0.85 ETH"
            download="#"
          />
        </Box>
      ),
    },
    {
      id: "iconbox",
      category: "Feedback & Badges",
      name: "IconBox Component",
      description: "Kontainer rounded-square ber-border tebal untuk membungkus ikon.",
      code: `import { IconBox } from "components/ui";
import { MdInfo } from "react-icons/md";

<IconBox bg="#FF4FD8" icon={<MdInfo size={24} />} />`,
      render: () => (
        <HStack spacing="15px" flexWrap="wrap" justify="center">
          <IconBox bg={cyan} icon={<Icon as={MdInfo} w="22px" h="22px" color={textDark} />} />
          <IconBox bg={pink} icon={<Icon as={MdCode} w="22px" h="22px" color={textDark} />} />
          <IconBox bg={green} icon={<Icon as={MdCheck} w="22px" h="22px" color={textDark} />} />
        </HStack>
      ),
    },
    {
      id: "searchbar",
      category: "Inputs & Actions",
      name: "SearchBar Component",
      description: "Input pencarian responsif bergaya Neo-Brutalism dengan ikon kaca pembesar.",
      code: `import { SearchBar } from "components/ui";

<SearchBar placeholder="Cari obat..." />`,
      render: () => (
        <Box w="100%" maxW="300px">
          <SearchBar placeholder="Cari resep medis..." />
        </Box>
      ),
    },
    {
      id: "transparentmenu",
      category: "Inputs & Actions",
      name: "TransparentMenu",
      description: "Menu konteks tiga titik dengan daftar aksi Sunting, Unduh, dan Hapus.",
      code: `import { TransparentMenu } from "components/ui";
import { Icon } from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md";

<TransparentMenu icon={<Icon as={MdMoreVert} boxSize="22px" />} />`,
      render: () => (
        <TransparentMenu icon={<Icon as={MdMoreVert} boxSize="22px" color={textDark} />} />
      ),
    },
    {
      id: "pageheader",
      category: "Layout & Navigation",
      name: "PageHeader Component",
      description: "Header halaman dengan judul, sub-judul, dan breadcrumb Neo-Brutalism.",
      code: `import { PageHeader } from "components/ui";

<PageHeader
  title="Daftar Pasien"
  breadcrumb="Pasien"
  subtitle="Daftar pasien aktif bulan ini"
/>`,
      render: () => (
        <Box w="100%" bg="#FFFFFF" p="14px" borderRadius="12px" border={`3px solid ${textDark}`}>
          <PageHeader
            title="Daftar Obat"
            breadcrumb="Obat"
            subtitle="Kelola persediaan obat apotek Anda di sini."
          />
        </Box>
      ),
    },
    {
      id: "hseparator",
      category: "Layout & Navigation",
      name: "HSeparator",
      description: "Garis pemisah horizontal tebal dengan efek bayangan neon.",
      code: `import { HSeparator } from "components/ui";

<HSeparator />`,
      render: () => (
        <Box w="100%" py="8px">
          <HSeparator />
        </Box>
      ),
    },
    {
      id: "vseparator",
      category: "Layout & Navigation",
      name: "VSeparator",
      description: "Garis pemisah vertikal tebal dengan efek bayangan neon cyan.",
      code: `import { VSeparator } from "components/ui";

<Flex h="80px" align="center" justify="center">
  <VSeparator />
</Flex>`,
      render: () => (
        <Box
          h="80px"
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="#FFFFFF"
          borderRadius="12px"
          border={`3px solid ${textDark}`}
        >
          <VSeparator />
        </Box>
      ),
    },
    {
      id: "gooeynav",
      category: "Layout & Navigation",
      name: "GooeyNav Component",
      description: "Navigasi dengan efek slime (gooey) beranimasi saat item diklik.",
      code: `import { GooeyNav } from "components/ui";

<GooeyNav
  items={[
    { label: "Dashboard", href: "#" },
    { label: "Obat", href: "#" },
    { label: "Pasien", href: "#" },
  ]}
/>`,
      render: () => (
        <Box bg="#111" p="16px" borderRadius="16px" boxShadow={`4px 4px 0 ${pink}`} w="100%" maxW="400px">
          <GooeyNav
            items={[
              { label: "Beranda", href: "#" },
              { label: "Transaksi", href: "#" },
              { label: "Profil", href: "#" },
            ]}
          />
        </Box>
      ),
    },
    {
      id: "footeradmin",
      category: "Layout & Navigation",
      name: "FooterAdmin Component",
      description: "Footer admin dengan copyright, deskripsi sistem, dan tautan dokumen.",
      code: `import { FooterAdmin } from "components/ui";

<FooterAdmin />`,
      render: () => (
        <Box w="100%">
          <FooterAdmin />
        </Box>
      ),
    },
    {
      id: "neoalert",
      category: "Feedback & Badges",
      name: "NeoAlert Component",
      description: "Alert Neo-Brutalism dengan background solid sesuai status.",
      code: `import { NeoAlert } from "components/ui";

<NeoAlert
  status="success"
  title="Transaksi Berhasil!"
  description="Resep pasien telah diproses."
/>`,
      render: () => (
        <VStack align="stretch" spacing="10px" w="100%" maxW="450px">
          <NeoAlert
            status="info"
            title="PEMBERITAHUAN"
            description="Stok Paracetamol tersisa kurang dari 10 botol."
          />
          <NeoAlert
            status="success"
            title="BERHASIL"
            description="Data pasien baru berhasil ditambahkan."
          />
          <NeoAlert
            status="danger"
            title="ERROR"
            description="Gagal menghubungkan ke server apotek pusat."
          />
        </VStack>
      ),
    },
    {
      id: "neomodal",
      category: "Feedback & Badges",
      name: "NeoModal Component",
      description: "Dialog pop-up Neo-Brutalism dengan shadow tegas dan tombol close estetik.",
      code: `import { NeoModal } from "components/ui";
import { Button, useDisclosure } from "@chakra-ui/react";

const { isOpen, onOpen, onClose } = useDisclosure();

<Button onClick={onOpen}>Buka Modal</Button>
<NeoModal isOpen={isOpen} onClose={onClose} title="Detail Obat">
  <Text>Konten modal di sini.</Text>
</NeoModal>`,
      render: () => (
        <Box>
          <Button
            bg={pink}
            onClick={onModalOpen}
            fontWeight="900"
            fontSize="12px"
            textTransform="uppercase"
            border={`2px solid ${textDark}`}
            boxShadow={`3px 3px 0 ${textDark}`}
          >
            Buka NeoModal Live
          </Button>
          <NeoModal
            isOpen={isModalOpen}
            onClose={onModalClose}
            title="KONFIRMASI SYSTEM"
            footer={
              <HStack spacing="10px">
                <Button bg={green} fontSize="12px" fontWeight="900" onClick={onModalClose}>
                  SETUJU
                </Button>
                <Button bg="#FFFFFF" fontSize="12px" fontWeight="900" onClick={onModalClose}>
                  BATAL
                </Button>
              </HStack>
            }
          >
            <Text fontWeight="800" fontSize="13px" color={textDark}>
              Apakah Anda yakin ingin memproses resep antibiotik ini? Stok gudang akan otomatis
              berkurang.
            </Text>
          </NeoModal>
        </Box>
      ),
    },
    {
      id: "neoswitch",
      category: "Inputs & Actions",
      name: "NeoSwitch Component",
      description: "Switch kustom dengan track berwarna saat aktif dan thumb bullet tebal.",
      code: `import { NeoSwitch } from "components/ui";
import { useState } from "react";

const [checked, setChecked] = useState(true);

<NeoSwitch isChecked={checked} onChange={setChecked} label="Mode Malam" />`,
      render: () => (
        <NeoSwitch
          isChecked={switchVal}
          onChange={setSwitchVal}
          label={switchVal ? "Auto-Print Resep: AKTIF" : "Auto-Print Resep: MATI"}
          color={green}
        />
      ),
    },
    {
      id: "neoprogress",
      category: "Feedback & Badges",
      name: "NeoProgress Component",
      description: "Progress bar dengan stripe gradien miring khas Neo-Brutalism.",
      code: `import { NeoProgress } from "components/ui";

<NeoProgress value={65} color="#33DFFF" showLabel />`,
      render: () => (
        <VStack align="stretch" spacing="10px" w="100%" maxW="350px">
          <NeoProgress value={sliderVal} color={cyan} showLabel />
          <Text fontSize="11px" fontWeight="800" color={NEO_THEME.textMuted}>
            Geser slider di bawah untuk mengubah nilai progress.
          </Text>
        </VStack>
      ),
    },
    {
      id: "neoslider",
      category: "Inputs & Actions",
      name: "NeoSlider Component",
      description: "Slider rentang nilai dengan track tebal dan thumb bayangan 3D hitam.",
      code: `import { NeoSlider } from "components/ui";
import { useState } from "react";

const [val, setVal] = useState(50);

<NeoSlider value={val} onChange={setVal} color="#FF4FD8" />`,
      render: () => (
        <VStack align="stretch" spacing="8px" w="100%" maxW="350px">
          <NeoSlider value={sliderVal} onChange={setSliderVal} color={pink} />
          <Text fontWeight="900" fontSize="12px" color={textDark}>
            NILAI: {sliderVal}%
          </Text>
        </VStack>
      ),
    },
    {
      id: "neobadge",
      category: "Feedback & Badges",
      name: "NeoBadge Component",
      description: "Badge status tebal dengan bayangan offset dan teks uppercase.",
      code: `import { NeoBadge } from "components/ui";

<NeoBadge color="#A7FF3D">Aktif</NeoBadge>`,
      render: () => (
        <HStack spacing="10px" flexWrap="wrap" justify="center">
          <NeoBadge color={cyan}>TERSEDIA</NeoBadge>
          <NeoBadge color={green}>SELESAI</NeoBadge>
          <NeoBadge color={pink}>KRITIS</NeoBadge>
        </HStack>
      ),
    },
    {
      id: "neotooltip",
      category: "Feedback & Badges",
      name: "NeoTooltip Component",
      description: "Tooltip melayang dengan border tebal Neo-Brutalism saat hover.",
      code: `import { NeoTooltip } from "components/ui";
import { Text } from "@chakra-ui/react";

<NeoTooltip label="Informasi tambahan">
  <Text>Sorot teks ini</Text>
</NeoTooltip>`,
      render: () => (
        <HStack spacing="12px" flexWrap="wrap" justify="center">
          <NeoTooltip label="Obat bebas terbatas" color={cyan}>
            <Text
              fontWeight="900"
              fontSize="13px"
              border={`2px solid ${textDark}`}
              p="6px"
              borderRadius="8px"
              cursor="pointer"
              bg="#FFFFFF"
            >
              Paracetamol 500mg
            </Text>
          </NeoTooltip>
          <NeoTooltip label="Resep dokter diperlukan!" color={pink}>
            <Text
              fontWeight="900"
              fontSize="13px"
              border={`2px solid ${textDark}`}
              p="6px"
              borderRadius="8px"
              cursor="pointer"
              bg="#FFFFFF"
            >
              Amoxicillin 500mg
            </Text>
          </NeoTooltip>
        </HStack>
      ),
    },
  ];

  const categories = [
    "Cards & Display",
    "Inputs & Actions",
    "Feedback & Badges",
    "Layout & Navigation",
  ];

  const tabStyles = {
    bg: "#FFFFFF",
    border: `3px solid ${textDark}`,
    borderRadius: "12px",
    boxShadow: `3px 3px 0 ${textDark}`,
    fontWeight: "900",
    fontSize: "11px",
    textTransform: "uppercase",
    px: { base: "12px", md: "16px" },
    py: "8px",
    mb: "0",
    _selected: {
      bg: cyan,
      transform: "translate(2px, 2px)",
      boxShadow: `1px 1px 0 ${textDark}`,
    },
    _hover: { bg: green },
    transition: "all 0.15s ease",
  };

  return (
    <Box
      bg={bgPage}
      minH="100vh"
      pt={NEO_PAGE.pt}
      pb={NEO_PAGE.pb}
      position="relative"
      fontFamily="Manrope, sans-serif"
    >
      <Box
        position="absolute"
        inset="0"
        opacity="0.1"
        bgImage="linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)"
        bgSize="28px 28px"
        pointerEvents="none"
      />

      <Box position="relative" zIndex="1">
        <PageHeader
          hideBreadcrumb
          compact
          title="Katalog Komponen UI"
          subtitle="Daftar lengkap komponen kustom premium bertema Neo-Brutalism untuk mempercepat pembuatan halaman dashboard."
        />

        <Tabs variant="unstyled" mt="14px">
          <TabList
            display="flex"
            flexWrap="wrap"
            gap={{ base: "8px", md: "10px" }}
            borderBottom={`3px solid ${textDark}`}
            pb="12px"
          >
            {categories.map((cat, idx) => (
              <Tab key={idx} {...tabStyles}>
                {cat}
              </Tab>
            ))}
          </TabList>

          <TabPanels mt={{ base: "18px", md: "22px" }}>
            {categories.map((category, idx) => (
              <TabPanel key={idx} p="0">
                <SimpleGrid
                  columns={{ base: 1, lg: 2 }}
                  spacing={{ base: "18px", md: "22px" }}
                  alignItems="stretch"
                >
                  {catalog
                    .filter((comp) => comp.category === category)
                    .map((comp) => (
                      <ComponentShowcaseCard
                        key={comp.id}
                        comp={comp}
                        expandedId={expandedId}
                        copiedId={copiedId}
                        onToggleCode={toggleCode}
                        onCopyCode={copyToClipboard}
                      />
                    ))}
                </SimpleGrid>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

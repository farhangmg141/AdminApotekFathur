import React, { useState, useRef } from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Badge,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Select,
  useDisclosure,
  useToast,
  IconButton,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  InputGroup,
  InputLeftElement,
  Tag,
  TagLabel,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  Image,
} from "@chakra-ui/react";
import PageHeader from "components/pageHeader/PageHeader.jsx";
import {
  MdAdd,
  MdSearch,
  MdDeleteOutline,
  MdEdit,
  MdPhotoSizeSelectActual,
  MdMedication,
  MdLocalPharmacy,
  MdHealthAndSafety,
} from "react-icons/md";

const THEME = {
  bgPage: "#FFE66D",
  cardBg: "#FFFFFF",
  textDark: "#111111",
  textMuted: "#5B5B5B",
  cyan: "#48D8FF",
  pink: "#FF5DD6",
  yellow: "#FFE66D",
  green: "#8BFF58",
  orange: "#FFB800",
  softYellow: "#FFF9C2",
};

const defaultObatItems = [
  { id: 1, name: "Paracetamol 500mg", kategori: "Obat Bebas", harga: "12000", status: "Tersedia", image: "" },
  { id: 2, name: "Amoxicillin 500mg", kategori: "Obat Resep", harga: "28000", status: "Tersedia", image: "" },
  { id: 3, name: "Vitamin C 1000mg", kategori: "Vitamin", harga: "35000", status: "Tersedia", image: "" },
  { id: 4, name: "Minyak Kayu Putih", kategori: "Perawatan", harga: "18000", status: "Habis", image: "" },
  { id: 5, name: "Antasida Tablet", kategori: "Obat Bebas", harga: "15000", status: "Tersedia", image: "" },
  { id: 6, name: "Masker Medis", kategori: "Alat Kesehatan", harga: "25000", status: "Tersedia", image: "" },
];

const kategoriList = [
  "Semua",
  "Obat Bebas",
  "Obat Resep",
  "Vitamin",
  "Perawatan",
  "Alat Kesehatan",
];

const categoryColor = {
  "Obat Bebas": THEME.cyan,
  "Obat Resep": THEME.pink,
  Vitamin: THEME.yellow,
  Perawatan: THEME.green,
  "Alat Kesehatan": THEME.orange,
};

export default function MenuMakanan() {
  const [menu, setMenu] = useState(defaultObatItems);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterKategori, setFilterKategori] = useState("Semua");

  const { isOpen: isFormOpen, onOpen: onFormOpen, onClose: onFormClose } = useDisclosure();
  const { isOpen: isAlertOpen, onOpen: onAlertOpen, onClose: onAlertClose } = useDisclosure();

  const cancelRef = useRef();
  const toast = useToast();

  const [currentEdit, setCurrentEdit] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    kategori: "Obat Bebas",
    harga: "",
    status: "Tersedia",
    image: "",
  });

  const inputStyle = {
    bg: THEME.cardBg,
    color: THEME.textDark,
    border: "3px solid #111",
    borderRadius: "14px",
    fontWeight: "900",
    boxShadow: "4px 4px 0 #111",
    _focus: {
      borderColor: "#111",
      boxShadow: `6px 6px 0 ${THEME.cyan}`,
    },
  };

  const filteredMenu = menu.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCat = filterKategori === "Semua" || item.kategori === filterKategori;
    return matchSearch && matchCat;
  });

  const stats = {
    total: menu.length,
    tersedia: menu.filter((m) => m.status === "Tersedia").length,
    habis: menu.filter((m) => m.status === "Habis").length,
  };

  const handleOpenForm = (item = null) => {
    if (item) {
      setCurrentEdit(item.id);
      setFormData({
        name: item.name,
        kategori: item.kategori,
        harga: item.harga,
        status: item.status,
        image: item.image || "",
      });
    } else {
      setCurrentEdit(null);
      setFormData({
        name: "",
        kategori: "Obat Bebas",
        harga: "",
        status: "Tersedia",
        image: "",
      });
    }

    onFormOpen();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFormData((prev) => ({ ...prev, image: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!formData.name || !formData.harga) {
      toast({
        title: "Data belum lengkap",
        description: "Nama produk dan harga wajib diisi.",
        status: "error",
      });
      return;
    }

    if (currentEdit) {
      setMenu(menu.map((m) => (m.id === currentEdit ? { ...m, ...formData } : m)));
      toast({ title: "Berhasil", description: "Produk apotek berhasil diperbarui.", status: "success" });
    } else {
      setMenu([{ id: Date.now(), ...formData }, ...menu]);
      toast({ title: "Berhasil", description: "Produk apotek baru ditambahkan.", status: "success" });
    }

    onFormClose();
  };

  const confirmDelete = (item) => {
    setDeleteTarget(item);
    onAlertOpen();
  };

  const handleDelete = () => {
    setMenu(menu.filter((m) => m.id !== deleteTarget.id));
    onAlertClose();
    toast({ title: "Dihapus", description: "Produk apotek berhasil dihapus.", status: "info" });
  };

  const formatIDR = (val) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(val);
  };

  return (
    <Box
      bg={THEME.bgPage}
      minH="100vh"
      px={{ base: "16px", md: "24px" }}
      pt={{ base: "135px", md: "140px", xl: "145px" }}
      pb="70px"
      position="relative"
      overflow="hidden"
      fontFamily="'Inter', sans-serif"
    >
      <Box
        position="absolute"
        inset="0"
        opacity="0.09"
        bgImage="linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)"
        bgSize="28px 28px"
        pointerEvents="none"
      />

      <Box position="relative" zIndex="1">
        <PageHeader title="PRODUK APOTEK" breadcrumb={["Manajemen", "Apotek"]}>
          <Flex gap="12px" wrap="wrap">
            <InputGroup w={{ base: "100%", md: "290px" }}>
              <InputLeftElement h="100%" pl="5px" pointerEvents="none">
                <Flex
                  w="34px"
                  h="34px"
                  align="center"
                  justify="center"
                  bg={THEME.cyan}
                  border="3px solid #111"
                  borderRadius="12px"
                  boxShadow="3px 3px 0 #111"
                >
                  <MdSearch color="#111" size="19px" />
                </Flex>
              </InputLeftElement>

              <Input
                placeholder="Cari produk obat..."
                bg={THEME.cardBg}
                border="3px solid #111"
                borderRadius="18px"
                boxShadow="5px 5px 0 #111"
                fontWeight="900"
                fontSize="14px"
                h="54px"
                pl="54px"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                _placeholder={{ color: THEME.textMuted, fontWeight: "800" }}
                _hover={{
                  bg: THEME.softYellow,
                  transform: "translate(-2px, -2px)",
                  boxShadow: "7px 7px 0 #111",
                }}
                _focus={{
                  borderColor: "#111",
                  boxShadow: `8px 8px 0 ${THEME.cyan}`,
                }}
              />
            </InputGroup>

            <Button
              leftIcon={<MdAdd />}
              bg={THEME.cyan}
              color="#111"
              border="3px solid #111"
              borderRadius="18px"
              boxShadow="5px 5px 0 #111"
              fontWeight="900"
              textTransform="uppercase"
              h="54px"
              onClick={() => handleOpenForm()}
              _hover={{
                bg: THEME.pink,
                transform: "translate(-2px, -2px)",
                boxShadow: "7px 7px 0 #111",
              }}
              _active={{
                bg: THEME.yellow,
                transform: "translate(2px, 2px)",
                boxShadow: "2px 2px 0 #111",
              }}
            >
              Tambah Produk
            </Button>
          </Flex>
        </PageHeader>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px" mb="24px">
          {[
            { label: "Total Produk", value: stats.total, color: THEME.cyan, icon: MdLocalPharmacy },
            { label: "Stok Tersedia", value: stats.tersedia, color: THEME.green, icon: MdHealthAndSafety },
            { label: "Stok Habis", value: stats.habis, color: THEME.pink, icon: MdMedication },
          ].map((item, i) => (
            <Box
              key={i}
              bg={THEME.cardBg}
              border="4px solid #111"
              borderRadius="20px"
              boxShadow="7px 7px 0 #111"
              p="20px"
            >
              <Flex align="center" gap="14px">
                <Flex
                  w="54px"
                  h="54px"
                  align="center"
                  justify="center"
                  bg={item.color}
                  border="3px solid #111"
                  borderRadius="16px"
                  boxShadow="3px 3px 0 #111"
                >
                  <item.icon size="28px" />
                </Flex>
                <Stat>
                  <StatLabel fontWeight="900" color={THEME.textMuted}>
                    {item.label}
                  </StatLabel>
                  <StatNumber color={THEME.textDark} fontWeight="900">
                    {item.value}
                  </StatNumber>
                </Stat>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>

        <HStack spacing={3} mb="24px" wrap="wrap">
          {kategoriList.map((cat) => (
            <Tag
              key={cat}
              size="lg"
              bg={filterKategori === cat ? THEME.pink : THEME.cardBg}
              color="#111"
              border="3px solid #111"
              borderRadius="14px"
              boxShadow="4px 4px 0 #111"
              cursor="pointer"
              fontWeight="900"
              px="14px"
              py="8px"
              onClick={() => setFilterKategori(cat)}
              _hover={{
                bg: filterKategori === cat ? THEME.pink : THEME.cyan,
                transform: "translate(-2px, -2px)",
                boxShadow: "6px 6px 0 #111",
              }}
            >
              <TagLabel>{cat}</TagLabel>
            </Tag>
          ))}
        </HStack>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap="24px">
          {filteredMenu.map((item) => (
            <Box
              key={item.id}
              bg={THEME.cardBg}
              border="4px solid #111"
              borderRadius="24px"
              boxShadow="8px 8px 0 #111"
              overflow="hidden"
              transition="all 0.18s ease"
              _hover={{
                transform: "translate(-2px, -2px)",
                boxShadow: "10px 10px 0 #111",
              }}
            >
              <Box
                h="190px"
                bg={THEME.softYellow}
                position="relative"
                borderBottom="4px solid #111"
              >
                {item.image ? (
                  <Image src={item.image} w="100%" h="100%" objectFit="cover" />
                ) : (
                  <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    color="#111"
                    fontWeight="900"
                  >
                    <MdPhotoSizeSelectActual size="42px" />
                    <Text fontSize="xs" mt="2" fontWeight="900">
                      Foto Produk
                    </Text>
                  </Flex>
                )}

                <Badge
                  position="absolute"
                  top="12px"
                  right="12px"
                  bg={item.status === "Tersedia" ? THEME.green : THEME.pink}
                  color="#111"
                  border="3px solid #111"
                  borderRadius="12px"
                  px="12px"
                  py="4px"
                  fontWeight="900"
                  boxShadow="4px 4px 0 #111"
                >
                  {item.status}
                </Badge>
              </Box>

              <Box p="20px">
                <Flex justify="space-between" align="start" gap="12px" mb="14px">
                  <Box>
                    <Text fontWeight="900" color="#111" fontSize="lg">
                      {item.name}
                    </Text>

                    <Badge
                      bg={categoryColor[item.kategori]}
                      color="#111"
                      border="2px solid #111"
                      borderRadius="10px"
                      px="10px"
                      py="2px"
                      mt="2"
                      fontWeight="900"
                      boxShadow="3px 3px 0 #111"
                    >
                      {item.kategori}
                    </Badge>
                  </Box>

                  <Text fontWeight="900" color="#111" fontSize="lg">
                    {formatIDR(item.harga)}
                  </Text>
                </Flex>

                <Flex justify="flex-end">
                  <HStack>
                    <IconButton
                      size="sm"
                      icon={<MdEdit />}
                      bg={THEME.yellow}
                      border="3px solid #111"
                      borderRadius="12px"
                      boxShadow="4px 4px 0 #111"
                      onClick={() => handleOpenForm(item)}
                      aria-label="Edit produk"
                    />

                    <IconButton
                      size="sm"
                      icon={<MdDeleteOutline />}
                      bg={THEME.pink}
                      border="3px solid #111"
                      borderRadius="12px"
                      boxShadow="4px 4px 0 #111"
                      onClick={() => confirmDelete(item)}
                      aria-label="Hapus produk"
                    />
                  </HStack>
                </Flex>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        <Modal isOpen={isFormOpen} onClose={onFormClose} isCentered size="md">
          <ModalOverlay bg="rgba(17,17,17,0.55)" backdropFilter="blur(5px)" />
          <ModalContent
            bg={THEME.softYellow}
            border="4px solid #111"
            borderRadius="24px"
            boxShadow="10px 10px 0 #111"
          >
            <ModalHeader fontWeight="900">
              {currentEdit ? "Edit Produk Apotek" : "Tambah Produk Apotek"}
            </ModalHeader>
            <ModalCloseButton
              bg={THEME.pink}
              border="3px solid #111"
              borderRadius="12px"
              boxShadow="3px 3px 0 #111"
            />

            <ModalBody>
              <FormControl mb="4">
                <FormLabel fontWeight="900">Foto Produk</FormLabel>
                <Input type="file" p="1" accept="image/*" onChange={handleFileChange} {...inputStyle} />
                {formData.image && (
                  <Image
                    src={formData.image}
                    mt="3"
                    borderRadius="14px"
                    h="100px"
                    objectFit="cover"
                    border="3px solid #111"
                  />
                )}
              </FormControl>

              <FormControl mb="4">
                <FormLabel fontWeight="900">Nama Produk</FormLabel>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  {...inputStyle}
                />
              </FormControl>

              <FormControl mb="4">
                <FormLabel fontWeight="900">Harga</FormLabel>
                <Input
                  type="number"
                  value={formData.harga}
                  onChange={(e) => setFormData({ ...formData, harga: e.target.value })}
                  {...inputStyle}
                />
              </FormControl>

              <SimpleGrid columns={2} gap="4">
                <FormControl>
                  <FormLabel fontWeight="900">Kategori</FormLabel>
                  <Select
                    value={formData.kategori}
                    onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                    {...inputStyle}
                  >
                    <option value="Obat Bebas">Obat Bebas</option>
                    <option value="Obat Resep">Obat Resep</option>
                    <option value="Vitamin">Vitamin</option>
                    <option value="Perawatan">Perawatan</option>
                    <option value="Alat Kesehatan">Alat Kesehatan</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight="900">Status</FormLabel>
                  <Select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    {...inputStyle}
                  >
                    <option value="Tersedia">Tersedia</option>
                    <option value="Habis">Habis</option>
                  </Select>
                </FormControl>
              </SimpleGrid>
            </ModalBody>

            <ModalFooter>
              <Button
                onClick={onFormClose}
                bg={THEME.cardBg}
                border="3px solid #111"
                borderRadius="14px"
                boxShadow="4px 4px 0 #111"
                fontWeight="900"
              >
                Batal
              </Button>
              <Button
                bg={THEME.cyan}
                ml={3}
                onClick={handleSave}
                border="3px solid #111"
                borderRadius="14px"
                boxShadow="4px 4px 0 #111"
                fontWeight="900"
              >
                Simpan
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <AlertDialog
          isOpen={isAlertOpen}
          leastDestructiveRef={cancelRef}
          onClose={onAlertClose}
          isCentered
        >
          <AlertDialogOverlay bg="rgba(17,17,17,0.55)" backdropFilter="blur(5px)">
            <AlertDialogContent
              bg={THEME.softYellow}
              border="4px solid #111"
              borderRadius="24px"
              boxShadow="10px 10px 0 #111"
            >
              <AlertDialogHeader fontWeight="900">Hapus Produk</AlertDialogHeader>

              <AlertDialogBody fontWeight="800">
                Yakin ingin menghapus produk apotek ini?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button
                  ref={cancelRef}
                  onClick={onAlertClose}
                  bg={THEME.cardBg}
                  border="3px solid #111"
                  borderRadius="14px"
                  boxShadow="4px 4px 0 #111"
                  fontWeight="900"
                >
                  Batal
                </Button>
                <Button
                  bg={THEME.pink}
                  onClick={handleDelete}
                  ml={3}
                  border="3px solid #111"
                  borderRadius="14px"
                  boxShadow="4px 4px 0 #111"
                  fontWeight="900"
                >
                  Hapus
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    </Box>
  );
}
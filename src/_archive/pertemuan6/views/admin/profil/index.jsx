import React, { useMemo, useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Badge,
  Button,
  Avatar,
  Flex,
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
  InputGroup,
  InputLeftElement,
  IconButton,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Text,
} from "@chakra-ui/react";
import PageHeader from "components/pageHeader/PageHeader.jsx";
import { MdPersonAdd, MdSearch, MdDeleteOutline } from "react-icons/md";

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

const initialPatients = [
  {
    id: "#APT-2001",
    patientName: "Rina Amelia",
    email: "rina@email.com",
    phone: "081234567890",
    category: "Umum",
  },
  {
    id: "#APT-2002",
    patientName: "Budi Santoso",
    email: "budi@email.com",
    phone: "082222111000",
    category: "BPJS",
  },
  {
    id: "#APT-2003",
    patientName: "Siti Nurhaliza",
    email: "siti@email.com",
    phone: "083333444555",
    category: "Member",
  },
];

const categoryColor = {
  Umum: THEME.cyan,
  BPJS: THEME.green,
  Member: THEME.yellow,
};

export default function DaftarPasienApotek() {
  const [patients, setPatients] = useState(initialPatients);
  const [searchQuery, setSearchQuery] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [newPatientData, setNewPatientData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Umum",
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

  const filteredPatients = useMemo(() => {
    return patients.filter((patient) => {
      const keyword = searchQuery.toLowerCase();

      return (
        patient.patientName.toLowerCase().includes(keyword) ||
        patient.email.toLowerCase().includes(keyword) ||
        patient.id.toLowerCase().includes(keyword) ||
        patient.phone.toLowerCase().includes(keyword)
      );
    });
  }, [searchQuery, patients]);

  const stats = useMemo(
    () => ({
      total: patients.length,
      bpjs: patients.filter((p) => p.category === "BPJS").length,
      member: patients.filter((p) => p.category === "Member").length,
    }),
    [patients]
  );

  const handleAdd = () => {
    if (!newPatientData.name || !newPatientData.email) {
      toast({
        title: "Data belum lengkap",
        description: "Nama dan email wajib diisi.",
        status: "error",
      });
      return;
    }

    const newPatient = {
      id: `#APT-${2000 + patients.length + 1}`,
      patientName: newPatientData.name,
      email: newPatientData.email,
      phone: newPatientData.phone,
      category: newPatientData.category,
    };

    setPatients([newPatient, ...patients]);

    setNewPatientData({
      name: "",
      email: "",
      phone: "",
      category: "Umum",
    });

    onClose();

    toast({
      title: "Berhasil",
      description: "Data pasien/member apotek ditambahkan.",
      status: "success",
    });
  };

  const handleDelete = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id));

    toast({
      title: "Dihapus",
      description: "Data pasien/member berhasil dihapus.",
      status: "warning",
    });
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
        <PageHeader
          title="DAFTAR PASIEN APOTEK"
          breadcrumb={["Manajemen", "Pasien"]}
        >
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
                placeholder="Cari pasien..."
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
              leftIcon={<MdPersonAdd />}
              bg={THEME.cyan}
              color="#111"
              border="3px solid #111"
              borderRadius="18px"
              boxShadow="5px 5px 0 #111"
              fontWeight="900"
              textTransform="uppercase"
              h="54px"
              onClick={onOpen}
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
              Tambah Pasien
            </Button>
          </Flex>
        </PageHeader>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px" mb="24px">
          {[
            { label: "Total Pasien", value: stats.total, color: THEME.cyan },
            { label: "Pasien BPJS", value: stats.bpjs, color: THEME.green },
            { label: "Member Apotek", value: stats.member, color: THEME.yellow },
          ].map((item, i) => (
            <Box
              key={i}
              bg={THEME.cardBg}
              border="4px solid #111"
              borderRadius="20px"
              boxShadow="7px 7px 0 #111"
              p="20px"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top="-22px"
                right="-18px"
                w="80px"
                h="80px"
                bg={item.color}
                border="4px solid #111"
                borderRadius="18px"
                transform="rotate(8deg)"
              />

              <Stat position="relative" zIndex="2">
                <StatLabel fontWeight="900" color={THEME.textMuted}>
                  {item.label}
                </StatLabel>
                <StatNumber color={THEME.textDark} fontWeight="900">
                  {item.value}
                </StatNumber>
              </Stat>
            </Box>
          ))}
        </SimpleGrid>

        <Box
          bg={THEME.cardBg}
          border="4px solid #111"
          borderRadius="24px"
          boxShadow="8px 8px 0 #111"
          overflow="hidden"
        >
          <TableContainer>
            <Table variant="simple">
              <Thead bg={THEME.softYellow}>
                <Tr>
                  {["ID", "Nama", "Email", "Telepon", "Kategori", "Aksi"].map(
                    (head) => (
                      <Th
                        key={head}
                        color="#111"
                        borderColor="#111"
                        fontWeight="900"
                        fontSize="12px"
                      >
                        {head}
                      </Th>
                    )
                  )}
                </Tr>
              </Thead>

              <Tbody>
                {filteredPatients.map((patient) => (
                  <Tr key={patient.id} _hover={{ bg: THEME.softYellow }}>
                    <Td borderColor="#111" fontWeight="900" color="#111">
                      {patient.id}
                    </Td>

                    <Td borderColor="#111">
                      <Flex align="center">
                        <Avatar
                          size="sm"
                          name={patient.patientName}
                          me="10px"
                          bg={categoryColor[patient.category]}
                          color="#111"
                          border="2px solid #111"
                          fontWeight="900"
                        />
                        <Popover trigger="click" placement="bottom-start">
                          <PopoverTrigger>
                            <Text
                              color="#111"
                              fontWeight="900"
                              cursor="pointer"
                              textDecoration="underline"
                              textDecorationStyle="dashed"
                              textDecorationColor="#111"
                              _hover={{ color: THEME.pink }}
                            >
                              {patient.patientName}
                            </Text>
                          </PopoverTrigger>
                          <PopoverContent
                            bg={THEME.cardBg}
                            border="3px solid #111"
                            boxShadow="4px 4px 0 #111"
                            borderRadius="14px"
                            p="4"
                            zIndex="popover"
                          >
                            <PopoverArrow border="1px solid #111" bg={THEME.cardBg} />
                            <PopoverCloseButton border="2px solid #111" borderRadius="8px" bg={THEME.pink} size="sm" />
                            <PopoverHeader borderBottom="2px solid #111" fontWeight="900" pb="2" fontSize="sm" color={THEME.textDark}>
                              PROFIL PASIEN
                            </PopoverHeader>
                            <PopoverBody pt="3" px="0">
                              <Text fontSize="xs" fontWeight="900" color={THEME.textMuted} mb="1">ID PASIEN</Text>
                              <Text fontSize="sm" fontWeight="800" color={THEME.textDark} mb="3">{patient.id}</Text>

                              <Text fontSize="xs" fontWeight="900" color={THEME.textMuted} mb="1">KONTAK</Text>
                              <Text fontSize="sm" fontWeight="800" color={THEME.textDark} mb="1">{patient.email}</Text>
                              <Text fontSize="sm" fontWeight="800" color={THEME.textDark} mb="3">{patient.phone}</Text>

                              <Text fontSize="xs" fontWeight="900" color={THEME.textMuted} mb="1">KATEGORI</Text>
                              <Badge
                                bg={categoryColor[patient.category]}
                                color="#111"
                                border="2px solid #111"
                                borderRadius="8px"
                                px="8px"
                                py="2px"
                                fontWeight="900"
                              >
                                {patient.category}
                              </Badge>

                              <Text fontSize="xs" fontWeight="900" color={THEME.textMuted} mt="3" mb="1">CATATAN MEDIS</Text>
                              <Text fontSize="xs" fontWeight="800" color={THEME.textDark}>
                                {patient.category === "BPJS" ? "Verifikasi rujukan aktif. Riwayat Alergi: N/A." : 
                                 patient.category === "Member" ? "Member loyal apotek. Berhak mendapat diskon obat resep 10%." : 
                                 "Pasien umum. Pembayaran tunai / e-wallet."}
                              </Text>
                            </PopoverBody>
                          </PopoverContent>
                        </Popover>
                      </Flex>
                    </Td>

                    <Td borderColor="#111" color="#111" fontWeight="800">
                      {patient.email}
                    </Td>

                    <Td borderColor="#111" color="#111" fontWeight="800">
                      {patient.phone}
                    </Td>

                    <Td borderColor="#111">
                      <Badge
                        bg={categoryColor[patient.category]}
                        color="#111"
                        border="2px solid #111"
                        borderRadius="12px"
                        px="10px"
                        py="4px"
                        fontWeight="900"
                        boxShadow="3px 3px 0 #111"
                      >
                        {patient.category}
                      </Badge>
                    </Td>

                    <Td borderColor="#111">
                      <IconButton
                        icon={<MdDeleteOutline />}
                        bg={THEME.pink}
                        border="3px solid #111"
                        borderRadius="12px"
                        boxShadow="4px 4px 0 #111"
                        onClick={() => handleDelete(patient.id)}
                        aria-label="Hapus pasien"
                        _hover={{
                          bg: THEME.orange,
                          transform: "translate(-2px, -2px)",
                          boxShadow: "6px 6px 0 #111",
                        }}
                        _active={{
                          transform: "translate(2px, 2px)",
                          boxShadow: "2px 2px 0 #111",
                        }}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay bg="rgba(17,17,17,0.55)" backdropFilter="blur(5px)" />

          <ModalContent
            bg={THEME.softYellow}
            border="4px solid #111"
            borderRadius="24px"
            boxShadow="10px 10px 0 #111"
          >
            <ModalHeader fontWeight="900">Tambah Pasien Apotek</ModalHeader>

            <ModalCloseButton
              bg={THEME.pink}
              border="3px solid #111"
              borderRadius="12px"
              boxShadow="3px 3px 0 #111"
            />

            <ModalBody>
              <FormControl mb="4">
                <FormLabel fontWeight="900">Nama</FormLabel>
                <Input
                  value={newPatientData.name}
                  onChange={(e) =>
                    setNewPatientData({
                      ...newPatientData,
                      name: e.target.value,
                    })
                  }
                  {...inputStyle}
                />
              </FormControl>

              <FormControl mb="4">
                <FormLabel fontWeight="900">Email</FormLabel>
                <Input
                  value={newPatientData.email}
                  onChange={(e) =>
                    setNewPatientData({
                      ...newPatientData,
                      email: e.target.value,
                    })
                  }
                  {...inputStyle}
                />
              </FormControl>

              <FormControl mb="4">
                <FormLabel fontWeight="900">No. Telepon</FormLabel>
                <Input
                  value={newPatientData.phone}
                  onChange={(e) =>
                    setNewPatientData({
                      ...newPatientData,
                      phone: e.target.value,
                    })
                  }
                  {...inputStyle}
                />
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="900">Kategori Pasien</FormLabel>
                <Select
                  value={newPatientData.category}
                  onChange={(e) =>
                    setNewPatientData({
                      ...newPatientData,
                      category: e.target.value,
                    })
                  }
                  {...inputStyle}
                >
                  <option value="Umum">Umum</option>
                  <option value="BPJS">BPJS</option>
                  <option value="Member">Member</option>
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                onClick={onClose}
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
                onClick={handleAdd}
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
      </Box>
    </Box>
  );
}
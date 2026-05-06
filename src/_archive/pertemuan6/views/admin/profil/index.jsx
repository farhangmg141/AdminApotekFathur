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
  Text,
} from "@chakra-ui/react";
import PageHeader from "components/pageHeader/PageHeader.jsx";
import { MdPersonAdd, MdSearch, MdDeleteOutline } from "react-icons/md";

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
  Umum: "#4D96FF",
  BPJS: "#6BCB77",
  Member: "#FFD93D",
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
    bg="#E9FFF3"
    minH="100vh"
    px={{ base: "16px", md: "24px" }}
    pt={{ base: "135px", md: "140px", xl: "145px" }}
    pb="70px"
    position="relative"
    overflow="hidden"
  >
      <PageHeader title="Daftar Pasien Apotek" breadcrumb={["Manajemen", "Pasien"]}>
        <Flex gap="12px" wrap="wrap">
          <InputGroup w={{ base: "100%", md: "280px" }}>
            <InputLeftElement>
              <MdSearch color="#111" />
            </InputLeftElement>

            <Input
              placeholder="Cari pasien..."
              bg="#FFFFFF"
              border="3px solid #111"
              borderRadius="16px"
              boxShadow="5px 5px 0 #111"
              fontWeight="800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </InputGroup>

          <Button
            leftIcon={<MdPersonAdd />}
            bg="#4ECDC4"
            color="#111"
            border="3px solid #111"
            borderRadius="16px"
            boxShadow="5px 5px 0 #111"
            fontWeight="900"
            onClick={onOpen}
          >
            Tambah Pasien
          </Button>
        </Flex>
      </PageHeader>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px" mb="24px">
        <Box bg="#FFFFFF" border="4px solid #111" borderRadius="22px" boxShadow="8px 8px 0 #111" p="20px">
          <Stat>
            <StatLabel fontWeight="900" color="#555">
              Total Pasien
            </StatLabel>
            <StatNumber color="#111">{stats.total}</StatNumber>
          </Stat>
        </Box>

        <Box bg="#FFFFFF" border="4px solid #111" borderRadius="22px" boxShadow="8px 8px 0 #111" p="20px">
          <Stat>
            <StatLabel fontWeight="900" color="#555">
              Pasien BPJS
            </StatLabel>
            <StatNumber color="#111">{stats.bpjs}</StatNumber>
          </Stat>
        </Box>

        <Box bg="#FFFFFF" border="4px solid #111" borderRadius="22px" boxShadow="8px 8px 0 #111" p="20px">
          <Stat>
            <StatLabel fontWeight="900" color="#555">
              Member Apotek
            </StatLabel>
            <StatNumber color="#111">{stats.member}</StatNumber>
          </Stat>
        </Box>
      </SimpleGrid>

      <Box
        bg="#FFFFFF"
        border="4px solid #111"
        borderRadius="24px"
        boxShadow="10px 10px 0 #111"
        overflow="hidden"
      >
        <TableContainer>
          <Table variant="simple">
            <Thead bg="#DFF7EA">
              <Tr>
                <Th color="#111" borderColor="#111">ID</Th>
                <Th color="#111" borderColor="#111">Nama</Th>
                <Th color="#111" borderColor="#111">Email</Th>
                <Th color="#111" borderColor="#111">Telepon</Th>
                <Th color="#111" borderColor="#111">Kategori</Th>
                <Th color="#111" borderColor="#111">Aksi</Th>
              </Tr>
            </Thead>

            <Tbody>
              {filteredPatients.map((patient) => (
                <Tr key={patient.id}>
                  <Td borderColor="#111" fontWeight="900" color="#111">
                    {patient.id}
                  </Td>

                  <Td borderColor="#111">
                    <Flex align="center">
                      <Avatar
                        size="sm"
                        name={patient.patientName}
                        me="10px"
                        border="2px solid #111"
                      />
                      <Text color="#111" fontWeight="900">
                        {patient.patientName}
                      </Text>
                    </Flex>
                  </Td>

                  <Td borderColor="#111" color="#111" fontWeight="700">
                    {patient.email}
                  </Td>

                  <Td borderColor="#111" color="#111" fontWeight="700">
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
                    >
                      {patient.category}
                    </Badge>
                  </Td>

                  <Td borderColor="#111">
                    <IconButton
                      icon={<MdDeleteOutline />}
                      bg="#FF6B6B"
                      border="3px solid #111"
                      borderRadius="12px"
                      boxShadow="4px 4px 0 #111"
                      onClick={() => handleDelete(patient.id)}
                      aria-label="Hapus pasien"
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay backdropFilter="blur(5px)" />

        <ModalContent border="4px solid #111" borderRadius="24px" boxShadow="10px 10px 0 #111">
          <ModalHeader fontWeight="900">Tambah Pasien Apotek</ModalHeader>
          <ModalCloseButton />

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
              >
                <option value="Umum">Umum</option>
                <option value="BPJS">BPJS</option>
                <option value="Member">Member</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Batal</Button>
            <Button bg="#4ECDC4" ml={3} onClick={handleAdd}>
              Simpan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
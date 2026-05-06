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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Select,
  useDisclosure,
  useToast,
  Flex,
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

import {
  MdAddCircleOutline,
  MdSearch,
  MdDeleteSweep,
  MdMedication,
  MdLocalPharmacy,
  MdInventory2,
} from "react-icons/md";

const statusColor = {
  Diproses: "#FFD93D",
  Selesai: "#6BCB77",
  Dibatalkan: "#FF6B6B",
};

const defaultOrders = [
  {
    id: "#APT-1001",
    patientName: "Rina Amelia",
    status: "Diproses",
    totalPrice: "85000",
    medicine: "Paracetamol + Vitamin C",
  },
  {
    id: "#APT-1002",
    patientName: "Budi Santoso",
    status: "Selesai",
    totalPrice: "120000",
    medicine: "Amoxicillin",
  },
  {
    id: "#APT-1003",
    patientName: "Siti Nurhaliza",
    status: "Diproses",
    totalPrice: "45000",
    medicine: "Masker + Hand Sanitizer",
  },
];

export default function TransaksiApotek() {
  const [orders, setOrders] = useState(defaultOrders);
  const [searchQuery, setSearchQuery] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [newOrderData, setNewOrderData] = useState({
    patientName: "",
    medicine: "",
    status: "Diproses",
    totalPrice: "",
  });

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const keyword = searchQuery.toLowerCase();

      return (
        order.patientName.toLowerCase().includes(keyword) ||
        order.id.toLowerCase().includes(keyword) ||
        order.medicine.toLowerCase().includes(keyword)
      );
    });
  }, [orders, searchQuery]);

  const stats = useMemo(
    () => ({
      total: orders.length,
      process: orders.filter((o) => o.status === "Diproses").length,
      done: orders.filter((o) => o.status === "Selesai").length,
    }),
    [orders]
  );

  const handleAddOrder = () => {
    if (
      !newOrderData.patientName ||
      !newOrderData.totalPrice ||
      !newOrderData.medicine
    ) {
      toast({
        title: "Data belum lengkap",
        description: "Lengkapi semua form transaksi.",
        status: "error",
      });
      return;
    }

    const newOrder = {
      id: `#APT-${1000 + orders.length + 1}`,
      patientName: newOrderData.patientName,
      status: newOrderData.status,
      totalPrice: newOrderData.totalPrice,
      medicine: newOrderData.medicine,
    };

    setOrders([newOrder, ...orders]);

    setNewOrderData({
      patientName: "",
      medicine: "",
      status: "Diproses",
      totalPrice: "",
    });

    onClose();

    toast({
      title: "Berhasil",
      description: "Transaksi apotek berhasil ditambahkan.",
      status: "success",
    });
  };

  const handleDelete = (id) => {
    setOrders(orders.filter((o) => o.id !== id));

    toast({
      title: "Dihapus",
      description: "Transaksi berhasil dihapus.",
      status: "warning",
    });
  };

  const formatIDR = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
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
      <PageHeader
        title="Transaksi Apotek"
        breadcrumb={["Manajemen", "Transaksi"]}
      >
        <Flex gap="12px" wrap="wrap">
          <InputGroup w={{ base: "100%", md: "280px" }}>
            <InputLeftElement>
              <MdSearch color="#111" />
            </InputLeftElement>

            <Input
              placeholder="Cari transaksi..."
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
            leftIcon={<MdAddCircleOutline />}
            bg="#4ECDC4"
            color="#111"
            border="3px solid #111"
            borderRadius="16px"
            boxShadow="5px 5px 0 #111"
            fontWeight="900"
            onClick={onOpen}
            _hover={{
              transform: "translate(-2px,-2px)",
              boxShadow: "7px 7px 0 #111",
            }}
          >
            Tambah Transaksi
          </Button>
        </Flex>
      </PageHeader>

      {/* Statistik */}
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px" mb="24px">
        <Box
          bg="#FFFFFF"
          border="4px solid #111"
          borderRadius="22px"
          boxShadow="8px 8px 0 #111"
          p="20px"
        >
          <Flex align="center" gap="14px">
            <Flex
              w="52px"
              h="52px"
              bg="#4D96FF"
              border="3px solid #111"
              borderRadius="16px"
              align="center"
              justify="center"
            >
              <MdLocalPharmacy size="28px" />
            </Flex>

            <Stat>
              <StatLabel fontWeight="900" color="#555">
                Total Transaksi
              </StatLabel>
              <StatNumber color="#111">{stats.total}</StatNumber>
            </Stat>
          </Flex>
        </Box>

        <Box
          bg="#FFFFFF"
          border="4px solid #111"
          borderRadius="22px"
          boxShadow="8px 8px 0 #111"
          p="20px"
        >
          <Flex align="center" gap="14px">
            <Flex
              w="52px"
              h="52px"
              bg="#FFD93D"
              border="3px solid #111"
              borderRadius="16px"
              align="center"
              justify="center"
            >
              <MdInventory2 size="28px" />
            </Flex>

            <Stat>
              <StatLabel fontWeight="900" color="#555">
                Diproses
              </StatLabel>
              <StatNumber color="#111">{stats.process}</StatNumber>
            </Stat>
          </Flex>
        </Box>

        <Box
          bg="#FFFFFF"
          border="4px solid #111"
          borderRadius="22px"
          boxShadow="8px 8px 0 #111"
          p="20px"
        >
          <Flex align="center" gap="14px">
            <Flex
              w="52px"
              h="52px"
              bg="#6BCB77"
              border="3px solid #111"
              borderRadius="16px"
              align="center"
              justify="center"
            >
              <MdMedication size="28px" />
            </Flex>

            <Stat>
              <StatLabel fontWeight="900" color="#555">
                Selesai
              </StatLabel>
              <StatNumber color="#111">{stats.done}</StatNumber>
            </Stat>
          </Flex>
        </Box>
      </SimpleGrid>

      {/* TABLE */}
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
                <Th borderColor="#111" color="#111">
                  ID
                </Th>

                <Th borderColor="#111" color="#111">
                  Pasien
                </Th>

                <Th borderColor="#111" color="#111">
                  Obat
                </Th>

                <Th borderColor="#111" color="#111">
                  Status
                </Th>

                <Th borderColor="#111" color="#111">
                  Total
                </Th>

                <Th borderColor="#111" color="#111">
                  Aksi
                </Th>
              </Tr>
            </Thead>

            <Tbody>
              {filteredOrders.map((order) => (
                <Tr key={order.id}>
                  <Td borderColor="#111" fontWeight="900" color="#111">
                    {order.id}
                  </Td>

                  <Td borderColor="#111" fontWeight="800" color="#111">
                    {order.patientName}
                  </Td>

                  <Td borderColor="#111" fontWeight="700" color="#111">
                    {order.medicine}
                  </Td>

                  <Td borderColor="#111">
                    <Badge
                      bg={statusColor[order.status]}
                      color="#111"
                      border="2px solid #111"
                      borderRadius="12px"
                      px="10px"
                      py="4px"
                      fontWeight="900"
                    >
                      {order.status}
                    </Badge>
                  </Td>

                  <Td borderColor="#111" fontWeight="900" color="#111">
                    {formatIDR(order.totalPrice)}
                  </Td>

                  <Td borderColor="#111">
                    <IconButton
                      size="sm"
                      icon={<MdDeleteSweep />}
                      bg="#FF6B6B"
                      border="3px solid #111"
                      borderRadius="12px"
                      boxShadow="4px 4px 0 #111"
                      onClick={() => handleDelete(order.id)}
                      aria-label="Hapus transaksi"
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      {/* MODAL */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay backdropFilter="blur(5px)" />

        <ModalContent
          border="4px solid #111"
          borderRadius="24px"
          boxShadow="10px 10px 0 #111"
        >
          <ModalHeader fontWeight="900">
            Tambah Transaksi Apotek
          </ModalHeader>

          <ModalBody>
            <FormControl mb="4">
              <FormLabel fontWeight="900">Nama Pasien</FormLabel>

              <Input
                value={newOrderData.patientName}
                onChange={(e) =>
                  setNewOrderData({
                    ...newOrderData,
                    patientName: e.target.value,
                  })
                }
              />
            </FormControl>

            <FormControl mb="4">
              <FormLabel fontWeight="900">Nama Obat</FormLabel>

              <Input
                value={newOrderData.medicine}
                onChange={(e) =>
                  setNewOrderData({
                    ...newOrderData,
                    medicine: e.target.value,
                  })
                }
              />
            </FormControl>

            <FormControl mb="4">
              <FormLabel fontWeight="900">Total Harga</FormLabel>

              <Input
                type="number"
                value={newOrderData.totalPrice}
                onChange={(e) =>
                  setNewOrderData({
                    ...newOrderData,
                    totalPrice: e.target.value,
                  })
                }
              />
            </FormControl>

            <FormControl>
              <FormLabel fontWeight="900">Status</FormLabel>

              <Select
                value={newOrderData.status}
                onChange={(e) =>
                  setNewOrderData({
                    ...newOrderData,
                    status: e.target.value,
                  })
                }
              >
                <option value="Diproses">Diproses</option>
                <option value="Selesai">Selesai</option>
                <option value="Dibatalkan">Dibatalkan</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Batal</Button>

            <Button bg="#4ECDC4" ml={3} onClick={handleAddOrder}>
              Simpan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
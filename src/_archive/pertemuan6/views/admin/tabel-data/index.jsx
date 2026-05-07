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

const statusColor = {
  Diproses: THEME.yellow,
  Selesai: THEME.green,
  Dibatalkan: THEME.pink,
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
          title="TRANSAKSI APOTEK"
          breadcrumb={["Manajemen", "Transaksi"]}
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
                placeholder="Cari transaksi..."
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
                _placeholder={{
                  color: THEME.textMuted,
                  fontWeight: "800",
                }}
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
              leftIcon={<MdAddCircleOutline />}
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
              Tambah Transaksi
            </Button>
          </Flex>
        </PageHeader>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px" mb="24px">
          {[
            {
              label: "Total Transaksi",
              value: stats.total,
              color: THEME.cyan,
              icon: MdLocalPharmacy,
            },
            {
              label: "Diproses",
              value: stats.process,
              color: THEME.yellow,
              icon: MdInventory2,
            },
            {
              label: "Selesai",
              value: stats.done,
              color: THEME.green,
              icon: MdMedication,
            },
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
                  bg={item.color}
                  border="3px solid #111"
                  borderRadius="16px"
                  boxShadow="3px 3px 0 #111"
                  align="center"
                  justify="center"
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
                  {["ID", "Pasien", "Obat", "Status", "Total", "Aksi"].map(
                    (head) => (
                      <Th
                        key={head}
                        borderColor="#111"
                        color="#111"
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
                {filteredOrders.map((order) => (
                  <Tr key={order.id} _hover={{ bg: THEME.softYellow }}>
                    <Td borderColor="#111" fontWeight="900" color="#111">
                      {order.id}
                    </Td>

                    <Td borderColor="#111" fontWeight="800" color="#111">
                      {order.patientName}
                    </Td>

                    <Td borderColor="#111" fontWeight="800" color="#111">
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
                        boxShadow="3px 3px 0 #111"
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
                        bg={THEME.pink}
                        border="3px solid #111"
                        borderRadius="12px"
                        boxShadow="4px 4px 0 #111"
                        onClick={() => handleDelete(order.id)}
                        aria-label="Hapus transaksi"
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
                  {...inputStyle}
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
                  {...inputStyle}
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
                  {...inputStyle}
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
                  {...inputStyle}
                >
                  <option value="Diproses">Diproses</option>
                  <option value="Selesai">Selesai</option>
                  <option value="Dibatalkan">Dibatalkan</option>
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
                onClick={handleAddOrder}
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
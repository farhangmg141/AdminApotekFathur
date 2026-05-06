import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Text,
  VStack,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { MdPerson, MdLock, MdLocalPharmacy } from "react-icons/md";
import axios from "axios";

const API_URL = "https://dummyjson.com/auth/login";

export default function Login() {
  const [dataForm, setDataForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const username = dataForm.username.trim();
    const password = dataForm.password.trim();

    if (!username || !password) {
      setError("Username dan password harus diisi.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        API_URL,
        {
          username,
          password,
          expiresInMins: 30,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const token = response.data.accessToken || response.data.token;

      if (!token) {
        setError("Login gagal. Token tidak ditemukan.");
        return;
      }

      localStorage.setItem("adminToken", token);
      localStorage.setItem("adminUser", JSON.stringify(response.data));

      navigate("/admin/beranda");
    } catch (err) {
      console.log("Login error:", err);

      if (err.response?.status === 400 || err.response?.status === 401) {
        setError("Username atau password salah.");
      } else if (err.code === "ERR_NETWORK") {
        setError("Koneksi gagal. Periksa internet atau endpoint API.");
      } else {
        setError("Login gagal. Silakan coba lagi.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box w="100%" maxW="430px" mx="auto">
      <Box
        bg="#FFFFFF"
        border="5px solid #111"
        borderRadius="28px"
        boxShadow="14px 14px 0 #111"
        p={{ base: "7", md: "9" }}
        position="relative"
        transform="rotate(-1deg)"
      >
        <Box
          position="absolute"
          top="-20px"
          right="24px"
          bg="#FF6B6B"
          color="#111"
          border="3px solid #111"
          boxShadow="5px 5px 0 #111"
          px="5"
          py="1"
          borderRadius="12px"
          fontWeight="900"
          fontSize="sm"
          transform="rotate(4deg)"
        >
          LOGIN
        </Box>

        <Flex direction="column" align="center" mb="8">
          <Flex
            align="center"
            justify="center"
            w="72px"
            h="72px"
            rounded="22px"
            bg="#4ECDC4"
            border="4px solid #111"
            boxShadow="7px 7px 0 #111"
            mb="5"
            transform="rotate(3deg)"
          >
            <Icon as={MdLocalPharmacy} w="32px" h="32px" color="#111" />
          </Flex>

          <Heading
            color="#111"
            fontSize="3xl"
            fontWeight="900"
            letterSpacing="-1px"
            mb="2"
            textAlign="center"
          >
            Admin Portal
          </Heading>

          <Text color="gray.700" fontSize="sm" fontWeight="700" textAlign="center">
            Akses dashboard manajemen apotek
          </Text>
        </Flex>

        <form onSubmit={handleSubmit}>
          <VStack spacing="5" align="stretch">
            {error && (
              <Box
                p="3"
                bg="#FFB3B3"
                color="#111"
                border="3px solid #111"
                borderRadius="16px"
                boxShadow="5px 5px 0 #111"
                textAlign="center"
                fontSize="sm"
                fontWeight="900"
              >
                {error}
              </Box>
            )}

            <FormControl>
              <FormLabel
                color="#111"
                ms="1"
                fontSize="xs"
                fontWeight="900"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Username
              </FormLabel>

              <InputGroup>
                <InputLeftElement pointerEvents="none" h="100%">
                  <Icon as={MdPerson} color="#111" w="5" h="5" />
                </InputLeftElement>

                <Input
                  type="text"
                  name="username"
                  value={dataForm.username}
                  onChange={handleChange}
                  placeholder="emilys"
                  bg="#F7F7F7"
                  border="3px solid #111"
                  color="#111"
                  fontWeight="800"
                  _placeholder={{ color: "gray.500" }}
                  _hover={{ bg: "#FFFFFF", boxShadow: "4px 4px 0 #111" }}
                  _focus={{
                    bg: "#FFFFFF",
                    borderColor: "#111",
                    boxShadow: "5px 5px 0 #111",
                  }}
                  borderRadius="16px"
                  h="54px"
                  transition="all 0.2s"
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <FormLabel
                color="#111"
                ms="1"
                fontSize="xs"
                fontWeight="900"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Kata Sandi
              </FormLabel>

              <InputGroup>
                <InputLeftElement pointerEvents="none" h="100%">
                  <Icon as={MdLock} color="#111" w="5" h="5" />
                </InputLeftElement>

                <Input
                  type="password"
                  name="password"
                  value={dataForm.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  bg="#F7F7F7"
                  border="3px solid #111"
                  color="#111"
                  fontWeight="800"
                  _placeholder={{ color: "gray.500", letterSpacing: "2px" }}
                  _hover={{ bg: "#FFFFFF", boxShadow: "4px 4px 0 #111" }}
                  _focus={{
                    bg: "#FFFFFF",
                    borderColor: "#111",
                    boxShadow: "5px 5px 0 #111",
                  }}
                  borderRadius="16px"
                  h="54px"
                  letterSpacing="2px"
                  transition="all 0.2s"
                />
              </InputGroup>
            </FormControl>

            <Button
              type="submit"
              bg="#4ECDC4"
              color="#111"
              h="56px"
              border="3px solid #111"
              borderRadius="16px"
              fontWeight="900"
              fontSize="md"
              isLoading={loading}
              loadingText="Memverifikasi..."
              boxShadow="7px 7px 0 #111"
              _hover={{
                bg: "#3FD9CF",
                transform: "translate(-3px, -3px)",
                boxShadow: "10px 10px 0 #111",
              }}
              _active={{
                transform: "translate(4px, 4px)",
                boxShadow: "3px 3px 0 #111",
              }}
              mt="4"
              transition="all 0.2s"
            >
              Masuk
            </Button>
          </VStack>
        </form>

        <Box mt="8" pt="6" borderTop="3px solid #111" textAlign="center">
          <Text fontSize="xs" color="#111" fontWeight="800">
            Demo:{" "}
            <Text as="span" bg="#FFE66D" px="2" py="1" border="2px solid #111">
              emilys
            </Text>
            {" / "}
            <Text as="span" bg="#FFE66D" px="2" py="1" border="2px solid #111">
              emilyspass
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
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
import {
  MdPerson,
  MdLock,
  MdHealing,
} from "react-icons/md";
import axios from "axios";

const API_URL = "https://dummyjson.com/auth/login";
const MOCK_LOGIN = true;

const THEME = {
  yellow: "#F5FF63",
  cyan: "#33DFFF",
  pink: "#FF4FD8",
  green: "#A7FF3D",
  orange: "#FF8A00",
  purple: "#C8A2FF",
  black: "#111111",
  white: "#FFFFFF",
  soft: "#FFFDEB",
  muted: "#666666",
};

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

    if (MOCK_LOGIN) {
      setTimeout(() => {
        if (username === "emilys" && password === "emilyspass") {
          const mockToken = "mock-token-12345";

          const mockUser = {
            id: 1,
            username: "emilys",
            email: "emily@example.com",
            firstName: "Emily",
            lastName: "Smith",
          };

          localStorage.setItem("adminToken", mockToken);
          localStorage.setItem("adminUser", JSON.stringify(mockUser));

          navigate("/admin/beranda");
        } else {
          setError(
            "Username atau password salah. (Demo: emilys / emilyspass)"
          );
        }

        setLoading(false);
      }, 1000);

      return;
    }

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
        setError(
          "Koneksi gagal. Aktifkan MOCK_LOGIN di Login.jsx untuk mode offline."
        );
      } else {
        setError("Login gagal. Silakan coba lagi.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box w="100%" maxW="390px" mx="auto" fontFamily="'Inter', sans-serif">
      <Box
        bg={THEME.white}
        border={`3px solid ${THEME.black}`}
        borderRadius="16px"
        boxShadow={`6px 6px 0 ${THEME.black}`}
        p={{ base: "24px", md: "28px" }}
        position="relative"
      >
        <Box
          position="absolute"
          top="14px"
          left="14px"
          right="14px"
          h="8px"
          bg={THEME.yellow}
          border={`3px solid ${THEME.black}`}
          borderRadius="999px"
        />

        <Box
          position="absolute"
          top="-12px"
          right="18px"
          bg={THEME.pink}
          color={THEME.black}
          border={`3px solid ${THEME.black}`}
          boxShadow={`3px 3px 0 ${THEME.black}`}
          px="12px"
          py="5px"
          borderRadius="10px"
          fontWeight="900"
          fontSize="11px"
          textTransform="uppercase"
        >
          Login
        </Box>

        <Flex direction="column" align="center" mb="28px" mt="8px">
          <Flex
            align="center"
            justify="center"
            w="68px"
            h="68px"
            bg={THEME.cyan}
            border={`3px solid ${THEME.black}`}
            borderRadius="14px"
            boxShadow={`4px 4px 0 ${THEME.black}`}
            mb="16px"
          >
            <Icon as={MdHealing} w="30px" h="30px" color={THEME.black} />
          </Flex>

          <Heading
            color={THEME.black}
            fontSize="30px"
            fontWeight="900"
            letterSpacing="-1.5px"
            mb="6px"
            textAlign="center"
            textTransform="uppercase"
            lineHeight="1"
          >
            Apotek Rustaf
          </Heading>

          <Text
            color={THEME.muted}
            fontSize="12px"
            fontWeight="800"
            textAlign="center"
          >
            Sistem Manajemen Apotek Modern
          </Text>
        </Flex>

        <form onSubmit={handleSubmit}>
          <VStack spacing="18px" align="stretch">
            {error && (
              <Box
                p="12px"
                bg="#FFD6D6"
                color={THEME.black}
                border={`3px solid ${THEME.black}`}
                borderRadius="12px"
                boxShadow={`3px 3px 0 ${THEME.black}`}
                textAlign="center"
                fontSize="12px"
                fontWeight="900"
              >
                {error}
              </Box>
            )}

            <FormControl>
              <FormLabel
                color={THEME.black}
                mb="8px"
                fontSize="11px"
                fontWeight="900"
                textTransform="uppercase"
                letterSpacing="1px"
              >
                Username
              </FormLabel>

              <InputGroup>
                <InputLeftElement h="100%" pl="5px">
                  <Flex
                    w="34px"
                    h="34px"
                    align="center"
                    justify="center"
                    bg={THEME.cyan}
                    border={`2px solid ${THEME.black}`}
                    borderRadius="10px"
                    boxShadow={`2px 2px 0 ${THEME.black}`}
                  >
                    <Icon as={MdPerson} color={THEME.black} w="16px" h="16px" />
                  </Flex>
                </InputLeftElement>

                <Input
                  type="text"
                  name="username"
                  value={dataForm.username}
                  onChange={handleChange}
                  placeholder="emilys"
                  bg={THEME.white}
                  border={`3px solid ${THEME.black}`}
                  color={THEME.black}
                  fontWeight="900"
                  fontSize="13px"
                  pl="52px"
                  h="48px"
                  borderRadius="12px"
                  boxShadow={`3px 3px 0 ${THEME.black}`}
                  _placeholder={{
                    color: "#888",
                    fontWeight: "800",
                  }}
                  _hover={{
                    bg: THEME.soft,
                  }}
                  _focus={{
                    bg: THEME.white,
                    borderColor: THEME.black,
                    boxShadow: `4px 4px 0 ${THEME.black}`,
                  }}
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <FormLabel
                color={THEME.black}
                mb="8px"
                fontSize="11px"
                fontWeight="900"
                textTransform="uppercase"
                letterSpacing="1px"
              >
                Password
              </FormLabel>

              <InputGroup>
                <InputLeftElement h="100%" pl="5px">
                  <Flex
                    w="34px"
                    h="34px"
                    align="center"
                    justify="center"
                    bg={THEME.yellow}
                    border={`2px solid ${THEME.black}`}
                    borderRadius="10px"
                    boxShadow={`2px 2px 0 ${THEME.black}`}
                  >
                    <Icon as={MdLock} color={THEME.black} w="16px" h="16px" />
                  </Flex>
                </InputLeftElement>

                <Input
                  type="password"
                  name="password"
                  value={dataForm.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  bg={THEME.white}
                  border={`3px solid ${THEME.black}`}
                  color={THEME.black}
                  fontWeight="900"
                  fontSize="13px"
                  pl="52px"
                  h="48px"
                  borderRadius="12px"
                  boxShadow={`3px 3px 0 ${THEME.black}`}
                  _placeholder={{
                    color: "#888",
                    letterSpacing: "2px",
                    fontWeight: "800",
                  }}
                  _hover={{
                    bg: THEME.soft,
                  }}
                  _focus={{
                    bg: THEME.white,
                    borderColor: THEME.black,
                    boxShadow: `4px 4px 0 ${THEME.black}`,
                  }}
                />
              </InputGroup>
            </FormControl>

            <Button
              type="submit"
              bg={THEME.cyan}
              color={THEME.black}
              h="50px"
              border={`3px solid ${THEME.black}`}
              borderRadius="12px"
              fontWeight="900"
              fontSize="13px"
              textTransform="uppercase"
              isLoading={loading}
              loadingText="Memverifikasi..."
              boxShadow={`4px 4px 0 ${THEME.black}`}
              _hover={{
                bg: THEME.pink,
                transform: "translate(-1px, -1px)",
                boxShadow: `5px 5px 0 ${THEME.black}`,
              }}
              _active={{
                transform: "translate(2px, 2px)",
                boxShadow: `1px 1px 0 ${THEME.black}`,
              }}
              mt="6px"
              transition="all 0.18s ease"
            >
              Masuk
            </Button>
          </VStack>
        </form>

        <Box
          mt="24px"
          pt="18px"
          borderTop={`3px solid ${THEME.black}`}
          textAlign="center"
        >
          <Text
            fontSize="11px"
            color={THEME.black}
            fontWeight="900"
            mb="10px"
          >
            Demo Login
          </Text>

          <Flex justify="center" gap="8px" wrap="wrap">
            <Box
              bg={THEME.yellow}
              px="10px"
              py="5px"
              border={`2px solid ${THEME.black}`}
              borderRadius="8px"
              fontSize="11px"
              fontWeight="900"
              boxShadow={`2px 2px 0 ${THEME.black}`}
            >
              emilys
            </Box>

            <Box
              bg={THEME.cyan}
              px="10px"
              py="5px"
              border={`2px solid ${THEME.black}`}
              borderRadius="8px"
              fontSize="11px"
              fontWeight="900"
              boxShadow={`2px 2px 0 ${THEME.black}`}
            >
              emilyspass
            </Box>
          </Flex>

          <Text
            fontSize="10px"
            color={THEME.muted}
            fontWeight="700"
            mt="14px"
          >
            © 2026 Apotek Rustaf
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
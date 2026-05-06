import './assets/css/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import React, { Suspense, lazy, useState } from 'react';

import AdminLayout from './_archive/pertemuan6/layouts/admin';
import { ChakraProvider, Flex, Spinner, Text, VStack, Box } from '@chakra-ui/react';
import initialTheme from './theme/theme';

// Layouts - Lazy Loaded
const MainLayout = lazy(() => import('./layouts/MainLayout.jsx'));
const AuthLayout = lazy(() => import('./layouts/AuthLayout.jsx'));

// Pages - Lazy Loaded
const LandingPage = lazy(() => import('./pages/LandingPage.jsx'));
const Login = lazy(() => import('./pages/auth/Login.jsx'));
const Register = lazy(() => import('./pages/auth/Register.jsx'));
const Forgot = lazy(() => import('./pages/auth/Forgot.jsx'));

// Loading Fallback dengan style Neo-Brutalism
const LoadingFallback = () => (
  <Flex minH="100vh" align="center" justify="center" bg="#FFE66D">
    <VStack spacing={6}>
      <Box
        w="80px"
        h="80px"
        bg="#FFFFFF"
        border="5px solid #111"
        borderRadius="20px"
        boxShadow="8px 8px 0 #111"
        display="flex"
        alignItems="center"
        justifyContent="center"
        animation="spin 1s linear infinite"
      >
        <Spinner thickness="5px" speed="0.65s" emptyColor="#E2E8F0" color="#FF6B6B" size="lg" />
      </Box>
      <Text color="#111" fontWeight="900" fontSize="md" letterSpacing="widest" textTransform="uppercase">
        Memuat Aplikasi...
      </Text>
    </VStack>
  </Flex>
);

export default function Main() {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  return (
    <ChakraProvider theme={currentTheme}>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Main Layout - Landing Page */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<LandingPage />} />
          </Route>

          {/* Auth Layout - Login/Register/Forgot */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
          </Route>

          {/* Admin Layout - Dashboard */}
          <Route
            path="admin/*"
            element={<AdminLayout theme={currentTheme} setTheme={setCurrentTheme} />}
          />

          {/* Redirect unknown routes to landing page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </ChakraProvider>
  );
}

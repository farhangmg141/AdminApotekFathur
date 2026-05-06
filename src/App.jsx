import './assets/css/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import React, { Suspense, lazy, useState } from 'react';

import AdminLayout from './pertemuan6/layouts/admin';
import { ChakraProvider, Flex, Spinner, Text, VStack } from '@chakra-ui/react';
import initialTheme from './theme/theme';

const AuthLayout = lazy(() => import('./layouts/AuthLayout.jsx'));

const Login = lazy(() => import('./pages/auth/Login.jsx'));
const Register = lazy(() => import('./pages/auth/Register.jsx'));
const Forgot = lazy(() => import('./pages/auth/Forgot.jsx'));

const LoadingFallback = () => (
  <Flex minH="100vh" align="center" justify="center" bg="#f8fafc">
    <VStack spacing={6}>
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.600" size="xl" />
      <Text color="gray.500" fontWeight="600" fontSize="sm" letterSpacing="widest" textTransform="uppercase">
        Menyiapkan Ruang Kerja
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
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
          </Route>

          <Route
            path="admin/*"
            element={<AdminLayout theme={currentTheme} setTheme={setCurrentTheme} />}
          />

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Suspense>
    </ChakraProvider>
  );
}

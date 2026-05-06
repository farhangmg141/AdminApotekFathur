import React, { useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "../pertemuan 7/CountUp.jsx";

const MotionFlex = motion(Flex);

export default function AuthLayout() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="#FFE66D"
      position="relative"
      p={{ base: 4, md: 8 }}
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset="0"
        opacity="0.25"
        bgImage="linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)"
        bgSize="32px 32px"
      />

      <Box
        position="absolute"
        top="8%"
        left="8%"
        w="90px"
        h="90px"
        bg="#FF6B6B"
        border="4px solid #111"
        boxShadow="8px 8px 0 #111"
        transform="rotate(-8deg)"
      />

      <Box
        position="absolute"
        bottom="10%"
        right="8%"
        w="120px"
        h="70px"
        bg="#4ECDC4"
        border="4px solid #111"
        boxShadow="8px 8px 0 #111"
        transform="rotate(6deg)"
      />

      <AnimatePresence mode="wait">
        {showSplash ? (
          <MotionFlex
            key="splash"
            direction="column"
            align="center"
            justify="center"
            zIndex="10"
            bg="#fff"
            border="5px solid #111"
            borderRadius="2xl"
            boxShadow="12px 12px 0 #111"
            px={{ base: 6, md: 12 }}
            py={{ base: 10, md: 14 }}
            textAlign="center"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <Box
              bg="#FF6B6B"
              border="3px solid #111"
              boxShadow="5px 5px 0 #111"
              px="4"
              py="1"
              mb="6"
              fontWeight="900"
              borderRadius="md"
            >
              AUTH SYSTEM
            </Box>

            <Heading
              fontSize={{ base: "4xl", md: "7xl" }}
              fontWeight="900"
              color="#111"
              mb="6"
            >
              Selamat Datang
            </Heading>

            <Flex
              align="center"
              bg="#4ECDC4"
              border="4px solid #111"
              boxShadow="7px 7px 0 #111"
              px="8"
              py="3"
              borderRadius="xl"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="900"
            >
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={2}
                delay={0.2}
                onEnd={() => setTimeout(() => setShowSplash(false), 600)}
              />
              <Text ml="1">%</Text>
            </Flex>
          </MotionFlex>
        ) : (
          <MotionFlex
            key="content"
            align="center"
            justify="center"
            zIndex="2"
            w="100%"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Outlet />
          </MotionFlex>
        )}
      </AnimatePresence>
    </Flex>
  );
}
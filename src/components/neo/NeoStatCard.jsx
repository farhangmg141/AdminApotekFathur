import React from "react";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { MdTrendingUp, MdTrendingDown, MdTrendingFlat } from "react-icons/md";

/**
 * NeoStatCard — Kartu statistik Neo-Brutalism dengan indikator tren.
 *
 * Props:
 *  - label    : string  — nama metrik, misal "Total Pasien"
 *  - value    : string  — nilai utama, misal "1,240"
 *  - trend    : "up" | "down" | "flat"  — arah tren (default "flat")
 *  - trendVal : string  — teks perubahan, misal "+12%" atau "-3"
 *  - icon     : ReactElement — ikon react-icons
 *  - color    : string  — warna aksen kartu (default cyan)
 */
export default function NeoStatCard({
  label = "Statistik",
  value = "0",
  trend = "flat",
  trendVal = "0%",
  icon,
  color = "#33DFFF",
}) {
  const BLACK = "#111111";

  const trendConfig = {
    up: { icon: MdTrendingUp, color: "#A7FF3D", label: "Naik" },
    down: { icon: MdTrendingDown, color: "#FF4FD8", label: "Turun" },
    flat: { icon: MdTrendingFlat, color: "#F5FF63", label: "Stabil" },
  };

  const { icon: TrendIcon, color: trendColor } = trendConfig[trend] ?? trendConfig.flat;

  return (
    <Box
      bg="#FFFFFF"
      border={`3px solid ${BLACK}`}
      borderRadius="16px"
      boxShadow={`5px 5px 0 ${BLACK}`}
      p="20px"
      fontFamily="'Manrope', 'Inter', sans-serif"
      position="relative"
      overflow="hidden"
      transition="transform 0.15s ease, box-shadow 0.15s ease"
      _hover={{
        transform: "translate(-2px, -2px)",
        boxShadow: `7px 7px 0 ${BLACK}`,
      }}
    >
      {/* Aksen warna di pojok kiri atas */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="6px"
        h="100%"
        bg={color}
        borderRadius="0"
      />

      <Flex align="flex-start" justify="space-between" pl="10px">
        {/* Kiri: label + value */}
        <Box>
          <Text
            fontSize="11px"
            fontWeight="900"
            textTransform="uppercase"
            letterSpacing="0.08em"
            color="#555555"
            mb="6px"
          >
            {label}
          </Text>
          <Text
            fontSize="28px"
            fontWeight="900"
            color={BLACK}
            lineHeight="1"
            letterSpacing="-0.03em"
          >
            {value}
          </Text>

          {/* Tren */}
          <Flex
            align="center"
            gap="4px"
            mt="10px"
            bg={trendColor}
            border={`2px solid ${BLACK}`}
            borderRadius="8px"
            boxShadow={`2px 2px 0 ${BLACK}`}
            px="8px"
            py="3px"
            display="inline-flex"
          >
            <Icon as={TrendIcon} w="14px" h="14px" color={BLACK} />
            <Text fontSize="11px" fontWeight="900" color={BLACK}>
              {trendVal}
            </Text>
          </Flex>
        </Box>

        {/* Kanan: Ikon */}
        {icon && (
          <Flex
            align="center"
            justify="center"
            w="48px"
            h="48px"
            bg={color}
            border={`3px solid ${BLACK}`}
            borderRadius="12px"
            boxShadow={`3px 3px 0 ${BLACK}`}
            flexShrink={0}
          >
            {React.cloneElement(icon, {
              style: { width: "24px", height: "24px", color: BLACK },
            })}
          </Flex>
        )}
      </Flex>
    </Box>
  );
}

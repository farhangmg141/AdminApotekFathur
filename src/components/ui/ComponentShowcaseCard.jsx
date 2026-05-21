import React from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  HStack,
  Icon,
  Collapse,
} from "@chakra-ui/react";
import { MdContentCopy, MdCheck, MdCode } from "react-icons/md";
import NeoBadge from "../neo/NeoBadge";
import { NEO_THEME } from "theme/neoBrutal";

export default function ComponentShowcaseCard({
  comp,
  expandedId,
  copiedId,
  onToggleCode,
  onCopyCode,
}) {
  const isExpanded = expandedId === comp.id;
  const isCopied = copiedId === comp.id;

  return (
    <Box
      bg={NEO_THEME.cardBg}
      border={`3px solid ${NEO_THEME.black}`}
      borderRadius="16px"
      boxShadow={`6px 6px 0 ${NEO_THEME.black}`}
      p={{ base: "18px", md: "22px" }}
      display="flex"
      flexDirection="column"
      h="100%"
    >
      <Flex align="flex-start" justify="space-between" gap="12px" mb="10px">
        <Text
          fontSize={{ base: "15px", md: "17px" }}
          fontWeight="900"
          color={NEO_THEME.textDark}
          textTransform="uppercase"
          letterSpacing="-0.02em"
          lineHeight="1.2"
          flex="1"
        >
          {comp.name}
        </Text>
        <NeoBadge color={NEO_THEME.cyan}>{comp.category}</NeoBadge>
      </Flex>

      <Text
        fontSize="13px"
        fontWeight="800"
        color={NEO_THEME.textMuted}
        mb="16px"
        lineHeight="1.5"
      >
        {comp.description}
      </Text>

      <Box
        bg={NEO_THEME.previewBg}
        border={`3px solid ${NEO_THEME.black}`}
        borderRadius="14px"
        p={{ base: "18px", md: "22px" }}
        mb="14px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        minH={{ base: "140px", md: "160px" }}
        position="relative"
        overflow="hidden"
        boxShadow="inset 3px 3px 0 rgba(0,0,0,0.06)"
        flex="1"
      >
        <Box
          position="absolute"
          top="8px"
          left="8px"
          bg={NEO_THEME.textDark}
          color="#FFFFFF"
          px="8px"
          py="3px"
          borderRadius="6px"
          fontSize="8px"
          fontWeight="900"
          letterSpacing="1px"
        >
          LIVE PREVIEW
        </Box>
        {comp.render()}
      </Box>

      <HStack spacing="10px" flexWrap="wrap">
        <Button
          leftIcon={<Icon as={MdCode} />}
          bg="#FFFFFF"
          border={`2px solid ${NEO_THEME.black}`}
          boxShadow={`3px 3px 0 ${NEO_THEME.black}`}
          size="sm"
          fontWeight="900"
          fontSize="11px"
          onClick={() => onToggleCode(comp.id)}
          _hover={{
            bg: NEO_THEME.bgPage,
            transform: "translate(-1px, -1px)",
            boxShadow: `4px 4px 0 ${NEO_THEME.black}`,
          }}
          _active={{
            transform: "translate(1px, 1px)",
            boxShadow: `2px 2px 0 ${NEO_THEME.black}`,
          }}
        >
          {isExpanded ? "Sembunyikan Kode" : "Lihat Kode Reusable"}
        </Button>

        <Button
          leftIcon={<Icon as={isCopied ? MdCheck : MdContentCopy} />}
          bg={isCopied ? NEO_THEME.green : "#FFFFFF"}
          border={`2px solid ${NEO_THEME.black}`}
          boxShadow={`3px 3px 0 ${NEO_THEME.black}`}
          size="sm"
          fontWeight="900"
          fontSize="11px"
          onClick={() => onCopyCode(comp.id, comp.code)}
          _hover={{
            bg: NEO_THEME.cyan,
            transform: "translate(-1px, -1px)",
            boxShadow: `4px 4px 0 ${NEO_THEME.black}`,
          }}
          _active={{
            transform: "translate(1px, 1px)",
            boxShadow: `2px 2px 0 ${NEO_THEME.black}`,
          }}
        >
          {isCopied ? "Tersalin!" : "Salin Kode"}
        </Button>
      </HStack>

      <Collapse in={isExpanded} animateOpacity>
        <Box
          mt="12px"
          bg={NEO_THEME.textDark}
          color="#FFFFFF"
          p="14px"
          borderRadius="12px"
          border={`2px solid ${NEO_THEME.black}`}
          fontFamily="monospace"
          fontSize="11px"
          overflowX="auto"
          whiteSpace="pre-wrap"
          lineHeight="1.6"
        >
          {comp.code}
        </Box>
      </Collapse>
    </Box>
  );
}

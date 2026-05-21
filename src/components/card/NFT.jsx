import React, { useState } from "react";
import {
  AvatarGroup,
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { THEME } from "../../theme/themeConstants";

export default function NFT(props) {
  const { image, name, author, bidders = [], download = "#", currentbid, ...rest } = props;
  const [like, setLike] = useState(false);

  return (
    <Card
      p="16px"
      transition="all 0.2s ease"
      _hover={{
        transform: "translate(-2px, -2px)",
        boxShadow: `7px 7px 0 ${THEME.black || "#111"}`,
      }}
      {...rest}
    >
      <Flex direction="column" justify="center">
        {/* Framed Image Container */}
        <Box
          mb="16px"
          position="relative"
          border={`3px solid ${THEME.black || "#111"}`}
          borderRadius="14px"
          boxShadow={`3px 3px 0 ${THEME.black || "#111"}`}
          overflow="hidden"
          h="180px"
          w="100%"
        >
          <Image
            src={image}
            w="100%"
            h="100%"
            objectFit="cover"
          />

          {/* Neo-Brutalist Like Button */}
          <Button
            position="absolute"
            bg={like ? (THEME.danger || "#FF4FD8") : "#FFFFFF"}
            _hover={{
              bg: like ? (THEME.danger || "#FF4FD8") : "#FFFDEB",
              transform: "translate(-1px, -1px)",
              boxShadow: `3px 3px 0 ${THEME.black || "#111"}`,
            }}
            _active={{
              transform: "translate(1px, 1px)",
              boxShadow: `1px 1px 0 ${THEME.black || "#111"}`,
            }}
            p="0px !important"
            top="10px"
            right="10px"
            border={`2px solid ${THEME.black || "#111"}`}
            borderRadius="50%"
            minW="34px"
            h="34px"
            boxShadow={`2px 2px 0 ${THEME.black || "#111"}`}
            onClick={(e) => {
              e.preventDefault();
              setLike(!like);
            }}
            transition="all 0.15s ease"
          >
            <Icon
              w="18px"
              h="18px"
              as={like ? IoHeart : IoHeartOutline}
              color={THEME.black || "#111"}
            />
          </Button>
        </Box>

        {/* Info Area */}
        <Flex direction="column" justify="space-between" h="100%">
          <Flex justify="space-between" align="flex-start" mb="12px">
            <Flex direction="column">
              <Text
                color={THEME.black || "#111"}
                fontSize="16px"
                fontWeight="900"
                lineHeight="1.2"
                noOfLines={1}
              >
                {name}
              </Text>
              <Text
                color="#555"
                fontSize="12px"
                fontWeight="800"
                mt="2px"
                noOfLines={1}
              >
                oleh {author}
              </Text>
            </Flex>

            {bidders.length > 0 && (
              <AvatarGroup size="sm" max={3}>
                {bidders.map((avt, key) => (
                  <Avatar
                    key={key}
                    src={avt}
                    border={`2px solid ${THEME.black || "#111"}`}
                  />
                ))}
              </AvatarGroup>
            )}
          </Flex>

          <Flex align="center" justify="space-between" mt="6px">
            <Box>
              <Text fontSize="9px" fontWeight="900" color="#666" textTransform="uppercase">
                Bid Terkini
              </Text>
              <Text
                fontWeight="900"
                fontSize="14px"
                color={THEME.black || "#111"}
              >
                {currentbid}
              </Text>
            </Box>

            <Link href={download} style={{ textDecoration: "none" }}>
              <Button
                bg={THEME.success || "#A7FF3D"}
                color={THEME.black || "#111"}
                fontSize="12px"
                fontWeight="900"
                textTransform="uppercase"
                border={`2px solid ${THEME.black || "#111"}`}
                borderRadius="8px"
                boxShadow={`3px 3px 0 ${THEME.black || "#111"}`}
                px="16px"
                py="6px"
                h="auto"
                _hover={{
                  bg: THEME.primary || "#33DFFF",
                  transform: "translate(-1px, -1px)",
                  boxShadow: `4px 4px 0 ${THEME.black || "#111"}`,
                }}
                _active={{
                  transform: "translate(1px, 1px)",
                  boxShadow: `2px 2px 0 ${THEME.black || "#111"}`,
                }}
                transition="all 0.15s ease"
              >
                Tawar
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}

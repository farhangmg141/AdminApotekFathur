import React from "react";
import { Avatar, Flex, Icon, Text } from "@chakra-ui/react";
import Card from "components/card/Card";
import TransparentMenu from "components/menu/TransparentMenu";
import { IoEllipsisVertical } from "react-icons/io5";
import { THEME } from "../../theme/themeConstants";

export default function Member(props) {
  const { avatar, name, job, ...rest } = props;

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
      <Flex align="center" justify="space-between" w="100%">
        <Flex align="center" gap="14px">
          <Avatar
            h="48px"
            w="48px"
            src={avatar}
            border={`3px solid ${THEME.black || "#111"}`}
            boxShadow={`2px 2px 0 ${THEME.black || "#111"}`}
          />
          <Flex direction="column" align="start">
            <Text
              color={THEME.black || "#111"}
              fontSize="15px"
              fontWeight="900"
              lineHeight="1.2"
            >
              {name}
            </Text>
            <Text
              color="#555"
              fontSize="12px"
              fontWeight="800"
              mt="2px"
            >
              {job}
            </Text>
          </Flex>
        </Flex>

        <TransparentMenu
          icon={
            <Icon
              as={IoEllipsisVertical}
              w="20px"
              h="20px"
              color={THEME.black || "#111"}
            />
          }
        />
      </Flex>
    </Card>
  );
}

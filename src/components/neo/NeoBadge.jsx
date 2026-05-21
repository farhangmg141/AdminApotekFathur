import React from "react";
import { Badge } from "@chakra-ui/react";
import { THEME } from "../../theme/themeConstants";

export default function NeoBadge({
  color = THEME.primary,
  children,
  size = "md",
  ...rest
}) {
  const padding = size === "lg" ? "8px 16px" : size === "sm" ? "4px 8px" : "6px 12px";
  const fontSize = size === "lg" ? "12px" : size === "sm" ? "9px" : "11px";

  return (
    <Badge
      bg={color}
      color={THEME.black}
      border={`2px solid ${THEME.black}`}
      borderRadius="8px"
      boxShadow={`2px 2px 0 ${THEME.black}`}
      px="10px"
      py="5px"
      fontWeight="900"
      fontSize={fontSize}
      textTransform="uppercase"
      letterSpacing="-0.02em"
      display="inline-block"
      _hover={{
        transform: "translate(-1px, -1px)",
        boxShadow: `3px 3px 0 ${THEME.black}`,
      }}
      transition="all 0.15s ease"
      {...rest}
    >
      {children}
    </Badge>
  );
}

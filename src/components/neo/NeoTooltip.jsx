import React from "react";
import { Tooltip } from "@chakra-ui/react";
import { THEME } from "../../theme/themeConstants";

export default function NeoTooltip({
  label,
  children,
  color = THEME.yellow || "#F5FF63",
  ...rest
}) {
  return (
    <Tooltip
      label={label}
      bg={color}
      color={THEME.black}
      border={`2px solid ${THEME.black}`}
      borderRadius="8px"
      boxShadow={`3px 3px 0 ${THEME.black}`}
      fontWeight="900"
      fontSize="11px"
      px="10px"
      py="6px"
      hasArrow
      arrowSize={8}
      fontFamily="'Inter', sans-serif"
      {...rest}
    >
      {children}
    </Tooltip>
  );
}

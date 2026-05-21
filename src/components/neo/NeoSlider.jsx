import React from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "@chakra-ui/react";
import { THEME } from "../../theme/themeConstants";

export default function NeoSlider({
  value,
  onChange,
  min = 0,
  max = 100,
  color = THEME.primary,
  ...rest
}) {
  return (
    <Slider
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      focusThumbOnChange={false}
      {...rest}
    >
      <SliderTrack
        h="14px"
        bg="#FFFFFF"
        border={`3px solid ${THEME.black}`}
        borderRadius="999px"
        boxShadow={`2px 2px 0 ${THEME.black}`}
      >
        <SliderFilledTrack bg={color} />
      </SliderTrack>
      <SliderThumb
        boxSize="24px"
        bg="#FFFFFF"
        border={`3px solid ${THEME.black}`}
        boxShadow={`2px 2px 0 ${THEME.black}`}
        _hover={{
          transform: "scale(1.1)",
          bg: THEME.yellow,
        }}
        _active={{
          transform: "scale(0.95)",
          boxShadow: `1px 1px 0 ${THEME.black}`,
        }}
        transition="all 0.1s ease"
      />
    </Slider>
  );
}

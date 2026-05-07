import { mode } from "@chakra-ui/theme-tools";
import { THEME } from "../themeConstants";

export const buttonStyles = {
  components: {
    Button: {
      baseStyle: {
        borderRadius: "14px",
        border: `3px solid ${THEME.black}`,
        bg: THEME.white,
        color: THEME.black,
        fontWeight: "800",
        letterSpacing: "-0.02em",
        boxShadow: `5px 5px 0 ${THEME.black}`,
        transition: ".2s all ease",
        boxSizing: "border-box",
        _focus: {
          boxShadow: `5px 5px 0 ${THEME.black}`,
        },
        _active: {
          transform: "translate(2px, 2px)",
          boxShadow: `2px 2px 0 ${THEME.black}`,
        },
        _hover: {
          transform: "translate(-2px, -2px)",
          boxShadow: `7px 7px 0 ${THEME.black}`,
        },
      },
      variants: {
        outline: () => ({
          bg: THEME.white,
          color: THEME.black,
          borderRadius: "14px",
          border: `3px solid ${THEME.black}`,
          boxShadow: `5px 5px 0 ${THEME.black}`,
          _hover: {
            bg: THEME.yellow,
            transform: "translate(-2px, -2px)",
            boxShadow: `7px 7px 0 ${THEME.black}`,
          },
          _active: {
            transform: "translate(2px, 2px)",
            boxShadow: `2px 2px 0 ${THEME.black}`,
          },
        }),

        brand: () => ({
          bg: THEME.yellow,
          color: THEME.black,
          border: `3px solid ${THEME.black}`,
          boxShadow: `5px 5px 0 ${THEME.black}`,
          _focus: {
            bg: THEME.yellow,
            boxShadow: `5px 5px 0 ${THEME.black}`,
          },
          _active: {
            bg: THEME.orange,
            transform: "translate(2px, 2px)",
            boxShadow: `2px 2px 0 ${THEME.black}`,
          },
          _hover: {
            bg: THEME.cyan,
            transform: "translate(-2px, -2px)",
            boxShadow: `7px 7px 0 ${THEME.black}`,
          },
        }),

        darkBrand: () => ({
          bg: THEME.black,
          color: THEME.yellow,
          border: `3px solid ${THEME.black}`,
          boxShadow: `5px 5px 0 ${THEME.cyan}`,
          _focus: {
            bg: THEME.black,
            boxShadow: `5px 5px 0 ${THEME.cyan}`,
          },
          _active: {
            bg: THEME.black,
            transform: "translate(2px, 2px)",
            boxShadow: `2px 2px 0 ${THEME.cyan}`,
          },
          _hover: {
            bg: "#222222",
            color: THEME.cyan,
            transform: "translate(-2px, -2px)",
            boxShadow: `7px 7px 0 ${THEME.pink}`,
          },
        }),

        lightBrand: () => ({
          bg: THEME.soft,
          color: THEME.black,
          border: `3px solid ${THEME.black}`,
          boxShadow: `4px 4px 0 ${THEME.black}`,
          _focus: {
            bg: THEME.soft,
            boxShadow: `4px 4px 0 ${THEME.black}`,
          },
          _active: {
            bg: THEME.yellow,
            transform: "translate(2px, 2px)",
            boxShadow: `2px 2px 0 ${THEME.black}`,
          },
          _hover: {
            bg: THEME.pink,
            transform: "translate(-2px, -2px)",
            boxShadow: `6px 6px 0 ${THEME.black}`,
          },
        }),

        light: () => ({
          bg: THEME.white,
          color: THEME.black,
          border: `3px solid ${THEME.black}`,
          boxShadow: `4px 4px 0 ${THEME.black}`,
          _focus: {
            bg: THEME.white,
            boxShadow: `4px 4px 0 ${THEME.black}`,
          },
          _active: {
            bg: THEME.green,
            transform: "translate(2px, 2px)",
            boxShadow: `2px 2px 0 ${THEME.black}`,
          },
          _hover: {
            bg: THEME.green,
            transform: "translate(-2px, -2px)",
            boxShadow: `6px 6px 0 ${THEME.black}`,
          },
        }),

        action: () => ({
          fontWeight: "800",
          borderRadius: "999px",
          bg: THEME.cyan,
          color: THEME.black,
          border: `3px solid ${THEME.black}`,
          boxShadow: `4px 4px 0 ${THEME.black}`,
          _focus: {
            bg: THEME.cyan,
            boxShadow: `4px 4px 0 ${THEME.black}`,
          },
          _active: {
            bg: THEME.orange,
            transform: "translate(2px, 2px)",
            boxShadow: `2px 2px 0 ${THEME.black}`,
          },
          _hover: {
            bg: THEME.yellow,
            transform: "translate(-2px, -2px)",
            boxShadow: `6px 6px 0 ${THEME.black}`,
          },
        }),

        setup: () => ({
          fontWeight: "800",
          borderRadius: "999px",
          bg: "transparent",
          border: `3px solid ${THEME.black}`,
          color: THEME.black,
          boxShadow: `4px 4px 0 ${THEME.black}`,
          _focus: {
            bg: "transparent",
            boxShadow: `4px 4px 0 ${THEME.black}`,
          },
          _active: {
            bg: THEME.soft,
            transform: "translate(2px, 2px)",
            boxShadow: `2px 2px 0 ${THEME.black}`,
          },
          _hover: {
            bg: THEME.yellow,
            transform: "translate(-2px, -2px)",
            boxShadow: `6px 6px 0 ${THEME.black}`,
          },
        }),
      },
    },
  },
};
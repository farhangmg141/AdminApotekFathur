import { mode } from "@chakra-ui/theme-tools";
import { THEME } from "./themeConstants";

export const globalStyles = {
  colors: {
    ...THEME,
    brand: {
      100: THEME.soft,
      200: THEME.primary,
      300: THEME.primary,
      400: THEME.purple,
      500: THEME.primary,
      600: THEME.info,
      700: THEME.black,
      800: THEME.shadow,
      900: THEME.black,
    },
    brandScheme: {
      100: THEME.soft,
      200: THEME.purple,
      300: THEME.purple,
      400: THEME.purple,
      500: THEME.primary,
      600: THEME.info,
      700: THEME.black,
      800: THEME.shadow,
      900: THEME.black,
    },
    brandTabs: {
      100: THEME.soft,
      200: THEME.primary,
      300: THEME.primary,
      400: THEME.primary,
      500: THEME.primary,
      600: THEME.info,
      700: THEME.black,
      800: THEME.shadow,
      900: THEME.black,
    },
    secondaryGray: {
      100: THEME.soft,
      200: THEME.inputHover,
      300: THEME.surface,
      400: THEME.inputHover,
      500: THEME.muted,
      600: THEME.muted,
      700: THEME.text,
      800: THEME.text,
      900: THEME.text,
    },
    red: {
      100: THEME.inputHover,
      500: THEME.danger,
      600: THEME.danger,
    },
    blue: {
      50: THEME.inputHover,
      500: THEME.info,
    },
    orange: {
      100: THEME.inputHover,
      500: THEME.warning,
    },
    green: {
      100: THEME.inputHover,
      500: THEME.success,
    },
    navy: {
      50: THEME.inputHover,
      100: THEME.primary,
      200: THEME.primary,
      300: THEME.info,
      400: THEME.info,
      500: THEME.primary,
      600: THEME.info,
      700: THEME.text,
      800: THEME.black,
      900: THEME.black,
    },
    gray: {
      100: THEME.surface,
    },
  },
  styles: {
    global: (props) => ({
      body: {
        overflowX: "hidden",
        bg: THEME.background,
        color: THEME.text,
        fontFamily: "Manrope, sans-serif",
        letterSpacing: "-0.5px",
      },
      input: {
        color: THEME.text,
      },
      html: {
        fontFamily: "Manrope, sans-serif",
      },
    }),
  },
};

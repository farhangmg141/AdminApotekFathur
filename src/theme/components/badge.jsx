import { THEME } from "../themeConstants";

export const badgeStyles = {
  components: {
    Badge: {
      baseStyle: {
        borderRadius: "12px",
        lineHeight: "100%",
        px: "12px",
        py: "6px",
        bg: THEME.surface,
        color: THEME.text,
        border: `3px solid ${THEME.border}`,
        boxShadow: `3px 3px 0 ${THEME.shadow}`,
        fontWeight: "900",
        fontSize: "11px",
        textTransform: "uppercase",
        letterSpacing: "-0.02em",
      },
      variants: {
        outline: () => ({
          bg: THEME.surface,
          color: THEME.text,
          border: `3px solid ${THEME.border}`,
          borderRadius: "12px",
          boxShadow: `3px 3px 0 ${THEME.shadow}`,
        }),

        brand: () => ({
          bg: THEME.badgePrimary,
          color: THEME.text,
          border: `3px solid ${THEME.border}`,
          borderRadius: "12px",
          boxShadow: `3px 3px 0 ${THEME.shadow}`,
          _focus: {
            bg: THEME.badgePrimary,
          },
          _active: {
            bg: THEME.yellow,
            transform: "translate(1px, 1px)",
            boxShadow: `1px 1px 0 ${THEME.shadow}`,
          },
          _hover: {
            bg: THEME.pink,
            transform: "translate(-1px, -1px)",
            boxShadow: `4px 4px 0 ${THEME.shadow}`,
          },
        }),

        yellow: () => ({
          bg: THEME.yellow,
          color: THEME.text,
          border: `3px solid ${THEME.border}`,
          borderRadius: "12px",
          boxShadow: `3px 3px 0 ${THEME.shadow}`,
        }),

        pink: () => ({
          bg: THEME.pink,
          color: THEME.text,
          border: `3px solid ${THEME.border}`,
          borderRadius: "12px",
          boxShadow: `3px 3px 0 ${THEME.shadow}`,
        }),

        green: () => ({
          bg: THEME.green,
          color: THEME.text,
          border: `3px solid ${THEME.border}`,
          borderRadius: "12px",
          boxShadow: `3px 3px 0 ${THEME.shadow}`,
        }),

        orange: () => ({
          bg: THEME.orange,
          color: THEME.text,
          border: `3px solid ${THEME.border}`,
          borderRadius: "12px",
          boxShadow: `3px 3px 0 ${THEME.shadow}`,
        }),
      },
    },
  },
};
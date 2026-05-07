import { mode } from "@chakra-ui/theme-tools";
import { THEME } from "../themeConstants";

export const inputStyles = {
  components: {
    Input: {
      baseStyle: {
        field: {
          fontWeight: "900",
          borderRadius: "12px",
          fontSize: "13px",
          color: THEME.text,
          border: `3px solid ${THEME.border}`,
          bg: THEME.inputBg,
          boxShadow: `3px 3px 0 ${THEME.shadow}`,
          transition: "all .18s ease",
          _placeholder: {
            color: THEME.muted,
            fontWeight: "800",
          },
          _hover: {
            bg: THEME.inputHover,
            boxShadow: `4px 4px 0 ${THEME.shadow}`,
          },
          _focus: {
            borderColor: THEME.border,
            bg: THEME.inputBg,
            boxShadow: `5px 5px 0 ${THEME.shadow}`,
          },
        },
      },

      variants: {
        main: () => ({
          field: {
            bg: THEME.inputBg,
            border: `3px solid ${THEME.border}`,
            color: THEME.text,
            borderRadius: "12px",
            p: "20px",
            boxShadow: `3px 3px 0 ${THEME.shadow}`,
            _placeholder: {
              color: THEME.muted,
              fontWeight: "800",
            },
          },
        }),

        auth: () => ({
          field: {
            fontWeight: "900",
            color: THEME.text,
            bg: THEME.inputBg,
            border: `3px solid ${THEME.border}`,
            borderRadius: "12px",
            boxShadow: `3px 3px 0 ${THEME.shadow}`,
            _placeholder: {
              color: THEME.muted,
              fontWeight: "800",
            },
          },
        }),

        authSecondary: () => ({
          field: {
            bg: THEME.inputHover,
            border: `3px solid ${THEME.border}`,
            borderRadius: "12px",
            boxShadow: `3px 3px 0 ${THEME.shadow}`,
            _placeholder: {
              color: THEME.muted,
            },
          },
        }),

        search: () => ({
          field: {
            bg: THEME.inputBg,
            border: `3px solid ${THEME.border}`,
            py: "11px",
            borderRadius: "12px",
            boxShadow: `3px 3px 0 ${THEME.shadow}`,
            _placeholder: {
              color: THEME.muted,
            },
          },
        }),
      },
    },

    NumberInput: {
      baseStyle: {
        field: {
          fontWeight: "900",
          borderRadius: "12px",
          border: `3px solid ${THEME.border}`,
          bg: THEME.inputBg,
          boxShadow: `3px 3px 0 ${THEME.shadow}`,
          _placeholder: {
            color: THEME.muted,
          },
        },
      },

      variants: {
        main: () => ({
          field: {
            bg: THEME.inputBg,
            border: `3px solid ${THEME.border}`,
            borderRadius: "12px",
            boxShadow: `3px 3px 0 ${THEME.shadow}`,
          },
        }),

        auth: () => ({
          field: {
            bg: THEME.inputBg,
            border: `3px solid ${THEME.border}`,
            borderRadius: "12px",
            boxShadow: `3px 3px 0 ${THEME.shadow}`,
          },
        }),

        authSecondary: () => ({
          field: {
            bg: THEME.inputHover,
            border: `3px solid ${THEME.border}`,
            borderRadius: "12px",
            boxShadow: `3px 3px 0 ${THEME.shadow}`,
          },
        }),

        search: () => ({
          field: {
            border: `3px solid ${THEME.border}`,
            py: "11px",
            borderRadius: "12px",
            boxShadow: `3px 3px 0 ${THEME.shadow}`,
          },
        }),
      },
    },

    Select: {
      baseStyle: {
        field: {
          fontWeight: "900",
          borderRadius: "12px",
          border: `3px solid ${THEME.border}`,
          bg: THEME.inputBg,
          boxShadow: `3px 3px 0 ${THEME.shadow}`,
        },
      },

      variants: {
        main: () => ({
          field: {
            bg: THEME.inputBg,
            border: `3px solid ${THEME.border}`,
            color: THEME.text,
            borderRadius: "12px",
            boxShadow: `3px 3px 0 ${THEME.shadow}`,
            _placeholder: {
              color: THEME.muted,
            },
          },
          icon: {
            color: THEME.text,
          },
        }),

        mini: () => ({
          field: {
            bg: THEME.inputBg,
            border: `3px solid ${THEME.border}`,
            fontSize: "12px",
            p: "10px",
            borderRadius: "12px",
            boxShadow: `3px 3px 0 ${THEME.shadow}`,
          },
          icon: {
            color: THEME.text,
          },
        }),

        subtle: () => ({
          box: {
            width: "unset",
          },
          field: {
            bg: THEME.inputHover,
            border: `3px solid ${THEME.border}`,
            color: THEME.text,
            borderRadius: "12px",
            width: "max-content",
            boxShadow: `3px 3px 0 ${THEME.shadow}`,
          },
          icon: {
            color: THEME.text,
          },
        }),

        transparent: () => ({
          field: {
            bg: THEME.inputBg,
            border: `3px solid ${THEME.border}`,
            width: "min-content",
            color: THEME.text,
            padding: "6px 14px",
            fontWeight: "900",
            fontSize: "13px",
            borderRadius: "12px",
            boxShadow: `3px 3px 0 ${THEME.shadow}`,
          },
          icon: {
            transform: "none !important",
            position: "unset !important",
            width: "unset",
            color: THEME.text,
            right: "0px",
          },
        }),

        auth: () => ({
          field: {
            bg: THEME.inputBg,
            border: `3px solid ${THEME.border}`,
            borderRadius: "12px",
            boxShadow: `3px 3px 0 ${THEME.shadow}`,
          },
        }),

        authSecondary: () => ({
          field: {
            bg: THEME.inputHover,
            border: `3px solid ${THEME.border}`,
            borderRadius: "12px",
            boxShadow: `3px 3px 0 ${THEME.shadow}`,
          },
        }),

        search: () => ({
          field: {
            bg: THEME.inputBg,
            border: `3px solid ${THEME.border}`,
            py: "11px",
            borderRadius: "12px",
            boxShadow: `3px 3px 0 ${THEME.shadow}`,
          },
        }),
      },
    },
  },
};
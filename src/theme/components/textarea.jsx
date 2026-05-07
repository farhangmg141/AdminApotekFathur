import { mode } from "@chakra-ui/theme-tools";
import { THEME } from "../themeConstants";

export const textareaStyles = {
  components: {
    Textarea: {
      baseStyle: {
        field: {
          fontWeight: "900",
          borderRadius: "12px",
          border: `3px solid ${THEME.border}`,
          bg: THEME.inputBg,
          boxShadow: `3px 3px 0 ${THEME.shadow}`,
          color: THEME.text,
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
            bg: THEME.inputBg,
            border: `3px solid ${THEME.border}`,
            borderRadius: "12px",
            boxShadow: `3px 3px 0 ${THEME.shadow}`,
            _placeholder: {
              color: THEME.muted,
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
  },
};

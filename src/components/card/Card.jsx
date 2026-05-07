import { Box, useStyleConfig } from "@chakra-ui/react";

function Card(props) {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("Card", { variant });

  return (
    <Box
      __css={styles}
      bg="#FFFFFF"
      border="3px solid #111"
      borderRadius="14px"
      boxShadow="5px 5px 0 #111"
      color="#111"
      fontFamily="'Inter', sans-serif"
      {...rest}
    >
      {children}
    </Box>
  );
}

export default Card;
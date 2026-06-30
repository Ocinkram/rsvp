import { Box, Container } from '@mui/material';

export const Section = ({
  id,
  bgcolor = 'background.default',
  maxWidth = 'lg',
  children,
  sx,
}) => {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 5, md: 8 },
        px: { xs: 2, sm: 3 },
        bgcolor,
        ...sx,
      }}
    >
      <Container maxWidth={maxWidth}>{children}</Container>
    </Box>
  );
};

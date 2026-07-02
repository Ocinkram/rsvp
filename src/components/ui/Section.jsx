import { Box, Container } from '@mui/material';

const SECTION_BACKGROUNDS = {
  default: 'background.default',
  paper: 'background.paper',
  section: 'background.section',
};

export const Section = ({
  id,
  bgcolor,
  tone = 'default',
  maxWidth = 'lg',
  children,
  sx,
}) => {
  const resolvedBg = bgcolor ?? SECTION_BACKGROUNDS[tone] ?? SECTION_BACKGROUNDS.default;

  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 5, md: 8 },
        px: { xs: 2, sm: 3 },
        bgcolor: resolvedBg,
        ...sx,
      }}
    >
      <Container maxWidth={maxWidth}>{children}</Container>
    </Box>
  );
};

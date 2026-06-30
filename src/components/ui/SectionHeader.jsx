import { Box, Stack, Typography } from '@mui/material';
import { sectionTaglineSx, sectionTitleSx } from './headingStyles';

export const SectionHeader = ({
  title,
  subtitle,
  tagline,
  icon,
  align = 'center',
  compact = false,
  sx,
}) => {
  return (
    <Stack
      spacing={1.5}
      alignItems={align === 'center' ? 'center' : 'flex-start'}
      textAlign={align}
      sx={{ mb: compact ? { xs: 3, md: 4 } : { xs: 4, md: 6 }, ...sx }}
    >
      <Stack
        direction="row"
        alignItems="center"
        gap={1}
        flexWrap="wrap"
        justifyContent={align === 'center' ? 'center' : 'flex-start'}
      >
        {icon}
        <Typography component="h2" sx={sectionTitleSx}>
          {title}
        </Typography>
      </Stack>

      <Box
        sx={{
          width: 48,
          height: 2,
          bgcolor: 'primary.main',
          opacity: 0.5,
          borderRadius: 1,
        }}
      />

      {tagline && (
        <Typography sx={sectionTaglineSx}>
          {tagline}
        </Typography>
      )}

      {subtitle && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 600, lineHeight: 1.7, mt: tagline ? 0 : undefined }}
        >
          {subtitle}
        </Typography>
      )}
    </Stack>
  );
};

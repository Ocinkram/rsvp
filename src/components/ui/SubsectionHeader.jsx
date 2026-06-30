import { Stack, Typography } from '@mui/material';
import { cardTitleSx, subsectionTitleSx } from './headingStyles';

export const SubsectionHeader = ({
  title,
  icon,
  variant = 'subsection',
  align = 'center',
  sx,
}) => {
  const titleSx = variant === 'card' ? cardTitleSx : subsectionTitleSx;

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={align === 'center' ? 'center' : 'flex-start'}
      gap={1}
      sx={{ mb: { xs: 1.5, md: 2 }, ...sx }}
    >
      {icon}
      <Typography component="h3" sx={{ ...titleSx, textAlign: align }}>
        {title}
      </Typography>
    </Stack>
  );
};

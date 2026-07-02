import { Box, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionTaglineSx, sectionTitleSx } from './headingStyles';
import { viewportOnce } from './animations';

const headerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const headerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const SectionHeader = ({
  title,
  subtitle,
  tagline,
  icon,
  align = 'center',
  compact = false,
  animate = true,
  sx,
}) => {
  const MotionStack = animate ? motion.div : Box;

  return (
    <Stack
      spacing={1.5}
      alignItems={align === 'center' ? 'center' : 'flex-start'}
      textAlign={align}
      sx={{ mb: compact ? { xs: 3, md: 4 } : { xs: 4, md: 6 }, ...sx }}
      component={animate ? motion.div : undefined}
      initial={animate ? 'hidden' : undefined}
      whileInView={animate ? 'visible' : undefined}
      viewport={animate ? viewportOnce : undefined}
      variants={animate ? headerContainer : undefined}
    >
      <MotionStack
        variants={animate ? headerItem : undefined}
        style={animate ? { display: 'flex', width: '100%' } : undefined}
      >
        <Stack
          direction="row"
          alignItems="center"
          gap={1}
          flexWrap="wrap"
          justifyContent={align === 'center' ? 'center' : 'flex-start'}
          sx={{ width: '100%' }}
        >
          {icon}
          <Typography component="h2" sx={sectionTitleSx}>
            {title}
          </Typography>
        </Stack>
      </MotionStack>

      <Box
        component={animate ? motion.div : undefined}
        variants={animate ? headerItem : undefined}
        sx={{
          width: 48,
          height: 2,
          bgcolor: 'primary.main',
          opacity: 0.5,
          borderRadius: 1,
        }}
      />

      {tagline && (
        <Box component={animate ? motion.div : undefined} variants={animate ? headerItem : undefined}>
          <Typography sx={sectionTaglineSx}>
            {tagline}
          </Typography>
        </Box>
      )}

      {subtitle && (
        <Box component={animate ? motion.div : undefined} variants={animate ? headerItem : undefined}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, lineHeight: 1.7, mt: tagline ? 0 : undefined }}
          >
            {subtitle}
          </Typography>
        </Box>
      )}
    </Stack>
  );
};

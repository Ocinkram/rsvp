import { Box, Grid, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionTaglineSx, sectionTitleSx, subsectionTitleSx } from './headingStyles';
import { viewportOnce } from './animations';
import { StaggerItem, StaggerOnView } from './AnimateOnView';

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

const entourageScriptSx = {
  ...sectionTitleSx,
  fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
  textAlign: 'center',
};

const entourageLabelSx = {
  ...sectionTaglineSx,
  textAlign: 'center',
  mb: { xs: 1.5, md: 2 },
};

const entourageNameSx = {
  fontSize: { xs: '0.9375rem', md: '1rem' },
  fontWeight: 400,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'text.primary',
  textAlign: 'center',
  lineHeight: { xs: 2, md: 2.2 },
  whiteSpace: 'nowrap',
};

const entourageRoleTitleSx = {
  ...subsectionTitleSx,
  textAlign: 'center',
};

const entourageBlockSx = {
  mb: { xs: 5, md: 7 },
  width: '100%',
  alignItems: 'center',
};

const entourageGridSx = {
  width: '100%',
  maxWidth: 720,
  mx: 'auto',
  justifyContent: 'center',
};

const entourageGridItemSx = {
  display: 'flex',
  justifyContent: 'center',
};

const EntourageNames = ({ names }) => (
  <Stack spacing={0} alignItems="center">
    {names.map((name) => (
      <Typography key={name} sx={entourageNameSx}>
        {name}
      </Typography>
    ))}
  </Stack>
);

const EntourageRole = ({ title, names }) => (
  <Stack spacing={1} alignItems="center">
    <Typography sx={entourageRoleTitleSx}>
      {title}
    </Typography>
    <EntourageNames names={names} />
  </Stack>
);

const EntourageColumn = ({ label, names }) => (
  <Stack alignItems="center">
    {label && (
      <Typography sx={entourageLabelSx}>{label}</Typography>
    )}
    <EntourageNames names={names} />
  </Stack>
);

const EntouragePage = ({ children, sx }) => (
  <Box
    sx={{
      maxWidth: 920,
      mx: 'auto',
      width: '100%',
      px: { xs: 1, sm: 2 },
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      ...sx,
    }}
  >
    {children}
  </Box>
);

const EntourageGroup = ({ children, sx }) => (
  <StaggerItem style={{ width: '100%' }}>
    <Box sx={{ width: '100%', ...sx }}>{children}</Box>
  </StaggerItem>
);

export const EntourageSection = () => (
  <>
    <SectionHeader title="The Entourage" />
    <StaggerOnView style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <EntouragePage>
        <EntourageGroup sx={entourageBlockSx}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 4, md: 8 }}
            justifyContent="center"
            alignItems={{ xs: 'center', md: 'flex-start' }}
            sx={{ maxWidth: 720, mx: 'auto' }}
          >
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <EntourageColumn
                label="Parents of the Groom"
                names={['RONILA NAMONCALE CALOT', 'TEMOTEO ARTEMIO IRINCO CALOT +']}
              />
            </Box>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <EntourageColumn
                label="Parents of the Bride"
                names={['MARIFE MACALLAN ADA', 'SANDY NORCIO ADA']}
              />
            </Box>
          </Stack>
        </EntourageGroup>

        <EntourageGroup sx={entourageBlockSx}>
          <Stack alignItems="center" spacing={2}>
            <Typography sx={entourageScriptSx}>Principal Sponsors</Typography>
            <Typography sx={{ ...sectionTaglineSx, textAlign: 'center', maxWidth: 480 }}>
              To Stand as Principal Witness in Our Exchange of Vows
            </Typography>
            <Grid container spacing={{ xs: 3, md: 6 }} sx={{ ...entourageGridSx, mt: { xs: 1, md: 2 } }}>
              <Grid item xs={12} sm={6} sx={entourageGridItemSx}>
                <EntourageNames
                  names={[
                    'MR. CHRISTIAAN CINCO',
                    'MR. ARTEMIO AGUILANDO',
                    'MR. ANGELITO BARREL',
                    'MR. PHEL ADA',
                    'MR. RANIEL VICENCIO',
                    'MR. RODULFO SAY',
                    'MR. GEORGE GETALADO',
                    'MR. NICANOR ORANE',
                    'MR. JOSEPH ADATO',
                    'MR. CRISANTO PENASBO',
                  ]}
                />
              </Grid>
              <Grid item xs={12} sm={6} sx={entourageGridItemSx}>
                <EntourageNames
                  names={[
                    'HON. FLORENCIO FAWA BATULA',
                    'MRS. MYRNA MANUELO',
                    'MRS. AMELITA',
                    'MRS. ROSALINDA QUIBAL',
                    'MRS. NELITA BOJANGIN',
                    'MRS. LOURDES PORTE',
                    'MRS. EMELIA CHARLES',
                    'MRS. FLOR BAYON',
                    'MRS. VANESESA YOPO',
                    'MRS. LOLITH PENASBO',
                  ]}
                />
              </Grid>
            </Grid>
          </Stack>
        </EntourageGroup>

        <EntourageGroup sx={entourageBlockSx}>
          <Stack alignItems="center" spacing={{ xs: 3, md: 4 }}>
            <Typography sx={entourageScriptSx}>To assist us in our needs</Typography>
            <Grid container spacing={{ xs: 4, md: 6 }} sx={entourageGridSx}>
              <Grid item xs={12} sm={6} sx={entourageGridItemSx}>
                <EntourageRole title="Bestman" names={['KANE ARRONNE CALOT']} />
              </Grid>
              <Grid item xs={12} sm={6} sx={entourageGridItemSx}>
                <EntourageRole title="Maid of Honor" names={['MARY JOY ADA']} />
              </Grid>
            </Grid>
          </Stack>
        </EntourageGroup>
      </EntouragePage>

      <EntouragePage sx={{ mt: { xs: 6, md: 8 } }}>
        <EntourageGroup sx={{ ...entourageBlockSx, mb: { xs: 4, md: 5 } }}>
          <Stack alignItems="center" spacing={{ xs: 4, md: 5 }}>
            <Typography sx={{ ...entourageScriptSx, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Secondary Sponsors
            </Typography>
            <Grid container spacing={{ xs: 4, md: 6 }} sx={entourageGridSx}>
              <Grid item xs={12} sm={6} sx={entourageGridItemSx}>
                <EntourageRole title="Candle" names={['MARIAN ADA', 'CRIS HYAN PENASBO']} />
              </Grid>
              <Grid item xs={12} sm={6} sx={entourageGridItemSx}>
                <EntourageRole title="Cord" names={['KATRICE IRA CALOT', 'PHILIP CLAUDE ADA']} />
              </Grid>
            </Grid>
          </Stack>
        </EntourageGroup>

        <EntourageGroup sx={entourageBlockSx}>
          <EntourageRole title="Veil" names={['SANDY MAE ADA', 'KLYNCE ART CALOT']} />
        </EntourageGroup>

        <EntourageGroup sx={entourageBlockSx}>
          <Grid container spacing={{ xs: 4, md: 6 }} sx={entourageGridSx}>
            <Grid item xs={12} sm={6} sx={entourageGridItemSx}>
              <EntourageRole
                title="Groomsmen"
                names={[
                  'MARK JHONLLOYD MACALLAN',
                  'RAY ANDREW MACALLAN',
                  'MARK PHILIP ADA',
                  'ANDREI GASPAN',
                  'CHRISTIAN LUCKY MAGAYES',
                  'ROMMEL MAGAYES',
                  'MARKHIL ADA',
                  'ALLAN NAMONCALE',
                  'AEJHAY MACALLAN',
                  'PAULJOHN DULA',
                  'JOHN ARCEL LEANDA',
                  'JOHN MILLER DULTRA',
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={6} sx={entourageGridItemSx}>
              <EntourageRole
                title="Bridesmaid"
                names={[
                  'ANGELA GETALADO',
                  'CZIESHA ANEX TIM CALOT',
                  'ANGEL SAY',
                  'ROSENDA HABANA',
                  'MARY GRACE AMORES',
                  'JEA BALDELOBAR',
                  'MARIA VANESSA CALOT',
                  'ANA YHAME NAMONCALE',
                  'MARY ANN ABOBO',
                  'MARIE FIEL ADA',
                  'ANTHONETTE MACALLAN',
                  'JULIAN YOPO',
                ]}
              />
            </Grid>
          </Grid>
        </EntourageGroup>

        <EntourageGroup sx={entourageBlockSx}>
          <Grid container spacing={{ xs: 4, md: 6 }} sx={entourageGridSx}>
            <Grid item xs={12} sm={6} sx={entourageGridItemSx}>
              <EntourageRole title="Ring Bearer" names={['TRISTAN DRIE ADA CALOT']} />
            </Grid>
            <Grid item xs={12} sm={6} sx={entourageGridItemSx}>
              <EntourageRole title="Coin Bearer" names={['LUKE HEINRICH ABANES']} />
            </Grid>
          </Grid>
        </EntourageGroup>

        <EntourageGroup sx={entourageBlockSx}>
          <EntourageRole title="Bible Bearer" names={['RYLANDRIEN MOHR MARIÑAS']} />
        </EntourageGroup>

        <EntourageGroup>
          <Stack alignItems="center" spacing={2} sx={{ width: '100%' }}>
            <Typography sx={entourageScriptSx}>Flower Girls</Typography>
            <Grid container spacing={{ xs: 3, md: 6 }} sx={entourageGridSx}>
              <Grid item xs={12} sm={6} sx={entourageGridItemSx}>
                <EntourageNames
                  names={[
                    'ARTEMIS LILY MONTIBON',
                    'ATHALIAH BELLA ABANES',
                    'SAMANTHA MACALLAN',
                    'AMBER',
                    'JHIANNA QUINNR GETALADO',
                  ]}
                />
              </Grid>
              <Grid item xs={12} sm={6} sx={entourageGridItemSx}>
                <EntourageNames
                  names={[
                    'CONAN KLEIGH MACALLAN',
                    'JOANNA MAE MUNCADA',
                    'MEZYCKA ASIYAH MARIÑAS',
                    'BLESSY ANGEL ABANES',
                  ]}
                />
              </Grid>
            </Grid>
          </Stack>
        </EntourageGroup>
      </EntouragePage>
    </StaggerOnView>
  </>
);

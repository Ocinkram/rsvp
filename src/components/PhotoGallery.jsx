import { useTheme, useMediaQuery, Box, ImageList, ImageListItem, Container } from '@mui/material';
import { SectionHeader } from './ui/SectionHeader';
import { AnimateOnView } from './ui/AnimateOnView';
import km1 from '../assets/images/km1.png'
import km2 from '../assets/images/km2.jpg'
import km3 from '../assets/images/km3.png'
import km4 from '../assets/images/km4.png'
import km5 from '../assets/images/km5.png'
import km6 from '../assets/images/km6.png'
import km7 from '../assets/images/km7.png'
import km8 from '../assets/images/km8.jpg'
import km9 from '../assets/images/km9.png'


const images = [
    km1, km2, km3, km4, km5, km6, km7, km8, km9

];

export const PhotoGallery = ({ title = 'our journey together' }) => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
    const cols = isMdUp ? 3 : isSmUp ? 2 : 1;

    return (
        <Box sx={{ py: { xs: 3, md: 4 } }}>
            {title && (
                <SectionHeader title={title} compact />
            )}

            <Container maxWidth="lg">
                <ImageList
                    variant="masonry"
                    cols={cols}
                    gap={isMdUp ? 16 : 8}
                >
                    {images.map((image, index) => (
                        <ImageListItem
                            key={index}
                            sx={{
                                overflow: 'hidden',
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                        >
                            <AnimateOnView delay={index * 0.06} y={20}>
                                <Box
                                    component="img"
                                    src={image}
                                    alt={`Gallery image ${index + 1}`}
                                    loading="lazy"
                                    sx={{
                                        width: '100%',
                                        display: 'block',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                        },
                                    }}
                                />
                            </AnimateOnView>
                        </ImageListItem>
                    ))}
                </ImageList>
            </Container>
        </Box>
    );
}

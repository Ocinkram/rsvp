import { motion } from 'framer-motion';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { LocationOn, CalendarToday, AccessTime, CardGiftcard, Instagram, ExpandMore, MusicNote, CleaningServices, } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Typography, Container, Grid, Stack } from '@mui/material';
import { CountdownTimer } from "./CountDownTimer"
import { AccommodationsSection } from "./AccommodationsSection"
import { Guestbook } from "./Guestbook"
import { WeddingSchedule } from "./WeddingSchedule"
import { RSVPForm } from "./RSVPForm"
import { PhotoGallery } from './PhotoGallery';
import { FAQSection } from './FAQSection';
import { ImageWithFallback } from './ImageWithFallback';
import '@fontsource/allura'
import '@fontsource/great-vibes';
import '@fontsource/cormorant-garamond';

export const  Components =() => {
    const weddingDate = new Date('2026-08-12T14:00:00');

    console.log(weddingDate)

    const galleryImages = [
        'https://images.unsplash.com/photo-1768468105374-08185b172342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
        'https://images.unsplash.com/photo-1702456473497-2958d73adc80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
        'https://images.unsplash.com/photo-1766113488429-861f1a7775f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
        'https://images.unsplash.com/photo-1762216444919-043cf813e4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
        'https://images.unsplash.com/photo-1761120789207-c08a10afb864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
        'https://images.unsplash.com/photo-1761574044344-394d47e1a96c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#E4E2E0' }}>

        {/* Navigation */}
       {/*  <Box
            component="nav"
            sx={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                backdropFilter: 'blur(6px)',
                bgcolor: 'rgba(255,255,255,0.8)',
                borderBottom: '1px solid #869478',
            }}
        >
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="center" alignItems="center" height={64} overflow="auto">
                    <Box display="flex" gap={4}>
                    {['Home', 'Details', 'Schedule', 'RSVP', 'Story', 'Travel', 'FAQs', 'Guestbook'].map((item) => (
                        <Button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        sx={{ color: '#869478', textTransform: 'none', fontSize: '0.875rem' }}
                        >
                        {item}
                        </Button>
                    ))}
                    </Box>
                </Box>
            </Container>
        </Box>
 */}
        {/* Hero Section */}
        <Box id="home" sx={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ position: 'absolute', inset: 0 }}>
                <ImageWithFallback
                    src="https://png.pngtree.com/background/20220724/original/pngtree-watercolor-wedding-floral-background-with-white-roses-picture-image_1739501.jpg"
                    alt="Wedding couple"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
                />
            </Box>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2}} style={{ zIndex: 1 }}>
                <Stack textAlign="center" alignItems='center' gap={6}>
                    <Stack gap={4}>
                        <Typography color='#869478' fontFamily='"Cormorant Garamond", serif'>TOGETHER WITH THEIR FAMILIES</Typography>
                        <Box display='flex' gap={3}>
                            <Typography variant="h1" color= '#869478' fontFamily='"Great Vibes", cursive' sx={{ fontSize: { xs: '3rem', md: '5rem' }}}> Kim </Typography>
                            <Typography variant="h1" color= '#869478' fontFamily='"Great Vibes", cursive' sx={{ fontSize: { xs: '3rem', md: '5rem' }}}> & </Typography>
                            <Typography variant="h1" color= '#869478' fontFamily='"Great Vibes", cursive' sx={{ fontSize: { xs: '3rem', md: '5rem' }}}> Marie </Typography>
                        </Box>
                        <Typography color='#869478' fontFamily='"Cormorant Garamond", serif'>INVITE YOU TO THEIR WEDDING</Typography>
                    </Stack>
                    <Box display='flex' gap={2} alignItems='center'>
                        <Typography color='#869478' borderBottom='2px solid #869478' borderTop='2px solid #869478' width='100px' textAlign='center'>WEDNESDAY</Typography>
                        <Stack>
                            <Typography color='#869478'>AUGUST</Typography>
                            <Typography variant='h2' lineHeight='60px' color='#869478'>12</Typography>
                            <Typography color='#869478'>2026</Typography>
                        </Stack>
                        <Typography color='#869478' borderBottom='2px solid #869478' borderTop='2px solid #869478' width='100px' textAlign='center'>2:00 PM</Typography>
                    </Box>
                    <Typography color='#869478'>PALAPAG, NORTHERN SAMAR</Typography>

                        
                    {/* <Button
                    onClick={() => scrollToSection('rsvp')}
                    sx={{ fontSize: '1.125rem', px: 4, bgcolor: '#869478', color: '#E4E2E0', '&:hover': { bgcolor: '#7a8567' } }}
                    >
                    RSVP Now
                    </Button> */}
                    {/* <motion.div onClick={() => scrollToSection('rsvp')} animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
                        <ExpandMore sx={{ fontSize: 40, color: '#869478' }} />
                    </motion.div> */}
                </Stack>
            </motion.div>
        </Box>

        {/* Countdown */}
        <Box py={8} px={2}>
            <CountdownTimer targetDate={weddingDate} />
        </Box>

        {/* Ceremony Details */}
        <Box id="details" py={8} px={2} bgcolor="white">
            <Container maxWidth="lg">
                <Stack gap={4} alignItems='center'>
                    {/* <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <Stack gap={2}>
                            <Typography variant="h3" textAlign="center" sx={{color: '#869478' }}>Join Us</Typography>
                            <Typography variant="body1" textAlign="center" color="text.primary"> We would be honored to have you celebrate this special day with us </Typography>
                        </Stack>
                    </motion.div> */}

                    <Typography color='#869478' variant='h2' fontFamily='"Great Vibes", cursive' >Venue</Typography>
                    <Typography color='#869478' variant='h4' fontFamily='"Great Vibes", cursive' >Our Lady of the Assumption Church   </Typography>

                    {/* <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Card>
                                <CardContent>
                                    <Stack gap={2}>
                                        <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#869478' }}>
                                            <LocationOn /> Ceremony
                                        </Typography>
                                        <Stack>
                                            <Typography><strong>Venue:</strong> The Garden Estate</Typography>
                                            <Typography><strong>Address:</strong> 1234 Riverside Drive, Greenville, CA 94523</Typography>
                                            <Typography><strong>Time:</strong> 3:00 PM - Ceremony begins promptly</Typography>
                                        </Stack>
                                        <Button
                                            variant="outlined"
                                            fullWidth
                                            sx={{ borderColor: '#869478', color: '#869478', gap: 1 }}
                                            onClick={() => window.open('https://maps.google.com', '_blank')}
                                        >
                                            <LocationOn /> View Map
                                        </Button>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card>
                                <CardContent>
                                    <Stack gap={2}>
                                        <Typography variant="h5" sx={{display: 'flex', alignItems: 'center', gap: 1, color: '#869478' }}>
                                            <FavoriteBorderIcon /> Reception
                                        </Typography>
                                        <Stack>
                                            <Typography><strong>Venue:</strong> The Garden Estate (same location as ceremony)</Typography>
                                            <Typography><strong>Time:</strong> 4:00 PM - Following ceremony</Typography>
                                            <Typography><strong>Details:</strong> Cocktail hour, dinner, and dancing to follow</Typography>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid> */}
                </Stack>
            </Container>
        </Box>

        {/* Wedding Schedule */}
        <Box id="schedule" py={8} px={2}>
            <Container maxWidth="lg">
                <Stack gap={4}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} textAlign="center">
                        <Stack gap={2}>
                            <Typography variant="h3" textAlign="center" sx={{ color: '#869478' }}>Schedule</Typography>
                            <Typography variant="body1" color="text.secondary" textAlign="center">
                            Here's what to expect on our special day
                            </Typography>
                        </Stack>
                    </motion.div>
                    <WeddingSchedule />
                </Stack>
            </Container>
        </Box>

        {/* RSVP */}
        <Box id="rsvp" py={8} px={2} bgcolor="white">
            <Container maxWidth="lg">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <Stack  textAlign="center">
                    <Typography variant="h3" sx={{ color: '#869478' }}>RSVP</Typography>
                    <Typography variant="body1" color="text.secondary">Please respond by June 1st, 2026</Typography>
                    <Typography variant="body2" color="text.secondary" >Were so grateful to have you on our story.</Typography>
                </Stack>
            </motion.div>
            <RSVPForm />
            </Container>
        </Box>

        {/* Our Story & Photos */}
        <Box id="story" py={8} px={2}>
            <Container maxWidth="lg">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} textAlign="center">
                <Typography variant="h3" sx={{color: '#869478' }}>Our Love Story</Typography>
            </motion.div>

            <Grid container spacing={4}>
                <Grid item xs={12}>
                <Card>
                    <CardContent>
                    <Typography variant="h5" sx={{ color: '#869478' }}>How We Met</Typography>
                    <Typography>
                        Our story began on a rainy Tuesday evening at a local coffee shop. James was reading a book, 
                        and Emma accidentally spilled her latte on his table. What could have been an awkward moment 
                        turned into hours of conversation and laughter. We've been inseparable ever since.
                    </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={12}>
                <Card>
                    <CardContent>
                    <Typography variant="h5" sx={{ color: '#869478' }}>The Proposal</Typography>
                    <Typography>
                        Three years later, James took Emma back to that same coffee shop. After ordering her usual latte, 
                        he got down on one knee right there where they first met. Of course, she said yes! (And this time, no coffee was spilled!)
                    </Typography>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>

            <PhotoGallery images={galleryImages} title="Our Journey Together" />

            <Typography variant="h4" textAlign="center" sx={{ color: '#869478' }}>Our Wedding Party</Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                    <Typography variant="h6" sx={{ textAlign: 'center', color: '#869478' }}>Bridesmaids</Typography>
                    <ul>
                        <li>Sarah Mitchell - Maid of Honor</li>
                        <li>Jessica Chen</li>
                        <li>Lauren Davis</li>
                        <li>Rachel Thompson</li>
                    </ul>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                    <Typography variant="h6" sx={{ textAlign: 'center', color: '#869478' }}>Groomsmen</Typography>
                    <ul>
                        <li>Michael Anderson - Best Man</li>
                        <li>David Park</li>
                        <li>Ryan Williams</li>
                        <li>Alex Martinez</li>
                    </ul>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
            </Container>
        </Box>

        {/* Travel & Accommodations */}
        <Box id="travel" py={8} px={2} bgcolor="white">
            <Container maxWidth="lg">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} textAlign="center">
                <Typography variant="h3" sx={{ color: '#869478' }}>Travel & Accommodations</Typography>
                <Typography variant="body1" color="text.secondary">Everything you need to know about getting here and where to stay</Typography>
            </motion.div>
            <AccommodationsSection />
            </Container>
        </Box>

        {/* Dress Code & Registry */}
        <Box py={8} px={2}>
            <Container maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                    <Typography variant="h5" sx={{color: '#869478' }}>Dress Code</Typography>
                    <Typography variant="body1">Semi-Formal / Garden Elegant</Typography>
                    <Typography>
                        <strong>For the Ladies:</strong> Cocktail dresses, elegant jumpsuits, or dressy separates. 
                        Consider the outdoor garden setting - wedges or block heels recommended!
                    </Typography>
                    <Typography>
                        <strong>For the Gentlemen:</strong> Suit and tie, or dress shirt with slacks. Sport coats are encouraged but not required.
                    </Typography>
                    <Typography variant="body2" sx={{fontStyle: 'italic' }}>Color palette suggestion: Soft pastels, sage green, cream, and earth tones</Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                {/* <Card>
                    <CardContent>
                    <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#869478' }}>
                        <CardGiftcard /> Registry
                    </Typography>
                    <Typography variant="body1">
                        Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, 
                        we have registered at the following locations:
                    </Typography>
                    <Button
                        variant="outlined"
                        fullWidth
                        sx={{ borderColor: '#869478', color: '#869478' }}
                        onClick={() => window.open('https://www.zola.com', '_blank')}
                    >
                        View Registry at Zola
                    </Button>
                    <Button
                        variant="outlined"
                        fullWidth
                        sx={{ borderColor: '#869478', color: '#869478' }}
                        onClick={() => window.open('https://www.crateandbarrel.com', '_blank')}
                    >
                        View Registry at Crate & Barrel
                    </Button>
                    <Typography variant="body2" sx={{ fontStyle: 'italic', textAlign: 'center' }}>
                        Contributions to our honeymoon fund are also greatly appreciated
                    </Typography>
                    </CardContent>
                </Card> */}
                </Grid>
            </Grid>
            </Container>
        </Box>

        {/* FAQs */}
        {/* <Box id="faqs" py={8} px={2} bgcolor="white">
            <Container maxWidth="lg">
            <FAQSection />
            </Container>
        </Box> */}

        {/* Extras */}
        {/* <Box py={8} px={2}>
            <Container maxWidth="lg">
            <Typography variant="h3" textAlign="center" sx={{ color: '#869478' }}>Additional Details</Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                    <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#869478' }}>
                        <Instagram /> Wedding Hashtag
                    </Typography>
                    <Typography variant="h4" textAlign="center" sx={{color: '#869478' }}>#EmmaAndJamesForever</Typography>
                    <Typography textAlign="center" color="text.secondary">Share your photos and memories using our hashtag!</Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                    <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#869478' }}>
                        <MusicNote /> Music Requests
                    </Typography>
                    <Typography sx={{ mb: 1 }}>
                        Help us create the perfect playlist! Share your song suggestions in the RSVP form or send them to our DJ directly.
                    </Typography>
                    <Typography variant="body2">Email: dj@weddingmusic.com</Typography>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
            </Container>
        </Box> */}

        {/* Guestbook */}
        <Box id="guestbook" py={8} px={2} bgcolor="white">
            <Container maxWidth="lg">
            <Guestbook />
            </Container>
        </Box>

        {/* Footer */}
        <Box py={8} px={2} textAlign="center">
            <Typography variant="body2" color="text.secondary">
            &copy; 2026 Emma & James. All rights reserved.
            </Typography>
        </Box>
        </Box>
    );
}
import { motion } from 'framer-motion';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { LocationOn } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Typography, Grid, Stack } from '@mui/material';
import { CountdownTimer } from "./CountDownTimer"
import { AccommodationsSection } from "./AccommodationsSection"
import { Guestbook } from "./Guestbook"
import { WeddingSchedule } from "./WeddingSchedule"
import { RSVPForm } from "./RSVPForm"
import { PhotoGallery } from './PhotoGallery';
import { FAQSection } from './FAQSection';
import { ImageWithFallback } from './ImageWithFallback';
import { Section } from './ui/Section';
import { SectionHeader } from './ui/SectionHeader';
import { SubsectionHeader } from './ui/SubsectionHeader';

export const Components = () => {
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

    const dateSideLabelSx = {
        borderBottom: '2px solid',
        borderTop: '2px solid',
        borderColor: 'primary.main',
        minWidth: { xs: 80, sm: 100 },
        px: 1,
        textAlign: 'center',
        fontSize: { xs: '0.75rem', sm: '0.875rem' },
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>

            {/* Navigation */}
            {/*  <Box
            component="nav"
            sx={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                backdropFilter: 'blur(6px)',
                bgcolor: 'rgba(255,255,255,0.8)',
                borderBottom: '1px solid',
                borderColor: 'primary.main',
            }}
        >
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="center" alignItems="center" minHeight={64} flexWrap="wrap" gap={1} py={1}>
                    <Box display="flex" flexWrap="wrap" gap={{ xs: 1, sm: 2, md: 4 }} justifyContent="center">
                    {['Home', 'Details', 'Schedule', 'RSVP', 'Story', 'Travel', 'FAQs', 'Guestbook'].map((item) => (
                        <Button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        color="primary"
                        sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
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
            <Box
                id="home"
                component="section"
                sx={{
                    position: 'relative',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: { xs: 2, sm: 3 },
                }}
            >
                <Box sx={{ position: 'absolute', inset: 0 }}>
                    <ImageWithFallback
                        src="https://png.pngtree.com/background/20220724/original/pngtree-watercolor-wedding-floral-background-with-white-roses-picture-image_1739501.jpg"
                        alt="Wedding couple"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
                    />
                </Box>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} style={{ zIndex: 1, width: '100%', maxWidth: 600 }}>
                    <Stack textAlign="center" alignItems='center' gap={{ xs: 4, md: 6 }}>
                        <Stack gap={{ xs: 2, md: 4 }}>
                            <Typography
                                color="primary"
                                sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' }, px: 2, letterSpacing: 1 }}
                            >
                                TOGETHER WITH THEIR FAMILIES
                            </Typography>
                            <Box
                                display='flex'
                                flexDirection={{ xs: 'column', sm: 'row' }}
                                gap={{ xs: 0.5, sm: 3 }}
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography variant="h1" color="primary"> Kim </Typography>
                                <Typography variant="h1" color="primary" sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '5rem' } }}> & </Typography>
                                <Typography variant="h1" color="primary"> Marie </Typography>
                            </Box>
                            <Typography
                                color="primary"
                                sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' }, px: 2, letterSpacing: 1 }}
                            >
                                INVITE YOU TO THEIR WEDDING
                            </Typography>
                        </Stack>
                        <Box
                            display='flex'
                            flexDirection={{ xs: 'column', sm: 'row' }}
                            gap={{ xs: 2, sm: 3 }}
                            alignItems='center'
                        >
                            <Typography color="primary" sx={dateSideLabelSx}>WEDNESDAY</Typography>
                            <Stack alignItems="center">
                                <Typography color="primary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>AUGUST</Typography>
                                <Typography
                                    variant='h2'
                                    color="primary"
                                    sx={{ fontSize: { xs: '2.5rem', md: '3.75rem' }, lineHeight: 1.1 }}
                                >
                                    12
                                </Typography>
                                <Typography color="primary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>2026</Typography>
                            </Stack>
                            <Typography color="primary" sx={dateSideLabelSx}>2:00 PM</Typography>
                        </Box>
                        <Typography color="primary" sx={{ px: 2, fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                            PALAPAG, NORTHERN SAMAR
                        </Typography>

                        {/* <Button
                    onClick={() => scrollToSection('rsvp')}
                    variant="contained"
                    color="primary"
                    sx={{ fontSize: '1.125rem', px: 4 }}
                    >
                    RSVP Now
                    </Button> */}
                        {/* <motion.div onClick={() => scrollToSection('rsvp')} animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
                        <ExpandMore sx={{ fontSize: 40, color: 'primary.main' }} />
                    </motion.div> */}
                    </Stack>
                </motion.div>
            </Box>

            {/* Countdown */}
            <Section sx={{ py: { xs: 3, md: 5 } }} maxWidth={false}>
                <CountdownTimer targetDate={weddingDate} />
            </Section>

            {/* Ceremony Details */}
            <Section id="details" bgcolor="background.paper">
                <Stack gap={4} alignItems='center'>
                    <SectionHeader
                        title="Venue"
                        tagline="Our Lady of the Assumption Church"
                        sx={{ mb: { xs: 3, md: 4 } }}
                    />

                    <Grid container spacing={4} justifyContent="center" width="100%">

                        {/* Ceremony */}
                        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                            <Card
                                elevation={3}
                                sx={{
                                    width: "100%",
                                    border: "1px solid rgba(134,148,120,0.15)",
                                }}
                            >
                                <CardContent>
                                    <Stack spacing={2.5}>
                                        <SubsectionHeader
                                            title="Ceremony"
                                            variant="card"
                                            align="left"
                                            icon={<LocationOn fontSize="small" sx={{ color: 'primary.main' }} />}
                                            sx={{ mb: 0 }}
                                        />

                                        <Stack spacing={1} color="text.secondary">
                                            <Typography>
                                                <strong>Venue:</strong> The Garden Estate
                                            </Typography>
                                            <Typography>
                                                <strong>Address:</strong> 1234 Riverside Drive, Greenville, CA 94523
                                            </Typography>
                                            <Typography>
                                                <strong>Time:</strong> 3:00 PM
                                            </Typography>
                                        </Stack>

                                        <Button
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            sx={{ mt: 1 }}
                                            onClick={() =>
                                                window.open("https://maps.google.com", "_blank")
                                            }
                                        >
                                            View Map
                                        </Button>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Reception */}
                        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                            <Card
                                elevation={3}
                                sx={{
                                    width: "100%",
                                    border: "1px solid rgba(134,148,120,0.15)",
                                }}
                            >
                                <CardContent>
                                    <Stack spacing={2.5}>
                                        <SubsectionHeader
                                            title="Reception"
                                            variant="card"
                                            align="left"
                                            icon={<FavoriteBorderIcon fontSize="small" sx={{ color: 'primary.main' }} />}
                                            sx={{ mb: 0 }}
                                        />

                                        <Stack spacing={1} color="text.secondary">
                                            <Typography>
                                                <strong>Venue:</strong> The Garden Estate
                                            </Typography>
                                            <Typography>
                                                <strong>Time:</strong> 4:00 PM
                                            </Typography>
                                            <Typography>
                                                <strong>Details:</strong> Dinner, drinks, and dancing
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Stack>
            </Section>

            {/* Wedding Schedule */}
            {/* <Section id="schedule">
                <Stack gap={4}>
                    <SectionHeader
                        title="Schedule"
                        subtitle="Here's what to expect on our special day"
                    />
                    <WeddingSchedule />
                </Stack>
            </Section> */}

            {/* RSVP */}
            <Section id="rsvp" bgcolor="background.paper">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <SectionHeader
                        title="RSVP"
                        subtitle="Please respond by August 1, 2026"
                    />
                    <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mt: -4, mb: 4 }}>
                        Were so grateful to have you on our story.
                    </Typography>
                </motion.div>
                <RSVPForm />
            </Section>

            {/* Our Story & Photos */}
            <Section id="story">
                <Box sx={{ maxWidth: 1000, mx: "auto", width: '100%' }}>
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeader title="Our Love Story" />
                    </Box>

                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Card sx={{ p: { xs: 1, sm: 2 } }}>
                                <CardContent>
                                    <SubsectionHeader title="How We Met" variant="card" align="left" sx={{ mb: 1 }} />
                                    <Typography color="text.primary" sx={{ lineHeight: 1.8 }}>
                                        Our story began on a rainy Tuesday evening at a local coffee shop.
                                        James was reading a book, and Emma accidentally spilled her latte on his table.
                                        What could have been an awkward moment turned into hours of conversation and laughter.
                                        We've been inseparable ever since.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <Card sx={{ p: { xs: 1, sm: 2 } }}>
                                <CardContent>
                                    <SubsectionHeader title="The Proposal" variant="card" align="left" sx={{ mb: 1 }} />
                                    <Typography color="text.primary" sx={{ lineHeight: 1.8 }}>
                                        Three years later, James took Emma back to that same coffee shop.
                                        After ordering her usual latte, he got down on one knee right there where they first met.
                                        Of course, she said yes! (And this time, no coffee was spilled!)
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

                <PhotoGallery images={galleryImages} title="Our Journey Together" />

                <SectionHeader title="Our Wedding Party" compact sx={{ mt: 4 }} />
                <Grid container spacing={4} justifyContent="center">
                    {/* Bridesmaids */}
                    <Grid item xs={12} md={6}>
                        <Card sx={{ height: "100%" }}>
                            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                                <SubsectionHeader title="Bridesmaids" variant="card" sx={{ mb: 2 }} />
                                <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                                    {[
                                        "Sarah Mitchell - Maid of Honor",
                                        "Jessica Chen",
                                        "Lauren Davis",
                                        "Rachel Thompson",
                                    ].map((name, i) => (
                                        <Box
                                            component="li"
                                            key={i}
                                            sx={{
                                                py: 0.8,
                                                px: 1,
                                                borderRadius: 1,
                                                color: "text.primary",
                                                "&:hover": { bgcolor: "#f5f7f4" },
                                            }}
                                        >
                                            {name}
                                        </Box>
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Groomsmen */}
                    <Grid item xs={12} md={6}>
                        <Card sx={{ height: "100%" }}>
                            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                                <SubsectionHeader title="Groomsmen" variant="card" sx={{ mb: 2 }} />
                                <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                                    {[
                                        "Michael Anderson - Best Man",
                                        "David Park",
                                        "Ryan Williams",
                                        "Alex Martinez",
                                    ].map((name, i) => (
                                        <Box
                                            component="li"
                                            key={i}
                                            sx={{
                                                py: 0.8,
                                                px: 1,
                                                borderRadius: 1,
                                                color: "text.primary",
                                                "&:hover": { bgcolor: "#f5f7f4" },
                                            }}
                                        >
                                            {name}
                                        </Box>
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Section>

            {/* Travel & Accommodations */}
            <Section id="travel" bgcolor="background.paper">
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <SectionHeader
                        title="Travel & Accommodations"
                        subtitle="Everything you need to know about getting here and where to stay"
                    />
                </Box>
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <AccommodationsSection />
                </Box>
            </Section>

            {/* Dress Code & Registry */}
            <Section bgcolor="#fafafa" maxWidth="md">
                <SectionHeader title="Wedding Details" compact sx={{ mb: 2 }} />

                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
                        <Card
                            elevation={2}
                            sx={{ width: "100%", maxWidth: 420 }}
                        >
                            <CardContent>
                                <Stack spacing={2.5}>
                                    <SubsectionHeader title="Dress Code" variant="card" sx={{ mb: 0, justifyContent: 'center' }} />
                                    <Typography variant="body1" textAlign="center">
                                        Semi-Formal / Garden Elegant
                                    </Typography>
                                    <Stack spacing={0.5}>
                                        <Typography variant="subtitle2" fontWeight={600}>
                                            For the Ladies:
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Cocktail dresses, elegant jumpsuits, or dressy separates.
                                            Wedges or block heels recommended for outdoor setting.
                                        </Typography>
                                    </Stack>
                                    <Stack spacing={0.5}>
                                        <Typography variant="subtitle2" fontWeight={600}>
                                            For the Gentlemen:
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Suit and tie, or dress shirt with slacks. Sport coats are optional.
                                        </Typography>
                                    </Stack>
                                    <Typography variant="body2" fontStyle="italic" color="text.secondary" textAlign="center">
                                        Soft pastels, sage green, cream, and earth tones
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Section>

            {/* FAQs */}
            {/* <Section id="faqs" bgcolor="background.paper">
                <FAQSection />
            </Section> */}

            {/* Guestbook */}
            <Section id="guestbook" bgcolor="background.paper">
                <SectionHeader title="Guestbook" compact />
                <Guestbook />
            </Section>

            {/* Footer */}
            {/* <Box py={{ xs: 5, md: 8 }} px={2} textAlign="center">
                <Typography variant="body2" color="text.secondary">
                    &copy; 2026 Kim & Marie. All rights reserved.
                </Typography>
            </Box> */}
        </Box>
    );
}

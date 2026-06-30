import React, { useState } from 'react';
import { Box, Button, Typography, Paper, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { SubsectionHeader } from './ui/SubsectionHeader';
// import { toast } from 'sonner';

export const Guestbook = () => {
    const [entries, setEntries] = useState([
        {
            name: 'Marie & Kim',
            message: 'Congratulations! We are so happy for you both. Wishing you a lifetime of love and happiness!',
            timestamp: new Date('2026-02-20'),
        },
        {
            name: 'The Laguitan Family',
            message: 'What a beautiful couple! May your marriage be filled with joy, laughter, and endless love.',
            timestamp: new Date('2026-02-22'),
        },
    ]);


    return (
        <Box
            maxWidth="md"
            mx="auto"
            display="flex"
            flexDirection="column"
            gap={{ xs: 4, md: 6 }}
        >

            {/* FORM SECTION */}
            <Paper
                sx={{
                    p: { xs: 2.5, sm: 4 },
                    bgcolor: 'background.default',
                }}
            >
                <Stack spacing={3}>

                    <SubsectionHeader
                        title="Leave a Message"
                        variant="subsection"
                        align="left"
                        icon={<FavoriteIcon sx={{ color: 'primary.main' }} />}
                        sx={{ mb: 0 }}
                    />

                    {/* Form */}
                    <Box
                        component="form"
                        display="flex"
                        flexDirection="column"
                        gap={3}
                    >

                        {/* (your inputs stay here) */}

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ py: 1.2, fontWeight: 500 }}
                        >
                            Post Message
                        </Button>
                    </Box>
                </Stack>
            </Paper>

            {/* ENTRIES SECTION */}
            <Box>
                <SubsectionHeader title="Guest Messages" align="left" sx={{ mb: 1 }} />

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Messages from your loved ones
                </Typography>

                <Stack spacing={2}>
                    {entries.map((entry, index) => (
                        <Paper
                            key={index}
                            elevation={0}
                            sx={{
                                p: { xs: 2, sm: 3 },
                                bgcolor: 'background.paper',
                                border: '1px solid rgba(134,148,120,0.2)',
                            }}
                        >
                            <Stack spacing={1.5}>

                                {/* Header row */}
                                <Stack
                                    direction={{ xs: 'column', sm: 'row' }}
                                    justifyContent="space-between"
                                    alignItems={{ xs: 'flex-start', sm: 'center' }}
                                    gap={0.5}
                                >
                                    <Typography fontWeight={600} color="primary">
                                        {entry.name}
                                    </Typography>

                                    <Typography variant="caption" color="text.secondary">
                                        {entry.timestamp.toLocaleDateString()}
                                    </Typography>
                                </Stack>

                                {/* Message */}
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ lineHeight: 1.6 }}
                                >
                                    {entry.message}
                                </Typography>

                            </Stack>
                        </Paper>
                    ))}
                </Stack>
            </Box>

        </Box>
    );
}

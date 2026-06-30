import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
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
            gap={6}
        >

            {/* FORM SECTION */}
            <Paper
                sx={{
                    p: 4,
                    borderRadius: 3,
                    backgroundColor: "#E4E2E0",
                }}
            >
                <Stack spacing={3}>

                    {/* Header */}
                    <Stack direction="row" alignItems="center" gap={1}>
                        <FavoriteIcon sx={{ color: "#869478" }} />
                        <Typography
                            variant="h6"
                            sx={{ color: "#869478", fontWeight: 600 }}
                        >
                            Leave a Message
                        </Typography>
                    </Stack>

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
                            sx={{
                                backgroundColor: "#869478",
                                color: "#E4E2E0",
                                borderRadius: 2,
                                py: 1.2,
                                fontWeight: 500,
                                "&:hover": {
                                    backgroundColor: "#6f7b66",
                                },
                            }}
                        >
                            Post Message
                        </Button>
                    </Box>
                </Stack>
            </Paper>

            {/* ENTRIES SECTION */}
            <Box>
                <Stack spacing={1} mb={2}>
                    <Typography
                        variant="h6"
                        sx={{ color: "#869478", fontWeight: 600 }}
                    >
                        Guest Messages
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        Messages from your loved ones
                    </Typography>
                </Stack>

                <Stack spacing={2}>
                    {entries.map((entry, index) => (
                        <Paper
                            key={index}
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: 3,
                                backgroundColor: "#fff",
                                border: "1px solid rgba(134,148,120,0.2)",
                            }}
                        >
                            <Stack spacing={1.5}>

                                {/* Header row */}
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Typography
                                        fontWeight={600}
                                        sx={{ color: "#869478" }}
                                    >
                                        {entry.name}
                                    </Typography>

                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                    >
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
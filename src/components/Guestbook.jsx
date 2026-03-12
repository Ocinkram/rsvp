import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import { toast } from 'sonner';

export const Guestbook =() => {
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
    <Box maxWidth="4xl" mx="auto" display="flex" flexDirection="column" gap={8}>
      
      {/* Form Section */}
      <Paper sx={{ p: 4, borderRadius: 2, backgroundColor: '#E4E2E0' }}>
        <Stack direction="row" alignItems="center" gap={1} mb={3}>
          <FavoriteIcon sx={{ color: '#869478' }} />
          <Typography variant="h6" sx={{ color: '#869478' }}>
            Leave a Message
          </Typography>
        </Stack>

        <Box component="form"  display="flex" flexDirection="column" gap={3}>
          {/* Name Field */}
          {/* <Controller
            name="name"
            control={control}
            rules={{ required: 'Name is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Your Name *"
                variant="outlined"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={{ backgroundColor: 'white' }}
              />
            )}
          /> */}

          {/* Message Field */}
          {/* <Controller
            name="message"
            control={control}
            rules={{ required: 'Message is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Message *"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                error={!!errors.message}
                helperText={errors.message?.message}
                sx={{ backgroundColor: 'white' }}
              />
            )}
          /> */}

          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: '#869478', color: '#E4E2E0', '&:hover': { backgroundColor: '#6f7b66' } }}
          >
            Post Message
          </Button>
        </Box>
      </Paper>

      {/* Entries Section */}
      <Box display="flex" flexDirection="column" gap={3}>
        <Typography variant="h6" sx={{ color: '#869478' }}>
          Guest Messages
        </Typography>

        <Stack spacing={2}>
          {entries.map((entry, index) => (
            <Paper
              key={index}
              sx={{ p: 3, borderRadius: 2, border: '1px solid', borderColor: '#869478' }}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={1}>
                <Typography fontWeight={500} sx={{ color: '#869478' }}>
                  {entry.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {entry.timestamp.toLocaleDateString()}
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.primary">
                {entry.message}
              </Typography>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
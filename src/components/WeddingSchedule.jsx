import React from 'react';
import {
  Box,
  Stack,
  Typography,
  Avatar,
  Container,
} from '@mui/material';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

export const WeddingSchedule =() => {
  const scheduleItems = [
    {
      time: '3:00 PM',
      title: 'Ceremony',
      description: 'Join us as we exchange vows',
      icon: <AccessTimeIcon />,
    },
    {
      time: '4:00 PM',
      title: 'Cocktail Hour',
      description: "Enjoy drinks and hors d'oeuvres",
      icon: <LocalCafeIcon />,
    },
    {
      time: '5:50 PM',
      title: 'Reception & Dinner',
      description: 'Celebrate with dinner and toasts',
      icon: <RestaurantIcon />,
    },
    {
      time: '7:30 PM',
      title: 'Dancing',
      description: 'Hit the dance floor!',
      icon: <MusicNoteIcon />,
    },
    {
      time: '9:00 PM',
      title: 'Photo Booth',
      description: 'Capture fun memories',
      icon: <PhotoCameraIcon />,
    },
  ];

  return (
    <Container maxWidth="md">
      <Stack spacing={4}>
        {scheduleItems.map((item, index) => (
          <Stack
            key={index}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems={{ xs: 'center', sm: 'flex-start' }}
            textAlign={{ xs: 'center', sm: 'left' }}
          >
            <Avatar
              sx={{
                width: 48,
                height: 48,
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
              }}
            >
              {item.icon}
            </Avatar>

            <Box flex={1}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 0.5, sm: 2 }}
                alignItems={{ xs: 'center', sm: 'baseline' }}
              >
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ fontWeight: 500 }}
                >
                  {item.time}
                </Typography>

                <Typography variant="h6">
                  {item.title}
                </Typography>
              </Stack>

              {item.description && (
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', mt: 0.5 }}
                >
                  {item.description}
                </Typography>
              )}
            </Box>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
}

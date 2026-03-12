import React from 'react';
import { Hotel as HotelIcon, LocationOn, DirectionsCar, DirectionsBus } from '@mui/icons-material';
import { Card, CardContent, Typography, Box, Grid, Chip, Stack } from '@mui/material';

export const AccommodationsSection =() => {
  const hotels = [
    {
      name: 'The Grand Hotel',
      distance: '0.5 miles from venue',
      phone: '(555) 123-4567',
      hasBlock: true,
    },
    {
      name: 'Riverside Inn',
      distance: '1.2 miles from venue',
      phone: '(555) 234-5678',
      hasBlock: true,
    },
    {
      name: 'Comfort Suites',
      distance: '2.0 miles from venue',
      phone: '(555) 345-6789',
      hasBlock: false,
    },
  ];

  return (
    <Box maxWidth="4xl" mx="auto" display="flex" flexDirection="column" gap={8}>
      {/* Hotels Section */}
      <Box display="flex" flexDirection="column" gap={4}>
        <Stack direction="row" alignItems="center" gap={1}>
          <HotelIcon sx={{ color: '#869478', fontSize: 20 }} />
          <Typography variant="h6" sx={{ color: '#869478' }}>
            Recommended Hotels
          </Typography>
        </Stack>

        <Grid container spacing={2}>
          {hotels.map((hotel, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ p: 2 }}>
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="subtitle1" fontWeight={500} mb={1}>
                    {hotel.name}
                  </Typography>

                  {hotel.hasBlock && (
                    <Chip
                      label="Guest Block Available"
                      size="small"
                      sx={{ backgroundColor: '#869478', color: '#E4E2E0', mb: 1 }}
                    />
                  )}

                  <Stack direction="row" alignItems="center" gap={0.5} mt={1}>
                    <LocationOn sx={{ fontSize: 16, color: 'gray' }} />
                    <Typography variant="body2" color="text.secondary">
                      {hotel.distance}
                    </Typography>
                  </Stack>

                  <Typography variant="body2" color="text.secondary" mt={0.5}>
                    Phone: {hotel.phone}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="body2" color="text.secondary" fontStyle="italic">
          Mention "Smith-Johnson Wedding" when booking to access our guest block rates.
        </Typography>
      </Box>

      {/* Travel Info Section */}
      <Box display="flex" flexDirection="column" gap={4}>
        <Stack direction="row" alignItems="center" gap={1}>
          <DirectionsCar sx={{ color: '#869478', fontSize: 20 }} />
          <Typography variant="h6" sx={{ color: '#869478' }}>
            Getting There
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <Card sx={{ p: 2 }}>
            <CardContent sx={{ p: 0 }}>
              <Typography variant="subtitle1" fontWeight={500} mb={1}>
                By Car
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Free parking is available at the venue. Enter via Main Street entrance.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ p: 2 }}>
            <CardContent sx={{ p: 0 }}>
              <Stack direction="row" alignItems="center" gap={1} mb={1}>
                <DirectionsBus sx={{ fontSize: 16, color: 'gray' }} />
                <Typography variant="subtitle1" fontWeight={500}>
                  Shuttle Service
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                Complimentary shuttle service will run between The Grand Hotel and Riverside Inn to the venue.
                Pickups begin at 2:30 PM, with returns available until midnight.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ p: 2 }}>
            <CardContent sx={{ p: 0 }}>
              <Typography variant="subtitle1" fontWeight={500} mb={1}>
                From Airport
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The venue is approximately 25 minutes from City International Airport.
                Rideshare and taxi services are readily available.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </Box>
  );
}
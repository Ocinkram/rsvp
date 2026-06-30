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
     <Box
      sx={{
        maxWidth: 1100,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        py: 6,
        px: 2,
      }}
    >
      {/* ================= HOTELS ================= */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>

        <Stack direction="row" alignItems="center" gap={1}>
          <HotelIcon sx={{ color: "#869478", fontSize: 22 }} />
          <Typography variant="h6" sx={{ color: "#869478", fontWeight: 600 }}>
            Recommended Hotels
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {hotels.map((hotel, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  p: 2,
                  borderRadius: 3,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                  height: "100%",
                  transition: "0.2s",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <CardContent sx={{ p: 1.5 }}>

                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    sx={{ mb: 1 }}
                  >
                    {hotel.name}
                  </Typography>

                  {hotel.hasBlock && (
                    <Chip
                      label="Guest Block Available"
                      size="small"
                      sx={{
                        backgroundColor: "#869478",
                        color: "#fff",
                        mb: 1.5,
                        fontWeight: 500,
                      }}
                    />
                  )}

                  <Stack direction="row" alignItems="center" gap={0.5} mb={0.5}>
                    <LocationOn sx={{ fontSize: 16, color: "gray" }} />
                    <Typography variant="body2" color="text.secondary">
                      {hotel.distance}
                    </Typography>
                  </Stack>

                  <Typography variant="body2" color="text.secondary">
                    Phone: {hotel.phone}
                  </Typography>

                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          Mention "Smith-Johnson Wedding" when booking to access guest block rates.
        </Typography>
      </Box>

      {/* ================= TRAVEL ================= */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>

        <Stack direction="row" alignItems="center" gap={1}>
          <DirectionsCar sx={{ color: "#869478", fontSize: 22 }} />
          <Typography variant="h6" sx={{ color: "#869478", fontWeight: 600 }}>
            Getting There
          </Typography>
        </Stack>

        <Stack spacing={3}>

          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight={600} mb={1}>
                By Car
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Free parking is available at the venue. Enter via Main Street entrance.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={cardStyle}>
            <CardContent>

              <Stack direction="row" alignItems="center" gap={1} mb={1}>
                <DirectionsBus sx={{ fontSize: 18, color: "gray" }} />
                <Typography variant="subtitle1" fontWeight={600}>
                  Shuttle Service
                </Typography>
              </Stack>

              <Typography variant="body2" color="text.secondary">
                Complimentary shuttle service runs between hotels and the venue.
                Pickups start at 2:30 PM and return until midnight.
              </Typography>

            </CardContent>
          </Card>

          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight={600} mb={1}>
                From Airport
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The venue is ~25 minutes from City International Airport.
                Rideshare and taxis are readily available.
              </Typography>
            </CardContent>
          </Card>

        </Stack>
      </Box>
    </Box>
  );
}

const cardStyle = {
  borderRadius: 3,
  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
}
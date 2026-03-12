import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  Box,
  Stack,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Button,
  Alert,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const RSVPForm =() => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('RSVP Data:', data);
    setIsSubmitted(true);
    reset();

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <Container maxWidth="sm">
        <Stack
          spacing={3}
          alignItems="center"
          justifyContent="center"
          py={8}
          textAlign="center"
        >
          <CheckCircleIcon sx={{ fontSize: 64, color: '#869478' }} />

          <Typography variant="h4" sx={{ color: '#869478' }}>
            Thank You!
          </Typography>

          <Typography variant="body1" maxWidth={400}>
            Your RSVP has been received. We can't wait to celebrate with you!
          </Typography>

          <Alert severity="success" sx={{ width: '100%' }}>
            RSVP submitted successfully
          </Alert>
        </Stack>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ mt: 4 }}
      >
        <Stack spacing={4}>
          {/* Name */}
          <TextField
            label="Full Name *"
            placeholder="John Doe"
            fullWidth
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          {/* Email */}
          <TextField
            label="Email *"
            type="email"
            placeholder="john@example.com"
            fullWidth
            {...register('email', { required: 'Email is required' })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          {/* Attending */}
          <FormControl error={!!errors.attending}>
            <FormLabel>Will you be attending? *</FormLabel>
            <RadioGroup row defaultValue="yes">
              <FormControlLabel
                value="yes"
                control={<Radio {...register('attending', { required: true })} />}
                label="Joyfully Accept"
              />
              <FormControlLabel
                value="no"
                control={<Radio {...register('attending', { required: true })} />}
                label="Regretfully Decline"
              />
            </RadioGroup>
          </FormControl>

          {/* Number of Guests */}
          <TextField
            label="Number of Guests *"
            type="number"
            inputProps={{ min: 1, max: 10 }}
            placeholder="2"
            fullWidth
            {...register('numberOfGuests', {
              required: 'Number of guests is required',
            })}
            error={!!errors.numberOfGuests}
            helperText={errors.numberOfGuests?.message}
          />

          {/* Meal Preference */}
          <FormControl fullWidth>
            <FormLabel>Meal Preference</FormLabel>
            <Select
              defaultValue=""
              {...register('mealPreference')}
            >
              <MenuItem value="">Select a preference</MenuItem>
              <MenuItem value="chicken">Chicken</MenuItem>
              <MenuItem value="beef">Beef</MenuItem>
              <MenuItem value="fish">Fish</MenuItem>
              <MenuItem value="vegetarian">Vegetarian</MenuItem>
              <MenuItem value="vegan">Vegan</MenuItem>
            </Select>
          </FormControl>

          {/* Dietary Restrictions */}
          <TextField
            label="Dietary Restrictions"
            placeholder="Any allergies or dietary needs?"
            fullWidth
            {...register('dietaryRestrictions')}
          />

          {/* Message */}
          <TextField
            label="Message for the Couple"
            placeholder="Share your well wishes..."
            multiline
            rows={4}
            fullWidth
            {...register('message')}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            sx={{
              bgcolor: '#869478',
              color: '#E4E2E0',
              '&:hover': {
                bgcolor: '#6f7c61',
              },
            }}
          >
            Submit RSVP
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
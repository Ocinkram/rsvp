import React from 'react';
import {
  Container,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export const FAQSection = () => {
  const faqs = [
    {
      question: 'What is the dress code?',
      answer:
        'The dress code is semi-formal. Ladies, feel free to wear cocktail dresses or elegant separates. Gentlemen, a suit and tie or dress shirt with slacks would be perfect.',
    },
    {
      question: 'Are children welcome?',
      answer:
        'We love your little ones, but our wedding will be an adults-only celebration. We hope this gives you a chance to enjoy a night off and celebrate with us!',
    },
    {
      question: 'Can I bring a plus one?',
      answer:
        'Due to limited capacity, we are only able to accommodate guests formally invited on your invitation. If you received a plus one, it will be indicated on your invitation.',
    },
    {
      question: 'Will the ceremony be indoors or outdoors?',
      answer:
        'The ceremony will be held outdoors in the garden, weather permitting. In case of inclement weather, we have a beautiful indoor backup location ready.',
    },
    {
      question: 'What are the COVID-19 safety measures?',
      answer:
        'The health and safety of our guests is our top priority. We are following all local guidelines and encourage guests to be vaccinated. Hand sanitizing stations will be available throughout the venue.',
    },
    {
      question: 'Is there parking available?',
      answer:
        'Yes, complimentary parking is available at the venue. There is also valet service available for your convenience.',
    },
    {
      question: 'When should I RSVP by?',
      answer:
        'Please RSVP by June 1st, 2026 so we can provide an accurate headcount to our caterer and venue.',
    },
    {
      question: 'Who can I contact if I have questions?',
      answer:
        'For any questions, please contact our wedding coordinator, Emily Stevens, at emily@weddingplanner.com or call (555) 987-6543.',
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{ mb: 4 }}
      >
        <HelpOutlineIcon sx={{ color: '#869478' }} />
        <Typography variant="h4" sx={{ color: '#869478' }}>
          Frequently Asked Questions
        </Typography>
      </Stack>

      {faqs.map((faq, index) => (
        <Accordion key={index} disableGutters elevation={1}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={500}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};
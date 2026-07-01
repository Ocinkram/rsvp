import React from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { SectionHeader } from './ui/SectionHeader';

export const FAQSection = () => {

  const faqs = [
    {
      question: 'What is the dress code?',
      answer: (
        <Typography component="span">
          The dress code is semi-formal, with{' '}
          <Typography component="span" sx={{ color: 'olive', fontWeight: 900 }}>
            olive green
          </Typography>{' '}
          as the preferred color theme. Ladies, feel free to wear cocktail dresses
          or elegant separates in{' '}
          <Typography component="span" sx={{ color: 'olive', fontWeight: 900 }}>
            olive green
          </Typography>{' '}
          or complementary neutral tones. Gentlemen, a suit and tie or a dress
          shirt with slacks in{' '}
          <Typography component="span" sx={{ color: 'olive', fontWeight: 900 }}>
            olive green
          </Typography>{' '}
          accents or coordinating colors would be perfect.
        </Typography>
      ),
    },
    {
      question: 'Are children welcome?',
      answer:
        'Yes, children are welcome. We look forward to celebrating with your family!',
    },
    {
      question: 'Can I bring a plus one?',
      answer:
        'Due to limited capacity, we are only able to accommodate guests formally invited on your invitation. If you received a plus one, it will be indicated on your invitation.',
    },
    // {
    //   question: 'Will the ceremony be indoors or outdoors?',
    //   answer:
    //     'The ceremony will be held outdoors in the garden, weather permitting. In case of inclement weather, we have a beautiful indoor backup location ready.',
    // },
    // {
    //   question: 'What are the COVID-19 safety measures?',
    //   answer:
    //     'The health and safety of our guests is our top priority. We are following all local guidelines and encourage guests to be vaccinated. Hand sanitizing stations will be available throughout the venue.',
    // },
    // {
    //   question: 'Is there parking available?',
    //   answer:
    //     'Yes, complimentary parking is available at the venue. There is also valet service available for your convenience.',
    // },
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
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
      <SectionHeader
        title="Frequently Asked Questions"
        icon={<HelpOutlineIcon sx={{ fontSize: 28, color: 'primary.main' }} />}
      />

      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          disableGutters
          elevation={1}
          sx={{ mb: 1, borderRadius: 2, '&:before': { display: 'none' } }}
        >
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

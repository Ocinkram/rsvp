import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { SectionHeader } from './ui/SectionHeader';
import { StaggerItem, StaggerOnView } from './ui/AnimateOnView';

export const FAQSection = () => {

  const faqs = [
    {
      question: 'What is the dress code?',
      answer: (
        <Typography component="span">
          The dress code is semi-formal, with{' '}
          <Typography component="span" sx={{ fontWeight: 900 }}>
            olive green
          </Typography>{' '}
          as the preferred color theme. Ladies, feel free to wear cocktail dresses
          or elegant separates in{' '}
          <Typography component="span" sx={{ fontWeight: 900 }}>
            olive green
          </Typography>{' '}
          or complementary neutral tones. Gentlemen, a suit and tie or a dress
          shirt with slacks in{' '}
          <Typography component="span" sx={{ fontWeight: 900 }}>
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
    <>
      <SectionHeader
        title="Frequently Asked Questions"
        icon={<HelpOutlineIcon sx={{ fontSize: 28, color: 'primary.main' }} />}
      />

      <StaggerOnView stagger={0.08}>
        {faqs.map((faq, index) => (
          <StaggerItem key={index}>
            <Accordion
              disableGutters
              elevation={1}
              sx={{
                mb: 1,
                overflow: "hidden",
                "&:before": { display: "none" },
                "&.MuiPaper-root": {
                  borderRadius: "16px",
                },
              }}
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
          </StaggerItem>
        ))}
      </StaggerOnView>
    </>
  );
};

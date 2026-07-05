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
                <Typography component="div" color="text.secondary">
                    The dress code is semi-formal, with <strong>olive green</strong> as the preferred color theme.
                </Typography>
            ),
        },
        {
            question: 'Are children welcome?',
            answer: 'Yes, children are welcome. We look forward to celebrating with your family!',
        },
        {
            question: 'Can I bring a plus one?',
            answer:
                'Due to limited capacity, we are only able to accommodate guests formally invited on your invitation.',
        },
        {
            question: 'When should I RSVP by?',
            answer:
                'Please RSVP by June 1st, 2026 so we can provide an accurate headcount.',
        },
        {
            question: 'Who can I contact if I have questions?',
            answer:
                'Contact our wedding coordinator at emily@weddingplanner.com.',
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
                        
                        {/* IMPORTANT WRAPPER FIX */}
                        <div style={{ width: '100%' }}>
                            
                            <Accordion
                                disableGutters
                                elevation={0}
                                sx={{
                                    mb: 1.2,
                                    width: '100%',
                                    borderRadius: '16px',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    overflow: 'hidden',
                                    backgroundColor: 'background.paper',
                                    transition: 'box-shadow 0.25s ease',
                                    '&:before': { display: 'none' },

                                    '&.Mui-expanded': {
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                    },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    sx={{
                                        px: 2,
                                        py: 1.2,
                                        '& .MuiAccordionSummary-content': {
                                            margin: 0,
                                        },
                                    }}
                                >
                                    <Typography fontWeight={600}>
                                        {faq.question}
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails sx={{ px: 2, pb: 2, pt: 0 }}>
                                    {typeof faq.answer === 'string' ? (
                                        <Typography color="text.secondary">
                                            {faq.answer}
                                        </Typography>
                                    ) : (
                                        faq.answer
                                    )}
                                </AccordionDetails>
                            </Accordion>

                        </div>
                    </StaggerItem>
                ))}
            </StaggerOnView>
        </>
    );
};
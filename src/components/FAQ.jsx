import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const faqs = [
    { question: 'How do I use Griffin pre-workout?', answer: 'Mix one scoop with water and consume 30 minutes before your workout.' },
    { question: 'Are there any side effects?', answer: 'Griffin is formulated to be safe, but consult your doctor if you have any concerns.' },
    { question: 'Can I use Griffin daily?', answer: 'Yes, it can be used daily, but it’s important to follow the recommended dose.' },
  ];

  return (
    <Box sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;

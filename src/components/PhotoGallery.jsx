import React from 'react';
import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Container,
} from '@mui/material';

  const images = [
    'https://images.unsplash.com/photo-1768468105374-08185b172342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMGVuZ2FnZW1lbnQlMjBvdXRkb29yfGVufDF8fHx8MTc3MjAyMjA1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1702456473497-2958d73adc80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBsYXVnaGluZyUyMGhhcHB5JTIwbW9tZW50c3xlbnwxfHx8fDE3NzIwMjIwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1766113488429-861f1a7775f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGFydHklMjBicmlkZXNtYWlkcyUyMGdyb29tc21lbnxlbnwxfHx8fDE3NzIwMjIwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1762216444919-043cf813e4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjBnYXJkZW4lMjBvdXRkb29yfGVufDF8fHx8MTc3MjAyMjA1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1761120789207-c08a10afb864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwdmVudWUlMjBlbGVnYW50fGVufDF8fHx8MTc3MjAyMjA1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1761574044344-394d47e1a96c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNlcmVtb255JTIwY291cGxlfGVufDF8fHx8MTc3MTkxOTA5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  ];

export const PhotoGallery = ({ title = 'our journey together' }) => {
  return (
    <Box sx={{ py: 4 }}>
      {title && (
        <Typography
          variant="h4"
          align="center"
          sx={{ color: '#869478', mb: 4 }}
        >
          {title}
        </Typography>
      )}

      <Container maxWidth="lg">
        <ImageList
          variant="masonry"
          cols={3}
          gap={16}
        >
          {images.map((image, index) => (
            <ImageListItem
              key={index}
              sx={{
                overflow: 'hidden',
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <Box
                component="img"
                src={image}
                alt={`Gallery image ${index + 1}`}
                loading="lazy"
                sx={{
                  width: '100%',
                  display: 'block',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Box>
  );
}
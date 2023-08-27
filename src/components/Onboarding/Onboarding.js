import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Onboarding({getStarted}) {
  return (
    <Container component="main" maxWidth="xs" sx={{ minHeight: '100vh', p: 3, alignItems: 'center', display: 'flex', flexDirection: 'column', bgcolor: '#FFFFFF' }}>
      <Box 
        sx={{
          backgroundImage: `url(/assets/images/BeerAndRun.png)`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '100%',
          paddingTop: '50%',
          mb: 2,
        }}
      />
      <Typography variant="h4" gutterBottom align="center">Welcome to BrewRoute!</Typography>
      <Typography variant="subtitle1" gutterBottom align="center">Your frothy journey to fitness starts here!</Typography>
      
      <Button variant="contained" color="primary" onClick={getStarted} sx={{ mt: 2, mb: 3 }}>Let's Get Started</Button>

      <Box sx={{ width: '80%', mt: 2, mb: 3, boxShadow: 1 }}>
        <Typography variant="body2" color="textSecondary" align="center" gutterBottom sx={{ fontStyle: 'italic', mt: 1 }}>
          ""Who knew that fitness and fun could be served in the same pint?"
        </Typography>
        <Typography variant="caption" display="block" align="right" color="textSecondary">
          - Sarah -
        </Typography>
      </Box>

   
      <Box sx={{ mt: 1 }}>
        <IconButton color="primary" component="a" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </IconButton>
        <IconButton color="primary" component="a" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </IconButton>
        <IconButton color="primary" component="a" href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
          <TelegramIcon />
        </IconButton>
      </Box>
    </Container>
  );
}

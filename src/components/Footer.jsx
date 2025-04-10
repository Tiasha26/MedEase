import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.primary.main,
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocalHospitalIcon sx={{ mr: 1 }} />
              <Typography variant="h6">MedEase</Typography>
            </Box>
            <Typography variant="body2">
              Your trusted partner in virtual healthcare and wellness consultation.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                sx={{ mb: 1 }}
              >
                Home
              </Link>
              <Link
                component={RouterLink}
                to="/appointment"
                color="inherit"
                sx={{ mb: 1 }}
              >
                Book Appointment
              </Link>
              <Link
                component={RouterLink}
                to="/symptom-checker"
                color="inherit"
                sx={{ mb: 1 }}
              >
                Symptom Checker
              </Link>
              <Link
                component={RouterLink}
                to="/blog"
                color="inherit"
                sx={{ mb: 1 }}
              >
                Blog
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" gutterBottom>
              Email: info@medease.com
            </Typography>
            <Typography variant="body2" gutterBottom>
              Phone: +1 (555) 123-4567
            </Typography>
            <Typography variant="body2">
              Address: 123 Healthcare St, Medical City, MC 12345
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} MedEase. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer; 
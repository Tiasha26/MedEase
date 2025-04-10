import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ArticleIcon from '@mui/icons-material/Article';
import RateReviewIcon from '@mui/icons-material/RateReview';

function Home() {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
          textAlign: 'center',
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          color="primary"
          gutterBottom
        >
          Welcome to MedEase
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Your trusted partner in virtual healthcare and wellness consultation
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={RouterLink}
          to="/appointment"
          sx={{ mt: 2 }}
        >
          Book an Appointment
        </Button>
      </Box>

      {/* Features Section */}
      <Grid container spacing={4} sx={{ py: 4 }}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <CalendarMonthIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Easy Appointment Booking
              </Typography>
              <Typography color="text.secondary">
                Schedule virtual consultations with healthcare professionals at your convenience
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <HealthAndSafetyIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                AI Symptom Checker
              </Typography>
              <Typography color="text.secondary">
                Get instant preliminary assessment of your symptoms
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <ArticleIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Health Blog
              </Typography>
              <Typography color="text.secondary">
                Access expert health tips and wellness advice
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <RateReviewIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Patient Testimonials
              </Typography>
              <Typography color="text.secondary">
                Read success stories from our satisfied patients
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home; 
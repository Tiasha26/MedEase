import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box,
  Rating,
} from '@mui/material';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Patient',
    image: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    content: 'The virtual consultation was incredibly convenient and professional. The doctor was thorough and made me feel comfortable throughout the entire process.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Patient',
    image: 'https://i.pravatar.cc/150?img=2',
    rating: 5,
    content: 'I was skeptical about online consultations at first, but MedEase proved me wrong. The service is excellent, and the doctors are highly knowledgeable.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Patient',
    image: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
    content: 'The AI symptom checker was surprisingly accurate and helped me understand my condition better before my consultation. Great service overall!',
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Patient',
    image: 'https://i.pravatar.cc/150?img=4',
    rating: 5,
    content: 'As someone with a busy schedule, MedEase has been a lifesaver. The ability to book appointments and consult with doctors online is invaluable.',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Patient',
    image: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    content: 'The doctors are very attentive and take their time to explain everything. The platform is user-friendly and the service is exceptional.',
  },
  {
    id: 6,
    name: 'James Brown',
    role: 'Patient',
    image: 'https://i.pravatar.cc/150?img=6',
    rating: 5,
    content: 'I appreciate the convenience and professionalism of MedEase. The virtual consultations are just as effective as in-person visits.',
  },
];

function Testimonials() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Patient Testimonials
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph align="center">
        Hear what our patients have to say about their experience with MedEase
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {testimonials.map((testimonial) => (
          <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  boxShadow: 6,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    src={testimonial.image}
                    alt={testimonial.name}
                    sx={{ width: 56, height: 56, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6" component="div">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
                <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    fontStyle: 'italic',
                    '&:before': { content: '"\\201C"', fontSize: '2em' },
                    '&:after': { content: '"\\201D"', fontSize: '2em' },
                  }}
                >
                  {testimonial.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Testimonials; 
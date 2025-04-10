import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: '10 Tips for Maintaining a Healthy Lifestyle',
    excerpt: 'Discover simple yet effective ways to improve your overall health and well-being.',
    image: 'https://source.unsplash.com/random/300x200/?health',
    date: 'March 15, 2024',
    category: 'Wellness',
  },
  {
    id: 2,
    title: 'Understanding Mental Health: A Comprehensive Guide',
    excerpt: 'Learn about the importance of mental health and strategies for maintaining emotional well-being.',
    image: 'https://source.unsplash.com/random/300x200/?mental-health',
    date: 'March 10, 2024',
    category: 'Mental Health',
  },
  {
    id: 3,
    title: 'Nutrition Basics: Building a Balanced Diet',
    excerpt: 'Essential information about creating a nutritious and balanced meal plan for optimal health.',
    image: 'https://source.unsplash.com/random/300x200/?nutrition',
    date: 'March 5, 2024',
    category: 'Nutrition',
  },
  {
    id: 4,
    title: 'Exercise for Beginners: Getting Started',
    excerpt: 'A beginner-friendly guide to starting your fitness journey and staying motivated.',
    image: 'https://source.unsplash.com/random/300x200/?exercise',
    date: 'March 1, 2024',
    category: 'Fitness',
  },
];

function Blog() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Health & Wellness Blog
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph align="center">
        Expert advice and tips for maintaining a healthy lifestyle
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={3} key={post.id}>
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
              <CardMedia
                component="img"
                height="140"
                image={post.image}
                alt={post.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="overline"
                  color="primary"
                  component="div"
                  gutterBottom
                >
                  {post.category}
                </Typography>
                <Typography
                  variant="h6"
                  component="h2"
                  gutterBottom
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  paragraph
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {post.excerpt}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {post.date}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button
                    size="small"
                    component={RouterLink}
                    to={`/blog/${post.id}`}
                  >
                    Read More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Blog; 
import "./About.css";
import { Container, Typography } from "@mui/material";

function About() {
  return (
    <>
      <Container sx={{ py: 10 }}>
        <Typography variant="h2" align="center" fontWeight="bold" gutterBottom>
          CHOOSE & CREATE Picante
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary">
          Comes with 8 different demos. Get all of them with one-time purchase!
          Use our 1-click install wizard to build the website in minutes.
          Unlimited Possibilities with Codeless Combine parts from various
          templates in your website!
        </Typography>
      </Container>
    </>
  );
}

export default About;

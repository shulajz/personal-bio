import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import profileImage from "../assets/images/me-bg.png";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Hero = () => {
  return (
    <Box
      id="hero"
      component="section"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #f5f7ff 0%, #e8f0ff 100%)",
        pt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                color="primary"
                variant="h6"
                sx={{ mb: 1, fontWeight: 500 }}
              >
                Hello, I'm
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  mb: 1,
                  background:
                    "linear-gradient(90deg, #4361ee 0%, #3a0ca3 100%)",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  display: "inline-block",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                }}
              >
                Shulamit Ajzner
              </Typography>

              <Typography
                variant="h2"
                color="text.primary"
                sx={{
                  mb: 2,
                  fontSize: { xs: "1.5rem", md: "2.5rem" },
                }}
              >
                Full-Stack Developer
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{
                  mb: 3,
                  fontSize: "1.1rem",
                  maxWidth: "600px",
                }}
              >
                Passionate about creating clean, efficient code and building
                user-friendly web applications. Fluent in both Hebrew and
                English, I bring positive energy and a commitment to excellence.
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={Link}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  View My Work
                </Button>

                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  component={Link}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact Me
                </Button>
              </Stack>

              <Stack direction="row" spacing={1}>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/shulamit-ajzner-920970186/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    color: "primary.main",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "white",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="mailto:shulajz@gmail.com"
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    color: "primary.main",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "white",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <EmailIcon />
                </IconButton>
              </Stack>
            </motion.div>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                component="img"
                src={profileImage}
                alt="Shulamit Ajzner"
                sx={{
                  maxWidth: "100%",
                  borderRadius: "50%",
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                  border: "5px solid white",
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;

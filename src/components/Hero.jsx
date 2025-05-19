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
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #F9FAFB 0%, #EFF6FF 50%, #EEF2FF 100%)",
        pt: 8,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "60%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.1) 0%, rgba(79, 70, 229, 0.05) 50%, transparent 70%)",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "80%",
          height: "80%",
          background:
            "radial-gradient(circle at 70% 70%, rgba(236, 72, 153, 0.08) 0%, transparent 60%)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                color="#6366F1"
                variant="h6"
                sx={{ mb: 1, fontWeight: 600, letterSpacing: "0.5px" }}
              >
                Hello, I'm
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  mb: 1,
                  background:
                    "linear-gradient(90deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  display: "inline-block",
                  fontSize: { xs: "2.5rem", md: "3.75rem" },
                  letterSpacing: "-0.02em",
                  fontWeight: 800,
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
                  fontWeight: 600,
                }}
              >
                Full-Stack Developer
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{
                  mb: 4,
                  fontSize: "1.125rem",
                  maxWidth: "600px",
                  lineHeight: 1.7,
                }}
              >
                Passionate about creating clean, efficient code and building
                user-friendly web applications. Fluent in both Hebrew and
                English, I bring positive energy and a commitment to excellence.
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mb: 5 }}>
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
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    background:
                      "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
                    boxShadow: "0 10px 20px rgba(99, 102, 241, 0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 15px 25px rgba(99, 102, 241, 0.3)",
                      transform: "translateY(-3px)",
                    },
                  }}
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
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    borderWidth: 2,
                    borderColor: "#6366F1",
                    color: "#6366F1",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "#4F46E5",
                      backgroundColor: "rgba(99, 102, 241, 0.04)",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Stack>

              <Stack direction="row" spacing={1.5}>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/shulamit-ajzner-920970186/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                    color: "#6366F1",
                    width: 45,
                    height: 45,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#6366F1",
                      color: "white",
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 20px rgba(99, 102, 241, 0.2)",
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="mailto:shulajz@gmail.com"
                  sx={{
                    backgroundColor: "rgba(236, 72, 153, 0.1)",
                    color: "#EC4899",
                    width: 45,
                    height: 45,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#EC4899",
                      color: "white",
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 20px rgba(236, 72, 153, 0.2)",
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
              position: "relative",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    position: "absolute",
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(45deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3))",
                    filter: "blur(30px)",
                    top: "-20px",
                    left: "-20px",
                    zIndex: 0,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(45deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))",
                    filter: "blur(40px)",
                    bottom: "-30px",
                    right: "-20px",
                    zIndex: 0,
                  }}
                />

                {/* Main profile image */}
                <Box
                  component="img"
                  src={profileImage}
                  alt="Shulamit Ajzner"
                  sx={{
                    maxWidth: "100%",
                    borderRadius: "50%",
                    boxShadow: "0 20px 40px rgba(31, 41, 55, 0.2)",
                    border: "5px solid white",
                    position: "relative",
                    zIndex: 1,
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    top: "-10px",
                    left: "-10px",
                    right: "-10px",
                    bottom: "-10px",
                    borderRadius: "50%",
                    border: "2px dashed rgba(99, 102, 241, 0.3)",
                    animation: "spin 20s linear infinite",
                    "@keyframes spin": {
                      "0%": {
                        transform: "rotate(0deg)",
                      },
                      "100%": {
                        transform: "rotate(360deg)",
                      },
                    },
                    zIndex: 0,
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;

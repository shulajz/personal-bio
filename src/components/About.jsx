import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: 8,
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            mb: 6,
            position: "relative",
            fontWeight: "bold",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-16px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              backgroundColor: "primary.main",
            },
          }}
        >
          About Me
        </Typography>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                  transform: "rotate(-2deg)",
                }}
              ></Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  mb: 3,
                  fontSize: { xs: "1.8rem", md: "2.2rem" },
                }}
              >
                Full-Stack Developer
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: "text.secondary",
                  fontSize: "1.1rem",
                  mb: 2,
                }}
              >
                I'm a committed and diligent Full-Stack Developer with expertise
                in React, JavaScript, Python, and more. With 2.5 years of
                professional experience, I specialize in creating clean,
                efficient code and building responsive web applications.
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: "text.secondary",
                  fontSize: "1.1rem",
                  mb: 2,
                }}
              >
                I graduated with a B.Sc. in Computer Science from Bar-Ilan
                University and have worked with companies like Five Sigma and
                MinerEye, contributing to significant features and improvements.
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: "text.secondary",
                  fontSize: "1.1rem",
                  mb: 2,
                }}
              >
                As a developer, I'm passionate about solving problems and
                creating intuitive user experiences. I'm fluent in both Hebrew
                and English, and bring positive energy and a good atmosphere to
                my teams.
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: "text.secondary",
                  fontSize: "1.1rem",
                  mb: 2,
                }}
              >
                I'm highly motivated and always looking to grow, both personally
                and professionally. I'm seeking a role where I can continue
                learning and contributing to a strong development team.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;

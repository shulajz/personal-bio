import React from "react";
import resumePDF from "../assets/files/Shulamit_Ajzner_CV.pdf";

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  Button,
  Avatar,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import TranslateIcon from "@mui/icons-material/Translate";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-scroll";

const About = () => {
  const theme = useTheme();

  const highlightPoints = [
    {
      icon: <CodeIcon />,
      title: "Full-Stack Development",
      description:
        "Experienced in building responsive web applications with React, JavaScript, Python, and more.",
      color: theme.palette.primary.main,
    },
    {
      icon: <SchoolIcon />,
      title: "Computer Science Graduate",
      description:
        "B.Sc. in Computer Science from Bar-Ilan University with strong foundational knowledge.",
      color: theme.palette.secondary.main,
    },
    {
      icon: <TranslateIcon />,
      title: "Bilingual",
      description:
        "Fluent in both Hebrew and English, facilitating effective communication in diverse environments.",
      color: "#8B5CF6", // Purple
    },
    {
      icon: <EmojiObjectsIcon />,
      title: "Problem Solver",
      description:
        "Passionate about solving problems and creating intuitive, user-friendly experiences.",
      color: "#10B981", // Green
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        background: "linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          bottom: "10%",
          left: "-10%",
          width: "70%",
          height: "70%",
          background:
            "radial-gradient(circle at center, rgba(99, 102, 241, 0.07) 0%, transparent 70%)",
          zIndex: 0,
          borderRadius: "50%",
          animation: "pulse 15s infinite alternate",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: "5%",
          right: "-10%",
          width: "60%",
          height: "70%",
          background:
            "radial-gradient(circle at center, rgba(236, 72, 153, 0.05) 0%, transparent 70%)",
          zIndex: 0,
          borderRadius: "50%",
          animation: "pulse-delay 15s infinite alternate",
        },
        "@keyframes pulse": {
          "0%": {
            opacity: 0.5,
            transform: "scale(1)",
          },
          "100%": {
            opacity: 0.7,
            transform: "scale(1.05)",
          },
        },
        "@keyframes pulse-delay": {
          "0%": {
            opacity: 0.5,
            transform: "scale(1.05)",
          },
          "100%": {
            opacity: 0.7,
            transform: "scale(1)",
          },
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              mb: { xs: 6, md: 8 },
              position: "relative",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-16px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "4px",
                background: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
                borderRadius: "2px",
              },
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "5px",
                    left: 0,
                    width: "100%",
                    height: "10px",
                    background: "linear-gradient(90deg, #6366F120, #8B5CF610)",
                    zIndex: -1,
                    borderRadius: "2px",
                  },
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
                  lineHeight: 1.8,
                  mb: 3,
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
                  lineHeight: 1.8,
                  mb: 3,
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
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                As a developer, I'm passionate about solving problems and
                creating intuitive user experiences. I bring positive energy and
                a good atmosphere to my teams, and I'm always looking to grow
                both personally and professionally.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 4,
                  mb: 6,
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  sx={{
                    px: 3,
                    py: 1.2,
                    borderRadius: 2,
                    background:
                      "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
                    boxShadow: "0 10px 20px rgba(99, 102, 241, 0.2)",
                    transition: "all 0.3s ease",
                    fontWeight: 600,
                    "&:hover": {
                      boxShadow: "0 15px 25px rgba(99, 102, 241, 0.3)",
                      transform: "translateY(-3px)",
                    },
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  See My Work
                </Button>
                <Button
                  variant="outlined"
                  component="a"
                  href={resumePDF}
                  download="Shulamit_Ajzner_CV.pdf"
                  sx={{
                    px: 3,
                    py: 1.2,
                    borderRadius: 2,
                    borderWidth: 2,
                    borderColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.main,
                    transition: "all 0.3s ease",
                    fontWeight: 600,
                    "&:hover": {
                      borderColor: theme.palette.secondary.main,
                      backgroundColor: `${theme.palette.secondary.main}10`,
                      transform: "translateY(-3px)",
                    },
                  }}
                  endIcon={<DownloadIcon />}
                >
                  Download CV
                </Button>
              </Box>

              <Divider
                sx={{
                  mb: 4,
                  opacity: 0.7,
                  "&::before, &::after": {
                    borderColor: "rgba(99, 102, 241, 0.2)",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    px: 2,
                  }}
                >
                  Key Strengths
                </Typography>
              </Divider>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Grid container spacing={3}>
                  {highlightPoints.map((point, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <motion.div variants={itemVariants}>
                        <Paper
                          elevation={2}
                          sx={{
                            p: 2.5,
                            borderRadius: 3,
                            height: "100%",
                            background: "rgba(255, 255, 255, 0.9)",
                            backdropFilter: "blur(10px)",
                            transition: "all 0.3s ease",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            position: "relative",
                            overflow: "hidden",
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              width: "100%",
                              height: "3px",
                              background: `linear-gradient(90deg, ${point.color}, ${point.color}50)`,
                              transition: "height 0.3s ease",
                              opacity: 0.7,
                            },
                            "&:hover": {
                              transform: "translateY(-5px)",
                              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                              borderColor: `${point.color}30`,
                              "&::after": {
                                height: "5px",
                              },
                            },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: 1.5,
                            }}
                          >
                            <Avatar
                              sx={{
                                width: 42,
                                height: 42,
                                backgroundColor: `${point.color}15`,
                                color: point.color,
                                boxShadow: `0 4px 10px ${point.color}20`,
                                mr: 2,
                              }}
                            >
                              {point.icon}
                            </Avatar>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 600,
                                fontSize: "1rem",
                              }}
                            >
                              {point.title}
                            </Typography>
                          </Box>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ lineHeight: 1.7 }}
                          >
                            {point.description}
                          </Typography>
                        </Paper>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;

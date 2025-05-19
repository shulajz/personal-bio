import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const Experience = () => {
  const experiences = [
    {
      date: "2022 - 2024",
      title: "Full-Stack Developer",
      company: "Five Sigma",
      icon: <CodeIcon />,
      color: "#6366F1", // Indigo
      technologies: [
        "React",
        "JavaScript",
        "Python",
        "SCSS",
        "Tailwind",
        "SQLAlchemy",
        "Flask",
        "PostgreSQL",
      ],
      description: [
        "Contributed to key features including Policy API for customer-server integration",
        "Developed API for efficient claim initiation",
        "Implemented unified design across all lines of business with focus on UI/UX enhancements",
        "Created configurable LOBs to streamline the go-live process for customers",
      ],
    },
    {
      date: "2021 - 2022",
      title: "Full-Stack Developer",
      company: "MinerEye",
      icon: <CodeIcon />,
      color: "#8B5CF6", // Purple
      technologies: ["React", "JavaScript", "NodeJS", "PostgreSQL"],
      description: [
        "Worked with artificial intelligence technology to automatically identify and treat sensitive information in organizational databases",
      ],
    },
    {
      date: "2013 - 2015",
      title: "National Service",
      company: "Education and Administration Roles",
      icon: <VolunteerActivismIcon />,
      color: "#EC4899", // Pink
      technologies: [],
      description: [
        "Served in educational and administrative capacities during national service",
      ],
    },
  ];

  return (
    <Box
      id="experience"
      component="section"
      sx={{
        py: 10,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "background.default",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          backgroundImage:
            "radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.05) 0%, rgba(0, 0, 0, 0) 60%)",
          zIndex: 0,
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
              mb: 6,
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
            Work Experience
          </Typography>
        </motion.div>

        <Stepper
          orientation="vertical"
          sx={{
            ".MuiStepConnector-line": {
              minHeight: 40,
              borderLeftWidth: 2,
              borderLeftStyle: "dashed",
              borderColor: "rgba(99, 102, 241, 0.3)",
              ml: 0.5,
            },
          }}
        >
          {experiences.map((experience, index) => (
            <Step key={index} active={true} completed={true}>
              <StepLabel
                StepIconComponent={() => (
                  <Avatar
                    sx={{
                      width: 48,
                      height: 48,
                      backgroundColor: "white",
                      color: experience.color,
                      border: `2px solid ${experience.color}`,
                      boxShadow: `0 0 0 4px rgba(99, 102, 241, 0.1)`,
                    }}
                  >
                    {experience.icon}
                  </Avatar>
                )}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: experience.color,
                      mb: 0.5,
                    }}
                  >
                    {experience.date}
                  </Typography>
                </motion.div>
              </StepLabel>
              <StepContent>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 4,
                      mb: 3,
                      ml: 1,
                      borderRadius: 3,
                      background: "rgba(255, 255, 255, 0.95)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      boxShadow: "0 10px 30px rgba(31, 41, 55, 0.08)",
                      maxWidth: { md: "80%" },
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "4px",
                        height: "100%",
                        background: `linear-gradient(to bottom, ${experience.color}, ${experience.color}80)`,
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        color: "text.primary",
                      }}
                    >
                      {experience.title}
                    </Typography>

                    <Typography
                      variant="h6"
                      component="h4"
                      gutterBottom
                      sx={{
                        fontStyle: "italic",
                        mb: 2,
                        color: "text.secondary",
                        fontSize: "1.1rem",
                      }}
                    >
                      {experience.company}
                    </Typography>

                    {experience.technologies.length > 0 && (
                      <Box sx={{ mb: 3 }}>
                        <Grid container spacing={1}>
                          {experience.technologies.map((tech, i) => (
                            <Grid item key={i}>
                              <Chip
                                label={tech}
                                size="small"
                                sx={{
                                  fontWeight: 500,
                                  backgroundColor: `${experience.color}15`,
                                  color: experience.color,
                                  border: `1px solid ${experience.color}30`,
                                  transition: "all 0.2s ease",
                                  "&:hover": {
                                    backgroundColor: `${experience.color}20`,
                                  },
                                }}
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    )}

                    <List disablePadding>
                      {experience.description.map((item, i) => (
                        <ListItem
                          key={i}
                          alignItems="flex-start"
                          disablePadding
                          sx={{ mb: 1.5 }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 32, // Reduced to align better
                              mt: 0.25, // Adjusted to align with text vertically
                              alignSelf: "flex-start", // Aligns to the top of the text
                            }}
                          >
                            <CheckCircleOutlineIcon
                              sx={{
                                color: experience.color,
                                fontSize: "1.2rem", // Slightly smaller for better alignment
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            primaryTypographyProps={{
                              variant: "body2",
                              color: "text.secondary",
                              lineHeight: 1.7,
                            }}
                            sx={{ mt: 0 }} // Remove top margin for better alignment
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </motion.div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Container>
    </Box>
  );
};

export default Experience;

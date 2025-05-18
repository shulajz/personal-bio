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
} from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Experience = () => {
  const experiences = [
    {
      date: "2022 - 2024",
      title: "Full-Stack Developer",
      company: "Five Sigma",
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
      technologies: ["React", "JavaScript", "NodeJS", "PostgreSQL"],
      description: [
        "Worked with artificial intelligence technology to automatically identify and treat sensitive information in organizational databases",
      ],
    },
    {
      date: "2013 - 2015",
      title: "National Service",
      company: "Education and Administration Roles",
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
        py: 8,
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
          Work Experience
        </Typography>

        <Stepper orientation="vertical">
          {experiences.map((experience, index) => (
            <Step key={index} active={true}>
              <StepLabel
                StepIconComponent={() => (
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "primary.main",
                      boxShadow: "0 0 0 8px rgba(67, 97, 238, 0.2)",
                    }}
                  />
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
                    color="primary.main"
                    fontWeight={600}
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
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      mb: 3,
                      borderRadius: 2,
                      maxWidth: { md: "80%" },
                    }}
                  >
                    <Typography variant="h5" component="h3" gutterBottom>
                      {experience.title}
                    </Typography>

                    <Typography
                      variant="h6"
                      component="h4"
                      color="text.secondary"
                      gutterBottom
                      sx={{ fontStyle: "italic", mb: 2 }}
                    >
                      {experience.company}
                    </Typography>

                    {experience.technologies.length > 0 && (
                      <Box sx={{ mb: 2 }}>
                        <Grid container spacing={1}>
                          {experience.technologies.map((tech, i) => (
                            <Grid item key={i}>
                              <Chip
                                label={tech}
                                size="small"
                                color="primary"
                                variant="outlined"
                                sx={{
                                  fontWeight: 500,
                                  backgroundColor: "rgba(67, 97, 238, 0.08)",
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
                          sx={{ mb: 1 }}
                        >
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <CheckCircleOutlineIcon
                              color="primary"
                              fontSize="small"
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            primaryTypographyProps={{
                              variant: "body2",
                              color: "text.secondary",
                            }}
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

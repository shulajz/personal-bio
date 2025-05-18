import React from "react";
import { Box, Container, Typography, Grid, Chip, Paper } from "@mui/material";
import { motion } from "framer-motion";

const Skills = () => {
  const technicalSkills = [
    "React",
    "JavaScript",
    "Python",
    "Node.js",
    "PostgreSQL",
    "Git",
    "HTML",
    "CSS",
    "SCSS",
    "Tailwind",
    "SQLAlchemy",
    "Flask",
  ];

  const languages = ["English (Native)", "Hebrew (Native)"];

  const education = ["B.Sc. Computer Science, Bar-Ilan University"];

  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: 8,
        backgroundColor: "#f8f9fa",
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
          My Skills
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h4"
                  component="h3"
                  gutterBottom
                  sx={{
                    position: "relative",
                    pb: 2,
                    mb: 3,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "40px",
                      height: "3px",
                      backgroundColor: "primary.main",
                    },
                  }}
                >
                  Technical Skills
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <Chip
                        label={skill}
                        color="primary"
                        variant="outlined"
                        sx={{
                          m: 0.5,
                          fontWeight: 500,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "primary.main",
                            color: "white",
                            transform: "translateY(-3px)",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                          },
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h4"
                  component="h3"
                  gutterBottom
                  sx={{
                    position: "relative",
                    pb: 2,
                    mb: 3,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "40px",
                      height: "3px",
                      backgroundColor: "primary.main",
                    },
                  }}
                >
                  Languages
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {languages.map((language, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <Chip
                        label={language}
                        color="primary"
                        variant="outlined"
                        sx={{
                          m: 0.5,
                          fontWeight: 500,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "primary.main",
                            color: "white",
                            transform: "translateY(-3px)",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                          },
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h4"
                  component="h3"
                  gutterBottom
                  sx={{
                    position: "relative",
                    pb: 2,
                    mb: 3,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "40px",
                      height: "3px",
                      backgroundColor: "primary.main",
                    },
                  }}
                >
                  Education
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {education.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                      <Chip
                        label={item}
                        color="primary"
                        variant="outlined"
                        sx={{
                          m: 0.5,
                          fontWeight: 500,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "primary.main",
                            color: "white",
                            transform: "translateY(-3px)",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                          },
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;

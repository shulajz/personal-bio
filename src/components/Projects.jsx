import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Divider,
  useTheme,
  alpha,
  Grid,
  Avatar,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import WebIcon from "@mui/icons-material/Web";
import MovieIcon from "@mui/icons-material/Movie";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { motion } from "framer-motion";

const Projects = () => {
  const projectColors = [
    {
      primary: "#6366F1", // Indigo
      secondary: "#818CF8",
      gradient: "linear-gradient(135deg, #6366F1, #818CF8)",
      icon: <WebIcon />,
    },
    {
      primary: "#EC4899", // Pink
      secondary: "#F472B6",
      gradient: "linear-gradient(135deg, #EC4899, #F472B6)",
      icon: <MovieIcon />,
    },
    {
      primary: "#8B5CF6", // Purple
      secondary: "#A78BFA",
      gradient: "linear-gradient(135deg, #8B5CF6, #A78BFA)",
      icon: <SportsEsportsIcon />,
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description:
        "A responsive personal portfolio website built with React and Material UI, showcasing my projects, skills, and experience.",
      technologies: ["React", "JavaScript", "CSS", "Material UI"],
      liveLink: "https://shulajz.github.io/personal-bio/",
      color: projectColors[0],
    },
    {
      id: 2,
      title: "MovieFlix",
      description:
        "A feature-rich movie discovery platform that enables users to search and explore movies using the OMDb API. The app includes practical features such as a favorites system, a watchlist with watched/unwatched status tracking, and theme switching between light and dark modes.",
      technologies: ["React", "TypeScript", "Material UI", "Context API"],
      liveLink: "https://shulajz.github.io/movie-search-app",
      color: projectColors[1],
    },
    {
      id: 3,
      title: "Tic Tac Toe Game",
      description:
        "A modern, responsive Tic Tac Toe game featuring multiple difficulty levels (Easy, Medium, Hard), game history tracking, and statistics. The computer opponent implements different algorithmic strategies based on the selected difficulty.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      liveLink: "https://shulajz.github.io/tic-tac-toe/",
      color: projectColors[2],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: 10,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#f8f9fa",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "40%",
          height: "60%",
          background:
            "radial-gradient(circle at center, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
          zIndex: 0,
          borderRadius: "50%",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-5%",
          left: "-10%",
          width: "50%",
          height: "40%",
          background:
            "radial-gradient(circle at center, rgba(236, 72, 153, 0.06) 0%, transparent 70%)",
          zIndex: 0,
          borderRadius: "50%",
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
              mb: 8,
              position: "relative",
              fontWeight: "bold",
              background:
                "linear-gradient(90deg, #6366F1 0%, #8B5CF6 70%, #EC4899 100%)",
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
                background:
                  "linear-gradient(90deg, #6366F1 0%, #8B5CF6 70%, #EC4899 100%)",
                borderRadius: "2px",
              },
            }}
          >
            My Projects
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item key={project.id} xs={12} md={4}>
                <motion.div variants={itemVariants}>
                  <Card
                    elevation={4}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 3,
                      overflow: "hidden",
                      transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                      position: "relative",
                      "&:hover": {
                        transform: "translateY(-12px)",
                        boxShadow: `0 15px 35px ${alpha(
                          project.color.primary,
                          0.25
                        )}`,
                      },
                    }}
                  >
                    {/* Decorative top accent */}
                    <Box
                      sx={{
                        height: "8px",
                        width: "100%",
                        backgroundImage: project.color.gradient,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        zIndex: 1,
                      }}
                    />

                    {/* Icon header */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 3,
                        pb: 0,
                        position: "relative",
                      }}
                    >
                      <Avatar
                        sx={{
                          backgroundColor: alpha(project.color.primary, 0.1),
                          color: project.color.primary,
                          width: 48,
                          height: 48,
                          border: `2px solid ${alpha(
                            project.color.primary,
                            0.2
                          )}`,
                          boxShadow: `0 4px 12px ${alpha(
                            project.color.primary,
                            0.15
                          )}`,
                        }}
                      >
                        {project.color.icon}
                      </Avatar>

                      <Box sx={{ ml: 2 }}>
                        <Typography
                          variant="overline"
                          sx={{
                            color: project.color.primary,
                            fontWeight: 600,
                            letterSpacing: 1,
                          }}
                        >
                          Project {index + 1}
                        </Typography>
                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{
                            fontWeight: 700,
                            color: "text.primary",
                            lineHeight: 1.3,
                          }}
                        >
                          {project.title}
                        </Typography>
                      </Box>
                    </Box>

                    <CardContent
                      sx={{
                        flexGrow: 1,
                        pt: 3,
                        px: 3,
                        pb: 1,
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            left: -24,
                            top: 8,
                            width: "3px",
                            height: "40%",
                            background: project.color.gradient,
                            borderRadius: "3px",
                          },
                        }}
                      >
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          paragraph
                          sx={{
                            mb: 3,
                            lineHeight: 1.7,
                          }}
                        >
                          {project.description}
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", flexWrap: "wrap", mb: 2 }}>
                        {project.technologies.map((tech, i) => (
                          <Chip
                            key={i}
                            label={tech}
                            size="small"
                            sx={{
                              m: 0.5,
                              fontSize: "0.7rem",
                              fontWeight: 600,
                              backgroundColor: alpha(
                                project.color.primary,
                                0.1
                              ),
                              color: project.color.primary,
                              border: `1px solid ${alpha(
                                project.color.primary,
                                0.3
                              )}`,
                              transition: "all 0.2s ease",
                              "&:hover": {
                                backgroundColor: alpha(
                                  project.color.primary,
                                  0.2
                                ),
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>

                    <Divider sx={{ mx: 3, opacity: 0.6 }} />

                    <CardActions
                      sx={{ px: 3, py: 2, justifyContent: "space-between" }}
                    >
                      <Box>
                        {project.githubLink && (
                          <Button
                            size="small"
                            startIcon={<GitHubIcon />}
                            href={project.githubLink}
                            target="_blank"
                            sx={{
                              mr: 1,
                              color: project.color.primary,
                              fontWeight: 600,
                              transition: "all 0.2s ease",
                              "&:hover": {
                                backgroundColor: alpha(
                                  project.color.primary,
                                  0.08
                                ),
                              },
                            }}
                          >
                            GitHub
                          </Button>
                        )}
                        {project.liveLink && (
                          <Button
                            variant="contained"
                            size="small"
                            startIcon={<LaunchIcon />}
                            href={project.liveLink}
                            target="_blank"
                            sx={{
                              backgroundImage: project.color.gradient,
                              boxShadow: `0 4px 10px ${alpha(
                                project.color.primary,
                                0.25
                              )}`,
                              fontWeight: 600,
                              transition: "all 0.3s ease",
                              "&:hover": {
                                boxShadow: `0 6px 15px ${alpha(
                                  project.color.primary,
                                  0.35
                                )}`,
                              },
                            }}
                          >
                            Live Demo
                          </Button>
                        )}
                      </Box>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;

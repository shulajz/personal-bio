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
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A responsive personal portfolio website.",
      technologies: ["React", "CSS", "JavaScript"],
      // githubLink: "https://github.com/shulajz/portfolio",
      liveLink: "https://shulajz.github.io/personal-bio/",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "A weather app that allows users to search for weather details based on the city they input. The app fetches data from the WeatherAPI and provides information on temperature, condition, and time difference between the user's location and the selected city.",
      technologies: ["React", "TypeScript", "CSS"],
      // githubLink: "https://github.com/shulajz/weather-app",
      liveLink: "https://weather-app-seven-sand-58.vercel.app/",
    },
    {
      id: 3,
      title: "Task Manager",
      description:
        "A full-stack task management application with user authentication, task creation, and organization features.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/shulajz/task-manager",
      liveLink: "",
    },
    {
      id: 4,
      title: "E-commerce Product Page",
      description:
        "An interactive product page featuring a product image gallery, customization options, and cart functionality.",
      technologies: ["React", "CSS", "JavaScript"],
      githubLink: "https://github.com/shulajz/ecommerce-page",
      liveLink: "#",
    },
  ];

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: 8,
        backgroundColor: "#f8f9fa",
      }}
    >
      <Container maxWidth="md">
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
          My Projects
        </Typography>

        <Stack spacing={4}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                elevation={2}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
                  },
                  borderTop: 5,
                  borderColor: "primary.main",
                }}
              >
                <CardContent sx={{ flexGrow: 1, pt: 3 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {project.technologies.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{
                          m: 0.5,
                          transition: "all 0.3s",
                          "&:hover": {
                            backgroundColor: "primary.main",
                            color: "white",
                          },
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ px: 3, pb: 3 }}>
                  {project.githubLink && (
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<GitHubIcon />}
                      href={project.githubLink}
                      target="_blank"
                    >
                      GitHub
                    </Button>
                  )}
                  {project.liveLink && (
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<LaunchIcon />}
                      href={project.liveLink}
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                  )}
                </CardActions>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Projects;

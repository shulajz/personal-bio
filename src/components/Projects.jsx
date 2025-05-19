import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
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
      image: "https://via.placeholder.com/600x400?text=Portfolio+Website",
      description:
        "A responsive personal portfolio website built with React and deployed to GitHub Pages.",
      technologies: ["React", "CSS", "JavaScript", "GitHub Pages"],
      githubLink: "https://github.com/shulajz/portfolio",
      liveLink: "#",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      image: "https://via.placeholder.com/600x400?text=Weather+App",
      description:
        "A weather application that fetches data from a weather API and displays current conditions and forecasts.",
      technologies: ["React", "API Integration", "CSS"],
      githubLink: "https://github.com/shulajz/weather-app",
      liveLink: "#",
    },
    {
      id: 3,
      title: "Task Manager",
      image: "https://via.placeholder.com/600x400?text=Task+Manager",
      description:
        "A full-stack task management application with user authentication, task creation, and organization features.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/shulajz/task-manager",
      liveLink: "",
    },
    {
      id: 4,
      title: "E-commerce Product Page",
      image: "https://via.placeholder.com/600x400?text=E-commerce",
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
          My Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  elevation={2}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {project.description}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                    >
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
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<GitHubIcon />}
                      href={project.githubLink}
                      target="_blank"
                    >
                      GitHub
                    </Button>
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;

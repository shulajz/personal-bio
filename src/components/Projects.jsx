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
      technologies: ["React", "JavaScript", "CSS", "Material UI"],
      liveLink: "https://shulajz.github.io/personal-bio/",
    },
    {
      id: 2,
      title: "MovieFlix",
      description:
        "A feature-rich movie discovery platform that enables users to search and explore movies using the OMDb API. The app includes practical features such as a favorites system, a watchlist with watched/unwatched status tracking, and theme switching between light and dark modes.",
      technologies: ["React", "TypeScript", "Material UI", "Context API"],
      liveLink: "https://shulajz.github.io/movie-search-app",
    },
    {
      id: 3,
      title: "Tic Tac Toe Game",
      description:
        "A modern, responsive Tic Tac Toe game featuring multiple difficulty levels (Easy, Medium, Hard), game history tracking, and statistics. The computer opponent implements different algorithmic strategies based on the selected difficulty.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      liveLink: "https://shulajz.github.io/tic-tac-toe/",
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

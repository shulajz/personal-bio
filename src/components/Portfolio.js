import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "fullstack",
      image: "https://via.placeholder.com/600x400",
      description:
        "A full-featured e-commerce platform with product catalog, cart, and payment processing.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/",
      liveLink: "https://example.com/",
    },
    {
      id: 2,
      title: "Task Management App",
      category: "frontend",
      image: "https://via.placeholder.com/600x400",
      description:
        "A Kanban-style task management application with drag-and-drop functionality.",
      technologies: ["React", "Redux", "Styled Components"],
      githubLink: "https://github.com/",
      liveLink: "https://example.com/",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      category: "frontend",
      image: "https://via.placeholder.com/600x400",
      description:
        "A weather forecasting app with location search and interactive charts.",
      technologies: ["React", "Chart.js", "Weather API"],
      githubLink: "https://github.com/",
      liveLink: "https://example.com/",
    },
    {
      id: 4,
      title: "RESTful API",
      category: "backend",
      image: "https://via.placeholder.com/600x400",
      description:
        "A RESTful API for a blog platform with authentication and authorization.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      githubLink: "https://github.com/",
      liveLink: "",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <PortfolioSection id="portfolio">
      <SectionTitle>
        <h2>My Portfolio</h2>
      </SectionTitle>

      <FilterContainer>
        <FilterButton
          active={filter === "all"}
          onClick={() => setFilter("all")}
        >
          All
        </FilterButton>
        <FilterButton
          active={filter === "frontend"}
          onClick={() => setFilter("frontend")}
        >
          Front-End
        </FilterButton>
        <FilterButton
          active={filter === "backend"}
          onClick={() => setFilter("backend")}
        >
          Back-End
        </FilterButton>
        <FilterButton
          active={filter === "fullstack"}
          onClick={() => setFilter("fullstack")}
        >
          Full-Stack
        </FilterButton>
      </FilterContainer>

      <ProjectsGrid>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectImage>
              <img src={project.image} alt={project.title} />
              <ProjectOverlay>
                <ProjectLinks>
                  {project.githubLink && (
                    <ProjectLink
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </ProjectLink>
                  )}
                  {project.liveLink && (
                    <ProjectLink
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectOverlay>
            </ProjectImage>

            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.technologies.map((tech, i) => (
                  <TechItem key={i}>{tech}</TechItem>
                ))}
              </TechStack>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </PortfolioSection>
  );
};

const PortfolioSection = styled.section`
  padding: 5rem 0;
  background-color: var(--background-alt);
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    display: inline-block;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 50%;
      height: 3px;
      background-color: var(--primary);
    }
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: ${(props) =>
    props.active ? "var(--primary)" : "var(--background)"};
  color: ${(props) => (props.active ? "white" : "var(--text)")};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary);
    color: white;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover > div {
    opacity: 1;
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(67, 97, 238, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color: var(--primary);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background-color: var(--text);
    color: white;
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: var(--text-light);
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechItem = styled.span`
  background-color: rgba(67, 97, 238, 0.1);
  color: var(--primary);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

export default Portfolio;

import React from "react";
import { Grid, Typography, Stack, Box } from "@mui/material";
import ProjectCard from "../Components/ProjectCard";
import NetflixGPT from "../assets/NetflixGPT.png";
import Headliner from "../assets/Headliner.png";
import Streamify from "../assets/Streamify.png";
import Bhagyarach from "../assets/Bhagyarach.png";

export const projects = [
  {
    id: 1,
    image: NetflixGPT,
    title: "NetflixGPT",
    description:
      "AI-powered movie recommendation app with login/logout, custom prompts and TMDB integration.",
    github: "https://github.com/tusharbatradev/Netflix-Gpt",
    live: "https://movie-gpt-suggestion.netlify.app/",
  },
  {
    id: 2,
    image: Headliner,
    title: "Headliner",
    description:
      "Modern news application with real-time headlines, category-wise browsing, save-for-later functionality, and favorite news management with a clean, responsive UI.",
    github: "https://github.com/yourrepo/wearngo",
    live: "https://headliner-news-app.netlify.app/",
  },
  {
    id: 3,
    image: Streamify,
    title: "Streamify",
    description:
      "Desktop-focused YouTube clone with video streaming, search functionality, dynamic routing, and a clean UI optimized for large screens.",
    github: "https://github.com/tusharbatradev/Streamify",
    live: "https://streamify-youtube-clone.netlify.app/",
  },
  {
    id: 4,
    image: Bhagyarach,
    title: "Bhagya Rach Welfare Foundation",
    description:
      "Paid project: Responsive NGO website for Bhagya Rach, highlighting their mission, initiatives, and donation options.",
    github: "https://github.com/tusharbatradev/bhagyarach-website",
    live: "https://bhagyarach.org/",
  },
];

const Projects = () => {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fafafa",
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
        width: "100%",
      }}
      spacing={3}
    >
      {/* Title */}
      <Typography variant="h5" sx={{ fontWeight: 600, color: "#6b08f9" }}>
        Projects
      </Typography>

      {/* Responsive Grid */}
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
        >
          {projects.map((project) => (
            <Grid
              item
              key={project.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default Projects;

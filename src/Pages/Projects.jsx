import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProjectCard from "../Components/ProjectCard";
import NetflixGPT from "../assets/NetflixGPT.png";
import Headliner from "../assets/Headliner.png";
import Streamify from "../assets/Streamify.png";

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
    image: "/images/threadle.png",
    title: "Threadle",
    description:
      "Kids clothing brand website focused on comfort, responsive design and clean UI.",
    github: "https://github.com/yourrepo/threadle",
    live: "https://threadle.com",
  },
];

const Projects = () => {
  return (
    <Stack sx={{ padding: "10px 40px" }}>
      {/* Title */}
      <Typography
        variant="h5"
        sx={{ fontWeight: 600, mb: 3, color: "#6b08f9" }}
      >
        Projects
      </Typography>

      {/* Cards Row */}
      <Stack
        direction="row"
        spacing={4}
        flexWrap="wrap"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            github={project.github}
            live={project.live}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Projects;

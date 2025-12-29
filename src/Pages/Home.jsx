import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import TusharImage from "../assets/Tushar_Image.jpg";
import resumeFile from "../assets/resume.pdf";
import { useNavigate } from "react-router-dom";

const resumeUrl = resumeFile;

const Home = () => {
  const isMdUp =
    typeof window !== "undefined" ? window.innerWidth >= 900 : false;

  const navigate = useNavigate();

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        padding: { xs: "20px", md: "10px 40px" },
        height: { xs: "auto", md: "80vh" },
        gap: { xs: 4, md: 0 },
      }}
    >
      {/* Left Side */}
      <Stack
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography variant="h5">Hello, I'm Tushar👋</Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            lineHeight: "1.2",
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          <span style={{ color: "#6b08f9" }}>Front</span> end
          <span
            style={{
              display: isMdUp ? "block" : "inline",
              marginTop: isMdUp ? "0.3em" : "0",
              marginLeft: isMdUp ? "0" : "0.3em", // small space on inline
            }}
          >
            Developer
          </span>
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
        >
          I specialize in crafting high-performance frontends using React and
          modern JavaScript. My goal is to create interfaces that load fast,
          look great, and feel effortless to use.
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ mt: 1 }}
        >
          <Button
            component="a"
            href={resumeUrl}
            download
            sx={{
              backgroundColor: "black",
              color: "white",
              width: { xs: "100%", md: "200px" },
              padding: "10px 20px",
            }}
          >
            Download CV
          </Button>
          <Button
            onClick={() => navigate("/projects")}
            sx={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
              width: { xs: "100%", md: "200px" },
              padding: "10px 20px",
            }}
          >
            Browse Projects
          </Button>
        </Stack>
      </Stack>

      {/* Right Side */}
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "350px", md: "600px" }, // same width for circle
          height: { xs: "350px", md: "600px" }, // same height
          mt: { xs: 4, md: 0 },
        }}
      >
        <img
          src={TusharImage}
          alt="profile"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Home;

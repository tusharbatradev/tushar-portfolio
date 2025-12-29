import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import TusharImage from "../assets/Tushar_Image.jpg";
import resumeFile from "../assets/resume.pdf";

const resumeUrl = resumeFile;

const Home = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 40px",
        height: "80vh",
      }}
    >
      {/* Left Side */}
      <Stack
        sx={{
          width: "50%",
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
            lineHeigt: "0px",
          }}
        >
          <span
            style={{
              color: "#6b08f9",
            }}
          >
            Front
          </span>
          end <br /> Developer
        </Typography>

        <Typography variant="p">
          I specialize in crafting high-performance frontends using React and
          modern JavaScript. My goal is to create interfaces that load fast,
          look great, and feel effortless to use.
        </Typography>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
          }}
        >
          <Button
            component="a"
            href={resumeUrl}
            download
            sx={{
              backgroundColor: "black",
              color: "white",
              width: "200px",
              padding: "10px 20px",
            }}
          >
            Download CV
          </Button>
          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
              width: "200px",
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
          width: "50%",
        }}
      >
        <img
          src={TusharImage}
          alt="profile"
          style={{
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Home;

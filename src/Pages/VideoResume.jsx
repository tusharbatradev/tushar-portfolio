import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Video from "../assets/video-resume.MOV";

function VideoResume() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        px: { xs: 1, sm: 2, md: 4 },
        mt: 4,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "720px",
          aspectRatio: "16 / 9",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <video
          controls
          autoPlay
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={Video} type="video/mp4" />
        </video>
      </Box>
    </Stack>
  );
}

export default VideoResume;

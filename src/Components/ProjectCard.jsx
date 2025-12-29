import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Button,
} from "@mui/material";

const ProjectCard = ({ image, title, description, github, live }) => {
  return (
    <Card
      sx={{
        width: 350,
        height: 420, // fixed height for all cards
        borderRadius: 3,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={title}
        sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
      />

      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h6" fontWeight={600}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ color: "gray", mt: 1, flexGrow: 1 }}>
          {description}
        </Typography>

        <Stack direction="row" spacing={2} mt={2}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ flex: 1 }}
            onClick={() => window.open(github, "_blank")}
          >
            GitHub
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="small"
            sx={{ flex: 1 }}
            onClick={() => window.open(live, "_blank")}
          >
            Live
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

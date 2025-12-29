import { Chip, Stack, Typography, Paper } from "@mui/material";
import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import DevicesIcon from "@mui/icons-material/Devices";
import SchoolIcon from "@mui/icons-material/School";

const skillGroups = [
  {
    title: "Core Frontend",
    items: [
      "HTML5",
      "CSS3 / SCSS",
      "JavaScript (ES6+)",
      "TypeScript",
      "Responsive UI",
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "React Query",
      "Material UI",
      "Tailwind CSS",
    ],
  },
  {
    title: "Tooling & Quality",
    items: [
      "Git & GitHub",
      "Vite",
      "Webpack",
      "REST / GraphQL APIs",
      "Jest & RTL",
      "Performance Audits",
    ],
  },
];

const Section = ({ icon, title, children }) => (
  <Paper
    elevation={0}
    sx={{
      p: { xs: 2.5, sm: 3 },
      borderRadius: "14px",
      border: "1px solid #eaeaea",
      backgroundColor: "#fff",
      width: "100%",
    }}
  >
    <Typography
      variant="h6"
      sx={{
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: "#6b08f9",
        mb: 2,
      }}
    >
      {icon}
      {title}
    </Typography>
    {children}
  </Paper>
);

const About = () => {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fafafa",
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
        width: "100%",
      }}
    >
      {/* FULL WIDTH – LINE BY LINE */}
      <Stack spacing={3} sx={{ width: "100%" }}>
        {/* EXPERIENCE */}
        <Section icon={<WorkIcon />} title="Professional Experience">
          <Stack spacing={2}>
            <Stack>
              <Typography fontWeight={600}>
                Full Stack Developer{" "}
                <Typography component="span" fontWeight={400}>
                  (June 2024 – July 2025)
                </Typography>
              </Typography>

              <Stack component="ul" sx={{ pl: 3, mt: 1 }}>
                <Typography component="li">
                  Built complete end-to-end web applications with scalable
                  frontend architecture and backend APIs.
                </Typography>
                <Typography component="li">
                  Created reusable UI components and optimized state-management
                  flows.
                </Typography>
                <Typography component="li">
                  Implemented secure authentication and high-performance server
                  logic.
                </Typography>
              </Stack>
            </Stack>

            <Stack>
              <Typography fontWeight={600}>
                Software Developer Intern — SoftCoded Technology{" "}
                <Typography component="span" fontWeight={400}>
                  (Sep 2023 – Feb 2024)
                </Typography>
              </Typography>

              <Stack component="ul" sx={{ pl: 3, mt: 1 }}>
                <Typography component="li">
                  Enhanced UX and performance through user feedback
                  implementation.
                </Typography>
                <Typography component="li">
                  Worked on real production features and bug fixes.
                </Typography>
                <Typography component="li">
                  Assisted with API integrations and clean code delivery.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Section>

        {/* SKILLS */}
        <Section icon={<DevicesIcon />} title="Skills">
          <Stack spacing={3}>
            {skillGroups.map((group) => (
              <Stack key={group.title} spacing={1}>
                <Typography fontWeight={600}>{group.title}</Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {group.items.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{
                        borderRadius: "8px",
                        fontSize: "0.8rem",
                      }}
                    />
                  ))}
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Section>

        {/* EDUCATION */}
        <Section icon={<SchoolIcon />} title="Education">
          <Typography fontWeight={600}>
            B.Com (Computer Applications)
          </Typography>
          <Typography variant="body2">
            Barkatullah University, Bhopal
          </Typography>
          <Typography variant="body2" color="text.secondary">
            2022 – 2025
          </Typography>
        </Section>
      </Stack>
    </Stack>
  );
};

export default About;

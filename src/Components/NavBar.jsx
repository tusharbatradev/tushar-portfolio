import React from "react";
import { Stack, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
];

const NavBar = () => {
  const location = useLocation();

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        padding: "20px",
        gap: "30px",
      }}
    >
      {links.map(({ label, path }) => {
        const isActive =
          path === "/"
            ? location.pathname === path
            : location.pathname.startsWith(path);

        return (
          <Typography
            key={path}
            component={NavLink}
            to={path}
            sx={{
              textDecoration: "none",
              color: isActive ? "#6b08f9" : "text.primary",
              fontWeight: isActive ? 600 : 400,
              "&:hover": {
                color: "#6b08f9",
              },
            }}
          >
            {label}
          </Typography>
        );
      })}
    </Stack>
  );
};

export default NavBar;

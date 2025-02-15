import React from "react";
import { Container, Link } from "@mui/material";
import Drawers from "./Drawers";

export default function Navbar() {
  return (
    <Container
      sx={{
        position: "sticky",
        top: 0,
        width: "100%",
        height: "3em",
        typography: "body1",
        borderBottom: 1,
        borderColor: "divider",
        ".drawer": {
          // drawer.tsx
          position: "absolute",
          left: 0,
          top: "0.2em",
        },
        ".home": {
          position: "absolute",
          left: "48%",
          top: "0.8em",
        },
      }}
    >
      <Drawers />
      <Link className="home" sx={{ color: "black" }} href="/" underline="none">
        Jindorry
      </Link>
    </Container>
  );
}

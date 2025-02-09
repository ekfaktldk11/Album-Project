import React from "react";
import Box from '@mui/material/Box';
import Drawers from "./Drawers";
import Link from "@mui/material/Link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <Box sx={{ width: '100%', typography: 'body1', borderBottom: 1, borderColor: 'divider'}}>
      <Drawers />
      <Link href="/">Jindorry</Link>
    </Box>
  );
}
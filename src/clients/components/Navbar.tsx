import React from "react";
import Box from '@mui/material/Box';
import Drawers from "./Drawers";
import Link from "@mui/material/Link";

export default function Navbar() {
  return (
    <Box sx={{
      display: 'flex',
      position: 'sticky',
      top: 0,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      typography: 'body1',
      borderBottom: 1,
      borderColor: 'divider',
      ".drawer": {
        position: 'relative',
        left: '16px',
      },
    }}>
      <Drawers />
      <Link sx={{ color: 'black' }} href="/" underline="none">Jindorry</Link>
    </Box>
  );
}
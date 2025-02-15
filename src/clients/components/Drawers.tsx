import * as React from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import SVG_DRAWER from "../svg/drawer";

export default function Drawers() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 150 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["About Me", "Note", "Album", "Visitors Book"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="drawer">
      <IconButton sx={{ marginLeft: "0.2em" }} onClick={toggleDrawer(true)}>
        <SVG_DRAWER />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

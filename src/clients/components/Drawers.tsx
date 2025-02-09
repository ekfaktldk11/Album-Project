import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SVG_DRAWER from '../svg/drawer';

export default function Drawers() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 150 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {['About Me', 'Note', 'Album', 'Visitors Book'].map((text, index) => (
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
        <div style={{ display: 'inline-block' }}>
            <Button onClick={toggleDrawer(true)}><SVG_DRAWER /></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}

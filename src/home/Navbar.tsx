import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";

function Navbar({
  onAboutClick,
  onWhyChooseMeClick,
  onProjectsClick,
  onContactClick,
}: any) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleItemClick = (func: any) => {
    func();
    setOpen(false);
  };

  let navData = [
    { text: "About", func: onAboutClick },
    { text: "Why Choose Me", func: onWhyChooseMeClick },
    { text: "Projects", func: onProjectsClick },
    { text: "Contact", func: onContactClick },
  ];

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#1e1e1e",
        color: "#e3e3e3",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <IconButton
        onClick={toggleDrawer(false)}
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          color: "#e3e3e3",
          zIndex:'999'
        }}
      >
        <CloseIcon />
      </IconButton>
      <List>
        {navData.map((data: any) => (
          <ListItem key={data.text} disablePadding>
            <ListItemButton onClick={() => handleItemClick(data.func)}>
              <ListItemText primary={data.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="sidenav-mobile">
      <Button onClick={toggleDrawer(true)}>
        {" "}
        <MenuIcon sx={{ color: "#e3e3e3" }} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default Navbar;

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
import { HomeCtx } from "../contexts/HomeCtx";
interface navItem {
  text: string;
  ref: React.RefObject<HTMLElement>;
}
function Navbar({}: any) {
  const homeCtx = React.useContext(HomeCtx);
  const { aboutRef, whyChooseMeRef, projectsRef, contactRef, scrollToSection } =
    homeCtx;

  console.log("<navbar >component");
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  let navData: navItem[] = [
    { text: "About", ref: aboutRef },
    { text: "Why Choose Me", ref: whyChooseMeRef },
    { text: "Projects", ref: projectsRef },
    { text: "Contact", ref: contactRef },
  ];

  const handleItemClick = (funcRef: React.RefObject<HTMLElement>) => {
    scrollToSection(funcRef);
    setOpen(false);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#1e1e1e",
        color: "#e3e3e3",
        height: "100%",
        boxShadow: "#00d8ff 0px 0px 50px 50px",
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
          color: "#00d8ff",
          zIndex: "999",
        }}
      >
        <CloseIcon
          sx={{
            fontSize: "28px",
            textShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            transition: "transform 150ms ease-out",
            "&:hover": {
              transform: "scale(1.060)",
            },
          }}
        />
      </IconButton>
      <List sx={{ paddingTop: "25%" }}>
        {navData.map((data: navItem) => (
          <ListItem key={data.text} disablePadding>
            <ListItemButton
              onClick={() => handleItemClick(data.ref)}
              sx={{ padding: "4% 10%" }}
            >
              <ListItemText
                sx={{ letterSpacing: "1.2px" }}
                primary={data.text}
              />
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
        <MenuIcon
          sx={{
            color: "#e3e3e3",
            fontSize: "40px",
            textShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            transition: "transform 150ms ease-out",
            "&:hover": {
              transform: "scale(1.060)",
            },
          }}
        />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default Navbar;

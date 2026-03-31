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
    setTimeout(() => {
      setOpen(newOpen);
    }, 250);
  };

  let navData: navItem[] = [
    { text: "About", ref: aboutRef },
    { text: "How I Work", ref: whyChooseMeRef },
    { text: "Projects", ref: projectsRef },
    { text: "Contact", ref: contactRef },
  ];

  const handleItemClick = (funcRef: React.RefObject<HTMLElement>) => {
    setOpen(false);
    setTimeout(() => {
      scrollToSection(funcRef);
    }, 250);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        background: "linear-gradient(180deg, #000000 0%, #2e003e 50%, #0000ff 100%)",
        color: "#e3e3e3",
        height: "100%",
        boxShadow: "#00d8ff 0px 0px 50px 50px",
        overflow:"hidden"
      }}
      role="presentation"
    >
      <IconButton
        onClick={toggleDrawer(false)}
        disableRipple
        disableFocusRipple
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          color: "#00d8ff",
          zIndex: "999",
          background: "transparent",
          transition: "all 250ms ease-out",
          "&:hover": {
            transform: "scale(1.1)",
            background: "transparent",

          },
          "&:active": {
            transform: "scale(0.8)",

          },
          "&:focus": {
            outline: "none",
            boxShadow: "none",
          },

          "&:focus-visible": {
            outline: "none",
            boxShadow: "none",
          },

          overflow: "hidden",
          WebkitUserDrag: "none",
          userSelect: "none",
          WebkitTapHighlightColor: "transparent",
          outline: "none",
        }}
      >
        <CloseIcon
          sx={{
            fontSize: "28px",
            textShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            display: "block",
          }}
        />
      </IconButton>
      <List sx={{ paddingTop: "25%", 
       }}>
        {navData.map((data: navItem) => (
          <ListItem key={data.text} disablePadding>
            <ListItemButton
              onClick={() => handleItemClick(data.ref)}
              sx={{
                padding: "4% 10%",
                transition: "transform 250ms ease-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
                "&:active": {
                  transform: "scale(0.8)",
                },
              }}
            >
              <ListItemText
                sx={{
                  letterSpacing: "1.2px",
                  fontFamily: "Inter !important",
                  fontWeight: "300 !important",
                }}
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
      <Button
        onClick={toggleDrawer(true)}
        disableRipple
        disableFocusRipple
        disableElevation
        sx={{
          border: "none",
          cursor: "pointer",
          background: "transparent",
          overflow: "hidden",
          transition: "transform 250ms ease-out",

          "&:hover": {
            transform: "scale(1.1)",
            background: "transparent",
            overflow:"hidden"
          },

          "&:active": {
            transform: "scale(0.8)",
          },

          "&:focus": {
            outline: "none",
            boxShadow: "none",
          },

          "&:focus-visible": {
            outline: "none",
            boxShadow: "none",
          },

          WebkitTapHighlightColor: "transparent",

          "& svg": {
            userSelect: "none",
            pointerEvents: "none",
          },
        }}
      >
        <MenuIcon
          sx={{
            color: "#e3e3e3",
            fontSize: "40px",
            display: "block",
            textShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
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

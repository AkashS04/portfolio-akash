import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { HomeCtx } from "../contexts/HomeCtx";
import { navData } from "./ReactNavbar";

interface navDataProps{
  navItems:navData[]
}

const Navtexttheme = createTheme({
  typography: {
    body1: {
      fontFamily: "Kanit-Regular",
      color: "#c9c9c9",
      transition: "0.2s",
      "&:hover": {
        color: "#e3e3e3",
      },
      fontSize: "1.125rem",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(36 36 36)",
          borderRadius: "8px",
          padding: "8px",
          cursor: "pointer",
          width: "165px",
          transition:
            "background-color 150ms ease-out , transform 150ms ease-out",
          "&:hover": {
            backgroundColor: "rgb(48 48 48)",
            transform: "scale(1.025)",
          },
        },
      },
    },
  },
});
const NavBarCBtn = ({navItems}: navDataProps) => {
  const homeCtx = useContext(HomeCtx);
  const { scrollToSection } = homeCtx;
  return (
    <>
      <ThemeProvider theme={Navtexttheme}>
        {navItems.map((nav: navData) => (
          <Box sx={{ height: "40px", width: "165px" }}>
            <Box key={nav.navKey} onClick={() => scrollToSection(nav.ref)}>
              <Paper>
                <Typography variant="body1" sx={{ letterSpacing: "1.2px" }}>
                  {nav.title}
                </Typography>
              </Paper>
            </Box>
          </Box>
        ))}
      </ThemeProvider>
    </>
  );
};
export default NavBarCBtn;

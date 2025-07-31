import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { HomeCtx } from "../contexts/HomeCtx";

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
          borderRadius: "12px",
          padding: "8px 16px",
          cursor: "pointer",
          width: "165px",
          transition: "background-color 150ms ease-out , transform 150ms ease-out",
          "&:hover": {
            backgroundColor: "rgb(48 48 48)",
            transform: "scale(1.025)"
          },
        },
      },
    },
  },
});
const NavBarCBtn = ({ navData }: any) => {
  const homeCtx = useContext(HomeCtx);
  const { scrollToSection } = homeCtx;
  return (
    <>
      <ThemeProvider theme={Navtexttheme}>
        {navData.map((nav: any) => (
          <Box sx={{height:"40px",width:"165px"}}>
            <Box
              key={nav.navKey}
              onClick={() => scrollToSection(nav.ref)}
            >
              <Paper>
                <Typography variant="body1" sx={{letterSpacing:"1.2px"}}>{nav.title}</Typography>
              </Paper>
            </Box>
          </Box>
        ))}
      </ThemeProvider>
    </>
  );
};
export default NavBarCBtn;

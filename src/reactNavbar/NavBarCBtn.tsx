import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { HomeCtx } from "../contexts/HomeCtx";

const Navtexttheme = createTheme({
  typography: {
    body1: {
      fontFamily: "Kanit-Regular",
      color: "#c9c9c9",
      transition: "0.3s",
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
          padding: "8px 8px",
          cursor: "pointer",
          width: "150px",
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "rgb(48 48 48)",
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
          <Box
            key={nav.navKey}
            onClick={() => scrollToSection(nav.ref)}
            sx={{
              transition: "transform 1s ease",
            }}
          >
            <Paper>
              <Typography variant="body1">{nav.title}</Typography>
            </Paper>
          </Box>
        ))}
      </ThemeProvider>
    </>
  );
};
export default NavBarCBtn;

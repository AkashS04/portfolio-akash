import { Box, Typography, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import reactLogo from "../assets/react.svg";
const Navtexttheme = createTheme({
  typography: {
    body1: {
      fontFamily: "Kanit-Regular",
      color: "#c9c9c9",
      transition: "0.3s",
      "&:hover": {
        color: "#e3e3e3",
      },
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(36 36 36)",
          borderRadius: "8px",
          padding: "12px 16px",
          cursor: "pointer",
          width: "124px",
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "rgb(48 48 48)",
          },
        },
      },
    },
  },
});
function ReactNavbar({
  onAboutClick,
  onWhyChooseMeClick,
  onProjectsClick,
  onContactClick,
}: any) {
  return (
    <div className="reactNavbar-main">
      <Box
        component="img"
        sx={{ height: "60px", cursor: "pointer", alt: "react-logo" }}
        src={reactLogo}
      />

      <Box
        sx={{
          width: "800px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <ThemeProvider theme={Navtexttheme}>
          <Box
            onClick={onAboutClick}
            sx={{
              transition: "transform 1s ease",
            }}
          >
            <Paper>
              <Typography variant="body1">About</Typography>
            </Paper>
          </Box>
          <Box
            onClick={onWhyChooseMeClick}
            sx={{
              transition: "transform 1.3s ease",
            }}
          >
            <Paper>
              <Typography variant="body1">Why Choose Me</Typography>
            </Paper>
          </Box>
          <Box
            onClick={onProjectsClick}
            sx={{
              transition: "transform 1.6s ease",
            }}
          >
            <Paper>
              <Typography variant="body1">Projects</Typography>
            </Paper>
          </Box>
          <Box
            onClick={onContactClick}
            sx={{
              transition: "transform 1.9s ease",
            }}
          >
            <Paper>
              <Typography variant="body1">Contact</Typography>
            </Paper>
          </Box>
        </ThemeProvider>
      </Box>
    </div>
  );
}
export default ReactNavbar;

import { Box, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

const ProgressBar = ({ title, value, percentage }: any) => {
  return (
    <>
      <Box>
        <Typography
          variant="h5"
          sx={{
            color: "#e3e3e3",
            fontFamily: "Oswald-Regular",
            fontSize: {
              lg: "1.5rem",
              md: "1.125rem",
              sm: "1rem",
              xs: "1rem",
            },
          }}
          align="left"
        >
          {title}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            sx={{ backgroundColor: "#e3e3e3" }}
            variant="determinate"
            value={value}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography
            variant="body2"
            sx={{
              color: "#e3e3e3",
              fontFamily: "Poppins-Semibold",
              fontSize: {
                lg: "1.1rem",
                md: "1rem",
                sm: "1.2rem",
                xs: "0.8rem",
              },
            }}
          >
            {percentage}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default ProgressBar;

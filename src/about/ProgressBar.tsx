import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

const ProgressBar = ({ title, value, percentage }: any) => {
  return (
    <Box>
      <Box>
        <Typography
          variant="body1"
          sx={{
            color: " #c7c7c7",
           fontFamily: "Inter",
                fontWeight: "300",
            letterSpacing:"0pt"
          }}
          align="left"
        >
          {title}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", justifyItems: "center" }}>
        <LinearProgress
          sx={{ backgroundColor: " #c7c7c7", width:"100%" }}
          variant="determinate"
          value={value}
        />

        <Typography
          variant="body2"
          sx={{
            color: " #c7c7c7",
            fontFamily: "Poppins-Semibold",
            ml: 1
          }}

        >
          {percentage}
        </Typography>
      </Box>
    </Box>

  );
};
export default ProgressBar;

import { Box, keyframes, Typography } from "@mui/material";
const ShimmerBg = keyframes`0% {background-position: -200% 0}
100%  {background-position: 200% 0}
`;
const ShimmerLayout = ({ contentText }: any) => {
  const shimmerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "16px",
    background: "linear-gradient(90deg, rgb(0 0 0 /29%), rgb(255 255 255 / 32%), rgb(0 0 0 / 29%))",
    backgroundSize: "200% 100%",
    animation: `${ShimmerBg} 2.8s infinite linear`,
  };
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box sx={{ width: "95%", margin: "8px" }}>
        <Box sx={shimmerStyle}>
          <Box
            sx={{
              height: "95vh",
              width: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
             
            }}
          >
            <Typography variant="h6" sx={{ color: "#e3e3e3" }}>
              {contentText}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ShimmerLayout;

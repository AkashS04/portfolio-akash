import { Typography } from "@mui/material";

const HTitles=()=>{
return <>
 <Typography
            variant="h1"
            sx={{
              color: "#e3e3e3",
              fontSize: {
                xl:"6rem",
                lg: "6rem",
                md: "5rem",
                sm: "4rem",
                xs: "3rem",
              },
              marginBottom:{
                xl:"1rem",
                lg:"1rem",
                md:"1rem",
                sm:"0.8rem",
                xs:"0.4rem"
              },
              fontFamily: "DancingScript-Regular",
              letterSpacing:"4px",
              textShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
            
          >
            Hi,This is Akash
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: "#e3e3e3",
              fontSize: {
                lg: "3rem",
                md: "2rem",
                sm: "2.25rem",
                xs: "2.25rem",
              },
              fontFamily: "Oswald-Regular",
              letterSpacing:"4px",
              textShadow:
                " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
            gutterBottom
          >
            React Developer
          </Typography>
</>
}
export default HTitles
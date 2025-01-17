import React, { forwardRef} from "react";
import { Box, Typography } from "@mui/material";
import phone from "../assets/icons/phone-call.png";
import email from "../assets/icons/email.png";
import whatsApp from "../assets/icons/whatsapp.png";
import linkedIN from "../assets/icons/linkedin.png";

const Contact = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>((_,ref:any) => {


  const clickCall = (value: any) => {
    if (value == 1) {
      window.location.href = "tel:+91 7448941714";
    } else if (value == 2) {
      window.location.href =
        "mailto:akashs10111212@gmail.com?subject=Hello Akash";
    } else if (value == 3) {
      window.open("https://wa.me/7448941714?text=Hi!%20Akash.", "_blank");
    } else if (value == 4) {
      window.open(
        "https://www.linkedin.com/in/akash-s-frontend-react10111212",
        "_blank"
      );
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        borderTop: "1px solid #707070",
        padding: {
          lg: ".5rem 0rem 4rem 0rem",
          md: ".5rem 0rem 4rem 0rem",
          sm: ".5rem 0rem 2rem 0rem",
          xs: ".5rem 0rem 2rem 0rem",
        },
      }}
    >
      <Box
        sx={{
          width: "auto",
          padding: {
            lg: "0rem 4rem",
            md: "0rem 4rem",
            sm: "0rem 3rem",
            xs: "0rem 1rem",
          },
        }}
      >
        <Box>
          <Typography
            variant="h4"
            align="left"
            sx={{ color: "#d52e2e", fontFamily: "Oswald-Bold", mt: "1rem" ,fontSize:{
              lg: "3rem",
              md: "2.6rem",
              sm: "2.5rem",
              xs: "2.25rem"
            } }}
            gutterBottom
          >
            CONTACT
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "space-around",
            padding: "2rem 0rem",
            border: "1px solid #707070",
            borderRadius: ".5rem",
            boxShadow: " rgb(131 38 38 / 14%) 0px 2px 8px 0px",
          }}
        >
          <Box>
            <Box
              component="img"
              onClick={() => clickCall(1)}
              sx={{
                cursor: "pointer",
                height: { lg: "100px", md: "80px", sm: "50px", xs: "40px" },
                width: "auto",
                filter:
                  "invert(85%) sepia(7%) saturate(26%) hue-rotate(319deg) brightness(101%) contrast(104%)",
                transition: "transform 250ms ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
              src={phone}
            />
          </Box>
          <Box>
            <Box
              component="img"
              onClick={() => clickCall(2)}
              sx={{
                cursor: "pointer",
                height: { lg: "100px", md: "80px", sm: "50px", xs: "40px" },
                width: "auto",
                filter:
                  "invert(85%) sepia(7%) saturate(26%) hue-rotate(319deg) brightness(101%) contrast(104%)",
                transition: "transform 250ms ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
              src={email}
            />
          </Box>
          <Box>
            <Box
              component="img"
              onClick={() => clickCall(3)}
              sx={{
                cursor: "pointer",
                height: { lg: "100px", md: "80px", sm: "50px", xs: "40px" },
                width: "auto",
                filter:
                  "invert(85%) sepia(7%) saturate(26%) hue-rotate(319deg) brightness(101%) contrast(104%)",
                transition: "transform 250ms ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
              src={whatsApp}
            />
          </Box>
          <Box>
            <Box
              component="img"
              onClick={() => clickCall(4)}
              sx={{
                cursor: "pointer",
                height: { lg: "100px", md: "80px", sm: "50px", xs: "40px" },
                width: "auto",
                filter:
                  "invert(85%) sepia(7%) saturate(26%) hue-rotate(319deg) brightness(101%) contrast(104%)",
                transition: "transform 250ms ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
              src={linkedIN}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
});
export default Contact;

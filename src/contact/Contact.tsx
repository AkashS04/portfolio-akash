import React, { forwardRef } from "react";
import { Box, Typography } from "@mui/material";
import phone from "../assets/icons/phone-call.png";
import email from "../assets/icons/email.png";
import whatsApp from "../assets/icons/whatsapp.png";
import linkedIN from "../assets/icons/linkedin.png";
import ContactIcon from "./ContactIcon";

const Contact = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>(
  (_, ref: any) => {
    console.log("<contact >component");

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

    const contactDetails = [
      { iId: 887, imgsrc: phone, clickValue: 1 ,alt:"mobile-link-icon" },
      { iId: 888, imgsrc: email, clickValue: 2,alt:"email-link-icon" },
      { iId: 889, imgsrc: whatsApp, clickValue: 3,alt:"whatsapp-link-icon" },
      { iId: 890, imgsrc: linkedIN, clickValue: 4, alt:"linkedIn-link-icon"},
    ];

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
              sx={{
                color: "#d52e2e",
                fontFamily: "Oswald-Bold",
                mt: "1rem",
                fontSize: {
                  lg: "3rem",
                  md: "2.6rem",
                  sm: "2.5rem",
                  xs: "2.25rem",
                },
              }}
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
              boxShadow: "#00d8ff 0px 0px 8px 0px",
            }}
          >
            {contactDetails.map((contact: any) => (
              <ContactIcon
                key={contact.iId}
                imgSrc={contact.imgsrc}
                clickValue={contact.clickValue}
                clickCall={clickCall}
                alt={contact.alt}
              />
            ))}
          </Box>
        </Box>
      </Box>
    );
  }
);
export default Contact;

import React, { forwardRef, useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import phone from "../assets/icons/phone-call.png";
import email from "../assets/icons/email.png";
import whatsApp from "../assets/icons/whatsapp.png";
import linkedIN from "../assets/icons/linkedin.png";
import ContactIcon from "./ContactIcon";
import { HomeCtx } from "../contexts/HomeCtx";

const Contact = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>(
  (__) => {
    console.log("<contact >component");
    const homeCtx = useContext(HomeCtx);
    const { contactRef } = homeCtx;

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

    interface contactDetails {
      iId: number;
      imgsrc: string;
      clickValue: number;
      alt: string;
    }

    const contactDetails: contactDetails[] = [
      { iId: 887, imgsrc: phone, clickValue: 1, alt: "mobile-link-icon" },
      { iId: 888, imgsrc: email, clickValue: 2, alt: "email-link-icon" },
      { iId: 889, imgsrc: whatsApp, clickValue: 3, alt: "whatsapp-link-icon" },
      { iId: 890, imgsrc: linkedIN, clickValue: 4, alt: "linkedIn-link-icon" },
    ];

    return (
      <Box
        ref={contactRef}
        sx={{
          background: "#e3f2ff0a",
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
            padding: "0% 8% ",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              align="left"
              sx={{
                color: "#d52e2e",
                fontFamily: "Oswald-Bold",
                mt: { lg: 8, md: 6, sm: 4, xs: 3 },
                mb: { lg: 8, md: 6, sm: 4, xs: 4 },
                fontSize: {
                  lg: "3rem",
                  md: "2.6rem",
                  sm: "2.5rem",
                  xs: "2.25rem",
                },
                letterSpacing: "4px",
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
              border: "0.25px solid #707070",
              boxShadow: "#00d8ff61 0px 0px 8px 0px",
              borderRadius: "8px",
            }}
          >
            {contactDetails.map((contact: contactDetails) => (
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

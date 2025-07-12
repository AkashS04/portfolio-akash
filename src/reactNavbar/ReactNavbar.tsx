import { Box } from "@mui/material";
import NavBarCBtn from "./NavBarCBtn";
import { useContext } from "react";
import { HomeCtx } from "../contexts/HomeCtx";

function ReactNavbar({}: any) {
  const homeCtx = useContext(HomeCtx);

  const { aboutRef, whyChooseMeRef, projectsRef, contactRef } = homeCtx;

  const navData = [
    { navKey: 343,
      title: "ABOUT", 
      ref: aboutRef },
    {
      navKey: 344,
      title: "WHY CHOOSE ME",
      ref: whyChooseMeRef,
    },
    {
      navKey: 345,
      title: "PROJECTS",
      ref: projectsRef,
    },
    {
      navKey: 346,
      title: "CONTACT",
      ref: contactRef,
    },
  ];

  

  return (
    <div className="reactNavbar-main">
      <Box
        sx={{
          width: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "3rem",
          marginTop: "2rem",
        }}
      >
        <NavBarCBtn navData={navData} />
      </Box>
    </div>
  );
}
export default ReactNavbar;

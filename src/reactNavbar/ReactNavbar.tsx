import Box from "@mui/material/Box";
import NavBarCBtn from "./NavBarCBtn";
import { useContext } from "react";
import { HomeCtx } from "../contexts/HomeCtx";
export interface navData {
  navKey: number;
  title: string;
  ref: React.RefObject<HTMLElement>;
}

function ReactNavbar({}: any) {
  const homeCtx = useContext(HomeCtx);

  const { aboutRef, whyChooseMeRef, projectsRef, contactRef } = homeCtx;

  const navData: navData[] = [
    { navKey: 343, title: "About", ref: aboutRef },
    {
      navKey: 344,
      title: "Why Choose Me",
      ref: whyChooseMeRef,
    },
    {
      navKey: 345,
      title: "Projects",
      ref: projectsRef,
    },
    {
      navKey: 346,
      title: "Contact",
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
        <NavBarCBtn navItems={navData} />
      </Box>
    </div>
  );
}
export default ReactNavbar;

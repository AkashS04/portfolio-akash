import { Box } from "@mui/material";
import NavBarCBtn from "./NavBarCBtn";

function ReactNavbar({
  onAboutClick,
  onWhyChooseMeClick,
  onProjectsClick,
  onContactClick,
}: any) {

  const navData=[{navKey:343,title:"About",clickFunction:onAboutClick},
    {navKey:344,title:"Why Choose Me",clickFunction:onWhyChooseMeClick},
    {navKey:345,title:"Projects",clickFunction:onProjectsClick},
    {navKey:346,title:"Contact",clickFunction:onContactClick},

  ]

  console.log('<reactnavbar >component')

  return (
    <div className="reactNavbar-main">
      <Box
        sx={{
          width: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <NavBarCBtn navData={navData} />
      </Box>
    </div>
  );
}
export default ReactNavbar;

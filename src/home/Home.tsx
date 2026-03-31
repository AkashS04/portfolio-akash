import React, { Suspense, memo } from "react";
import ShimmerLayout from "../ShimmerLayout/ShimmerLayout";
import HomeSplit from "./HomeSplit";

const TitleLazy = React.lazy(() => import("../title/Title"));
const NavbarLazy = React.lazy(() => import("./Navbar"));

const Home = memo(() => {

  return (
    <>
      <Suspense fallback={<ShimmerLayout contentText="Loading Introduction..." />}>
        <div className="titleDiv">
          <TitleLazy />
        </div>
        <NavbarLazy />
      </Suspense>
      <HomeSplit />
    </>
  );
});

export default Home;
import React, { Suspense } from "react";
import ShimmerLayout from "../ShimmerLayout/ShimmerLayout";
import BackToTop from "../backtotop/BackToTop";
const AboutLazy = React.lazy(() => import("../about/About"));
const WCMLazy = React.lazy(() => import("../whyChooseMe/WhyChooseMe"));
const ProjectLazy = React.lazy(() => import("../project_details/Project"));
const ContactLazy = React.lazy(() => import("../contact/Contact"));

const HomeSplit = () => {
  return (
    <>
      <Suspense
        fallback={<ShimmerLayout contentText={"Loading About contents... "} />}
      >
        <AboutLazy />
      </Suspense>
      <Suspense
        fallback={
          <ShimmerLayout contentText={"Loading Why choose me contents ... "} />
        }
      >
        <WCMLazy />
      </Suspense>
      <Suspense
        fallback={
          <ShimmerLayout contentText={"Loading Project details ... "} />
        }
      >
        <ProjectLazy />
      </Suspense>
      <Suspense
        fallback={<ShimmerLayout contentText={"Loading Contact info ... "} />}
      >
        <ContactLazy />
      </Suspense>

      <BackToTop />
    </>
  );
};
export default HomeSplit;

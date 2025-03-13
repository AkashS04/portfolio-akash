import "./App.css";
import React, { Suspense } from "react";
import BeforeIntro from "./beforeIntro/beforeIntro";

const LazyComponent = React.lazy(() => import("./home/Home"));

function App() {
  return (
    <>
      <Suspense fallback={<BeforeIntro />}>
        <LazyComponent />
      </Suspense>
    </>
  );
}
export default App;

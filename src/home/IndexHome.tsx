import { HomeProvider } from "../contexts/HomeCtx";
import Home from "./Home";

const IndexHome = () => {
  return (
    <HomeProvider>
      <Home />
    </HomeProvider>
  );
};
export default IndexHome;

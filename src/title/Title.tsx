import { useContext } from "react";
import HeadTitle from "./HeadTitle";
import SwiperImage from "./SwiperImage";
import { HomeCtx } from "../contexts/HomeCtx";

function Title() {
  console.log("<Title >component");
      const homeCtx = useContext(HomeCtx);
      const { titleLoading } = homeCtx;

  return (
    <>
      <SwiperImage />
      {titleLoading && <HeadTitle />}
    </>
  );
}
export default Title;

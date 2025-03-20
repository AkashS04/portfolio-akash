import { useEffect, useState } from "react";
import "./App.css";
import LoadingThreeDotsJumping from "./beforeIntro/beforeIntro";
import IndexHome from "./home/IndexHome";

function App() {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return Loading ? <LoadingThreeDotsJumping /> : <IndexHome />;
}
export default App;

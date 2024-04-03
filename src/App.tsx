import { useRecoilValue } from "recoil";
import "./index.css";
import { Home } from "./pages";
import { hamburgerOpenAtom } from "./components/atoms/atoms";
import MobTabNav from "./components/Navbar/MobileTab";
const App = () => {
  const ham = useRecoilValue(hamburgerOpenAtom);
  return (
    <>
      {ham && <MobTabNav />}
      <Home />
    </>
  );
};

export default App;

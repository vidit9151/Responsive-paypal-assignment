import NavButtons from "./NavButtons";
import Navlinks from "./Navlinks";
import Logo from "./logo";
import { hamburgerOpenAtom } from "../atoms/atoms";
import { useRecoilState } from "recoil";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useRecoilState(hamburgerOpenAtom);
  return (
    <div className="flex items-center justify-between py-4 border-b-[1px] border-gray-300">
      <div className="flex ">
        <Logo />
        <Navlinks />
      </div>
      <div className="pr-3 hidden md:block">
        <NavButtons />
      </div>
      <div
        className="md:hidden text-2xl pr-7 "
        onClick={() => setHamburgerOpen(!hamburgerOpen)}
      >
        {!hamburgerOpen && <GiHamburgerMenu />}
      </div>
    </div>
  );
};

export default Navbar;

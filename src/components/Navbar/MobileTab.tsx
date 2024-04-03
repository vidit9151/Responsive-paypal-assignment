import { IoCloseSharp } from "react-icons/io5";
import { useSetRecoilState } from "recoil";

import { navLinks } from "./NavlinkData";
import { hamburgerOpenAtom } from "../atoms/atoms";

const MobTabNav = () => {
  const buttonStyle =
    "border-2 border-paypalDark rounded-3xl w-32 h-10 text-paypalDark font-medium";
  const setHamburgerOpen = useSetRecoilState(hamburgerOpenAtom);
  return (
    <div className="bg-paypalSecondary    mt-2 mx-2 text-center px-4 pb-4 rounded-tl-2xl w-[50vw] h-[100vh] fixed top-0 right-0 z-10  ">
      <div
        className="absolute right-3 top-3 text-4xl"
        onClick={() => setHamburgerOpen(false)}
      >
        <IoCloseSharp />
      </div>
      <div className=" flex pt-20 justify-start flex-col  h-[100vh] gap-3 items-center font-semibold">
        {navLinks.map(({ id, title }) => (
          <div
            key={id}
            onClick={() => setHamburgerOpen(false)}
            className="hover:scale-105   "
          >
            <h1>{title}</h1>
          </div>
        ))}
        <div className="p-5">
          <button className={buttonStyle}>My PayPal</button>
          <br />
          <br />
          <button className={buttonStyle}>Log out</button>
        </div>
      </div>
    </div>
  );
};

export default MobTabNav;

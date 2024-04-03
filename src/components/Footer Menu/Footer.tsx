import Copyright from "./Copyright";
import FooterLogo from "./FooterLogo";
import FooterMenu1 from "./FooterMenu1";
import FooterMenu2 from "./FooterMenu2";
import FooterMenu3 from "./FooterMenu3";
import MobileCopyright from "./MobileCopyright";

const Footer = () => {
  return (
    <div>
      <div className="relative h-20">
        <FooterLogo />
      </div>
      <div className="px-7 pt-2">
        <FooterMenu1 />
        <div className="h-[2px] bg-[#bebebe] shadow-md shadow-[#bebebe] opacity-50"></div>
        <div className="mt-4 mb-12 flex justify-between">
          <FooterMenu2 />
          <Copyright />
          <FooterMenu3 />
        </div>
        <MobileCopyright />
      </div>
    </div>
  );
};

export default Footer;

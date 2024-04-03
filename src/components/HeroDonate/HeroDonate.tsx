import BannerContainer from "./top banner/BannerContainer";
import DonatePageBtn from "./Donate with paypal/DonatePageBtn";
import Section from "./Hero Sections/Section";

const HeroDonate = () => {
  return (
    <div className="lg:px-28">
      <DonatePageBtn />
      <BannerContainer />
      <Section />
    </div>
  );
};

export default HeroDonate;

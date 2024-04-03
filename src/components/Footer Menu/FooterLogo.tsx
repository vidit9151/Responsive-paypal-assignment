import paypal from "../../assets/logo.png";
import paypalText from "../../assets/paypal text.svg";

const FooterLogo = () => {
  return (
    <div className="flex justify-start items-center">
      <img src={paypal} alt="" className="h-16 p-0 absolute left-1 top-3" />
      <img src={paypalText} alt="" className="h-24 absolute left-16 top-0" />
    </div>
  );
};

export default FooterLogo;

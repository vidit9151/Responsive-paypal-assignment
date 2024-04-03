import FooterCards from "./FooterCards";

const FooterBanner = () => {
  return (
    <div className="bg-paypalSecondary">
      <div className="lg:px-28">
        <h1 className="text-2xl pt-8 font-medium">
          PayPal helps your gifts do more good
        </h1>
        <FooterCards />
      </div>
    </div>
  );
};

export default FooterBanner;

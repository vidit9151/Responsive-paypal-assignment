import SharedCArdSocials from "./SharedCArdSocials";
import PaypalLink from "./PaypalLink";

const ShareCard = () => {
  return (
    <div className="border-2 rounded-lg mt-8 mb-10">
      <h2 className="font-semibold text-center mt-5 mb-3">
        Share and inspire others
      </h2>

      <SharedCArdSocials />

      <PaypalLink />
    </div>
  );
};

export default ShareCard;

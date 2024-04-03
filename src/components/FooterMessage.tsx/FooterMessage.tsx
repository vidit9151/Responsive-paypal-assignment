const FooterMessage = () => {
  return (
    <div className="md:px-28 px-10  pt-10 pb-5">
      <p className="text-xs">
        PayPal covers all transaction fees. You're donating to PayPal Giving
        Fund, a 501(c)(3) charity,
        <span className="text-paypalLight1"> subject to its terms. </span>
        Donations can take
        <span className="text-paypalLight1"> up to 45 days </span>to get to your
        chosen charity. It's rare, but if
        <span className="text-paypalLight1 ml-1">
          we can't send your money to this charity
        </span>
        , we'll ask you to recommend another. If we can't reach you, we'll send
        it to a similar charity and keep you updated. Your donation is typically
        tax-deductible in the US. <br />
        The logos on this site and descriptions under "About this charity" are
        provided by and managed by the charities themselves
      </p>
    </div>
  );
};

export default FooterMessage;

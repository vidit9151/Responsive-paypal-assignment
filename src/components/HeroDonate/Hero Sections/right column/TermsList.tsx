const TermsList = () => {
  return (
    <ul className="text-sm list-disc my-4 pr-3 ml-7 ">
      <li>PayPal covers all transaction fees</li>
      <li>
        You are donating to PayPal giving fund, 501(c)(3) charity,
        <p className="text-paypalLight1 inline"> subjects to its terms</p>.
      </li>
      <li>
        Donations can take
        <p className="text-paypalLight1 inline"> up to 45 days </p>
        to get to your chosen charity. It's rare, but if
        <p className="text-paypalLight1 inline ml-1">
          we can't send your money to this charity
        </p>
        , we'll ask you to recommend another.
      </li>
      <li>
        If we can't reach you, we'll send it to a similar charity and keep you
        updated. Your donation is typically tax-deductible in the US.
      </li>
    </ul>
  );
};

export default TermsList;

const PaypalLink = () => {
  return (
    <div className="grid grid-cols-[60%,20%] justify-center gap-4 items-center bg-paypalSecondary m-4 h-28 rounded-md">
      <div className="break-words">
        https://www.paypal.com/US/fundraiser/charity/1279469
      </div>
      <div>
        <button
          type="button"
          className="border-2 border-paypalDark rounded-3xl w-16 h-8 text-sm text-paypalDark bg-white ml-3"
        >
          copy
        </button>
      </div>
    </div>
  );
};

export default PaypalLink;

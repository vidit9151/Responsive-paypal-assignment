const NavButtons = () => {
  const buttonStyle =
    "border-2 border-paypalDark rounded-3xl w-32 h-10 text-paypalDark font-medium";
  return (
    <div className="flex gap-5 ">
      <button className={buttonStyle}>My PayPal</button>
      <button className={buttonStyle}>Log out</button>
    </div>
  );
};

export default NavButtons;

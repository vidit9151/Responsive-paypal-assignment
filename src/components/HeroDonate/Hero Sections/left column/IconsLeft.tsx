import wallet from "../../../../assets/wallet.svg";
import heart from "../../../../assets/heart.svg";

const IconsLeft = () => {
  return (
    <div className="flex gap-4 py-6 pr-2">
      <div className=" bg-gray-200 p-3 rounded-full">
        <img src={wallet} alt="" className="w-5" />
      </div>
      <div className=" bg-gray-200 p-3 rounded-full">
        <img src={heart} alt="" className="w-5" />
      </div>
    </div>
  );
};

export default IconsLeft;

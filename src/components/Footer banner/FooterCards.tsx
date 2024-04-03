import locker from "../../assets/locker.svg";
import transaction from "../../assets/transaction.svg";
import reciept from "../../assets/reciep.svg";
const cardData = [
  {
    id: 1,
    img: locker,
    heading: "Safe and secure donations",
    desc: "Charities are in good standing so you can donate more securely.",
  },
  {
    id: 2,
    img: transaction,
    heading: "No transaction fees",
    desc: "Help charities pay less in fees and do mare with your donation.",
  },
  {
    id: 3,
    img: reciept,
    heading: "Recieve a tax reciept",
    desc: "A record of your kindness is sent right to your email.",
  },
];
const FooterCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 py-6  ">
      {cardData.map(({ id, img, heading, desc }) => {
        return (
          <div
            key={id}
            className="pr-4 flex flex-col items-center md:items-start"
          >
            <img src={img} alt="" className="w-24 py-3 " />
            <h1 className="font-semibold ">{heading}</h1>
            <h3>{desc}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default FooterCards;

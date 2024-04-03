import facebook from "../../../../assets/facebook.svg";
import twitter from "../../../../assets/twitter.svg";
import mail from "../../../../assets/mail.svg";

const socail = [
  { id: 1, img: facebook },
  { id: 2, img: twitter },
  { id: 3, img: mail },
];
const SharedCArdSocials = () => {
  return (
    <div className="flex justify-center gap-4 ">
      {socail.map(({ id, img }) => {
        return (
          <div key={id} className="p-3 bg-paypalSecondary rounded-full">
            <div className="w-5">
              <img src={img} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SharedCArdSocials;

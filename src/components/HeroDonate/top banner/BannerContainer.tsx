import banner from "../../../assets/hero back.jpg";
import BannerProfile from "./BannerProfile";
const BannerContainer = () => {
  const backgroudImageStyle = {
    backgroundImage: `url(${banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "150px",
  };
  return (
    <div
      style={backgroudImageStyle}
      className="rounded-t-2xl flex items-end relative mb-[65px]"
    >
      <BannerProfile />
    </div>
  );
};

export default BannerContainer;

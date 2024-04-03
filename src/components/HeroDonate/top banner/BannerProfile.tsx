import userImg from "../../../assets/User.png";
const BannerProfile = () => {
  return (
    <div className="pl-3 absolute top-[105px]">
      <div className="bg-white inline-block rounded-full p-4 border-gray-100 border-2 ">
        <img width="50px" src={userImg} alt="user image" />
      </div>
    </div>
  );
};

export default BannerProfile;

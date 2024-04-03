import LeftCol from "./left column/LeftCol";
import RightCol from "./right column/RightCol";

const Section = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 pl-2">
      <LeftCol />
      <RightCol />
    </div>
  );
};

export default Section;

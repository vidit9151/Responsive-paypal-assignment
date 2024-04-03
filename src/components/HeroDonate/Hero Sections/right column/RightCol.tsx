import Amounts from "./Amounts";
import DonateNow from "./DonateNow";
import ShareCard from "./ShareCard";
import ShareInput from "./ShareInput";
import TermsList from "./TermsList";

const RightCol = () => {
  return (
    <div className="md:pl-20">
      <br />
      <Amounts />
      <ShareInput />
      <DonateNow />
      <TermsList />
      <ShareCard />
    </div>
  );
};

export default RightCol;

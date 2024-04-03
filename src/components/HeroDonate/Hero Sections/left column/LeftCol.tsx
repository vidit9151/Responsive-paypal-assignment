import IconsLeft from "./IconsLeft";
import TagButton from "./TagButton";

const LeftCol = () => {
  return (
    <div className="pr-4">
      <h3 className="text-sm">Donate to PayPal Giving Funds</h3>
      <h1 className="text-4xl font-medium">Figures of Speech Theatre</h1>
      <TagButton />
      <p className="text-base">Freeport, ME</p>
      <p className="text-base">EIN: 01-0432620</p>
      <IconsLeft />
      <p>
        Figures of Speech Theatre creates and tours visionary works of
        performance forged at the intersection of poetry, music, sculpture and
        dance. The company has toured all over the world-from Sofia, Bulgaria to
        Tokyo, Japan, to Lima, Peru. Besides performing at venues such as the
        Kennedy Center, the Smithsonian Institution, and the New Victory Theatre
        on Broadway, the company retains a strong commitment to teaching and
        performing throughout its home state of Maine.
      </p>
      <p className="text-xs py-6 font-medium">
        Source: PayPal Giving Fund charity problem
      </p>
      <p className="text-xs text-gray-600 font-medium ">
        The info in this profile is provided and managed by the charities
        themselves
      </p>
    </div>
  );
};

export default LeftCol;

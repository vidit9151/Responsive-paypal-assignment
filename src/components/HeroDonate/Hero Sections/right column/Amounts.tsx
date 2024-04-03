const amounts = [
  { id: 1, price: "$25", active: false },
  { id: 2, price: "$50", active: false },
  { id: 3, price: "$100", active: true },
  { id: 4, price: "$200", active: false },
  { id: 5, price: "other", active: false },
];
const Amounts = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {amounts.map(({ id, price, active }) => {
        return (
          <div
            key={id}
            className={
              active
                ? `text-center w-32   h-14 pt-1 items-center flex justify-center rounded-md shadow-sm bg-[#152b8e]  text-white shadow-slate-400`
                : `text-center w-32   h-14 pt-1 items-center flex justify-center rounded-md shadow-sm shadow-slate-400`
            }
          >
            <button type="button">{price}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Amounts;

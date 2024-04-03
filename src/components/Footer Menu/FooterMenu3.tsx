const Menu3 = [
  { id: 1, title: "Accessibility" },
  { id: 2, title: "Privacy" },
  { id: 3, title: "Cookies" },
  { id: 4, title: "Legal" },
];
const FooterMenu3 = () => {
  return (
    <div className="flex items-center justify-between pb-4">
      <ul className="flex gap-3 flex-col md:flex-row ">
        {Menu3.map(({ id, title }) => (
          <li
            className="text-sm font-semibold text-[#001a59] text-center"
            key={id}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu3;

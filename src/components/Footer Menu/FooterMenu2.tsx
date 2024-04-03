const Menu2 = [
  { id: 1, title: "About" },
  { id: 2, title: "Newsroom" },
  { id: 3, title: "Jobs" },
  { id: 4, title: "Investor Relations" },
  { id: 5, title: "Values in Action" },
  { id: 6, title: "Public Policy" },
  { id: 7, title: "Sitemap" },
];
const FooterMenu2 = () => {
  return (
    <div className="flex items-center justify-between pb-4">
      <ul className="flex gap-3 flex-col md:flex-row  ">
        {Menu2.map(({ id, title }) => (
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

export default FooterMenu2;

const Copyright = () => {
  const date = new Date();
  return (
    <div className=" hidden md:inline-block md:w-[22rem]  text-right text-sm">
      &copy; 1999 - {date.getFullYear()}
    </div>
  );
};

export default Copyright;

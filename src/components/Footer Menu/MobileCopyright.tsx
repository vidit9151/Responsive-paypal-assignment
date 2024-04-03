const MobileCopyright = () => {
  const date = new Date();
  return (
    <div className="md:hidden text-center">
      {" "}
      &copy; 1999 - {date.getFullYear()}
    </div>
  );
};

export default MobileCopyright;

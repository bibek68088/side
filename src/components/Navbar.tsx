const Navbar = () => {
  return (
    <div className=" sticky top-0 flex justify-end bg-black">
      <nav className="flex justify-center items-center gap-[26px] uppercase text-white p-6 mx-24">
        <ul className="flex gap-[26px] font-bold">
          <li className="">Home</li>
          <li className="">About</li>
          <li className="">Contact</li>
        </ul>
        <div className="">
        <button className="uppercase items-center font-bold bg-teal-700 rounded-sm w-32">Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

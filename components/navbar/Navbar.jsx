// ** Import Assets
import { IniNav } from "@/constanst/navItems";

const Navbar = () => {
  return (
    <nav className="flex fixed top-0 w-full text-white items-center bg-transparent justify-between py-10 px-32">
      <h1 className="text-3xl font-bold cursor-not-allowed">Logo</h1>

      <div className="flex gap-5">
        {IniNav.map((item) => (
          <div className="border cursor-pointer border-white px-4 py-2 rounded-xl">
            {item.name}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

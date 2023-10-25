import { User } from "lucide-react";

const Navbar = () => {
  return (
    <nav>
      <img src="https://i.ytimg.com/vi/lFNsZWzdyAM/maxresdefault.jpg" alt="" />
      <button>
        <span>
          <User size={20} />
        </span>
        Vraj Darji
      </button>
    </nav>
  );
};
export default Navbar;

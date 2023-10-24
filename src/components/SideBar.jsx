import { Award, BarChart2, Clipboard } from "lucide-react";

const SideBar = () => {
  const btns = [
    { icon: <BarChart2 />, title: "dashboard" },
    { icon: <Award />, title: "skill test" },
    { icon: <Clipboard />, title: "internships" },
  ];
  return (
    <div className="sidebar">
      {btns.map((btn) => (
        <button>
          {btn.icon}
          {btn.title}
        </button>
      ))}
    </div>
  );
};
export default SideBar;

import Stats1 from "./ui/Stats1";
import Stats2 from "./ui/Stats2";
const Page = () => {
  return (
    <div className="content">
      <p>Skill Test</p>
      <div className="_grid">
        <Stats1 />
        <Stats2 />
      </div>
    </div>
  );
};
export default Page;

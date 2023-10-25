import { useState } from "react";
import Stats1 from "./ui/Stats1";
import Stats2 from "./ui/Stats2";
const Page = () => {
  const [data, setData] = useState({ rank: 12980, percentile: 37, score: 7 });
  const updatData = (newData) => {
    setData(newData);
  };
  return (
    <div className="content">
      <p>Skill Test</p>
      <div className="_grid">
        <Stats1 sendDataToParent={updatData} />
        <Stats2 data={data} />
      </div>
    </div>
  );
};
export default Page;

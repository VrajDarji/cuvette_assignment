import { useState } from "react";
import UpdateModal from "./update-modal";
import toast from "react-hot-toast";
import { Legend, Line, LineChart, Tooltip, XAxis, Dot } from "recharts";
const Stats1 = ({ sendDataToParent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({ rank: 12980, percentile: 37, score: 7 });
  const updateData = (newData) => {
    setData(newData);
    console.log(newData);
    sendDataToParent(data);
    setIsOpen(false);
    toast.success("Data Updated");
  };

  const stats = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4KsM4M1h7VOhHruHoZTHJJBxyXYyp_ewFcQ&usqp=CAU",
      data: data.rank,
      p: "your rank",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvXY_07nDvqCxAWIgQ3Krkdt679x-_omObA&usqp=CAU",
      data: `${data.percentile}%`,
      p: "percentile",
    },
    {
      img: "https://t4.ftcdn.net/jpg/00/77/82/27/360_F_77822740_cgMDmNca3rj2A4yp5yRguMAtTqyTBlHd.jpg",
      data: `${data.score} / 15`,
      p: "correct answers",
    },
  ];
  const graphdata = [
    { value: Math.floor(Math.random() * 10), tag: 0 },
    { value: Math.floor(Math.random() * 40), tag: 20 },
    { tag: parseInt(data.percentile, 10), value: data.percentile },
    { value: Math.floor(Math.random() * 100), tag: 40 },
    { value: Math.floor(Math.random() * 80), tag: 60 },
    { value: Math.floor(Math.random() * 60), tag: 80 },
    { value: Math.floor(Math.random() * 10), tag: 100 },
  ];
  const sorted = [...graphdata].sort((a, b) => a.tag - b.tag);
  return (
    <>
      <UpdateModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        onConfirm={updateData}
        data={data}
        setData={setData}
      />
      <div className="stats1">
        <div className="box1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png"
            alt=""
          />
          <div className="text">
            <h3>hypertext markup language</h3>
            <p>Questions:08 | Duration:18mins | Submitted on 5 June 2021</p>
          </div>
          <button onClick={() => setIsOpen(true)}>Update</button>
        </div>
        <div className="box2">
          <p>Quick Statistics</p>
          <div className="stats">
            {stats.map((e) => {
              return (
                <div className="stats_bullets">
                  <div className="img">
                    <img src={e.img} alt="" />
                  </div>
                  <div className="text">
                    <h1>{e.data}</h1>
                    <p>{e.p}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="box3">
          <h3>Comparison Graph</h3>
          <p>
            <span>You scored {data.percentile}% percentile </span> which is{" "}
            {data.percentile > 72 ? "higher" : "lower"} than the average
            percentile 72% of all engineer who took this assesment
          </p>
          <LineChart
            width={800}
            height={400}
            data={sorted}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            {sorted.map((entry, index) => (
              <Dot
                key={index}
                cx={entry.tag} // Specify the x-coordinate of the data point
                cy={entry.value} // Specify the y-coordinate of the data point
                r={4} // Customize the radius of the dot
                fill={entry.tag === data.percentile ? "red" : "blue"} // Change the color based on the highlight property
              />
            ))}
            <Line type={"monotone"} dataKey={"value"} stroke="#8884d8" />
            <XAxis dataKey="tag" />
            <Tooltip />
            <Legend />
          </LineChart>
        </div>
      </div>
    </>
  );
};
export default Stats1;

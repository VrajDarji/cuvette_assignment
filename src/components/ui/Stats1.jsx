import { useState } from "react";
import UpdateModal from "./update-modal";
import toast from "react-hot-toast";

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
        </div>
      </div>
    </>
  );
};
export default Stats1;

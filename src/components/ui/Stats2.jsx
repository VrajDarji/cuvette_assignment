import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip);
const Stats2 = ({ data }) => {
  const stats = [
    { tag: "HTML Tools,Forms,History", score: 80, rgb: "67,138,246" },
    { tag: "Tags & Reference in HTML", score: 60, rgb: "255,145,66" },
    { tag: "Tables & CSS Basics", score: 24, rgb: "251,94,94" },
    { tag: "Tables & CSS Basics", score: 90, rgb: "46,201,113" },
  ];
  const pie_data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        data: [data.score, 15 - data.score], // Total questions - correct questions
        backgroundColor: ["#438AF6", "#EDF4FF"],
      },
    ],
  };
  return (
    <>
      <div className="stats2">
        <div className="box1">
          <p>Syllabus wise Analysis</p>
          {stats.map((stat) => {
            return (
              <div className="lists">
                <p>{stat.tag}</p>
                <div className="bars">
                  <div
                    className="full_bar"
                    style={{ backgroundColor: `rgba(${stat.rgb},0.2)` }}
                  >
                    <div
                      className="completed"
                      style={{
                        width: `${stat.score}%`,
                        backgroundColor: `rgb(${stat.rgb})`,
                      }}
                    ></div>
                  </div>
                  <p style={{ color: `rgb(${stat.rgb})`, fontWeight: 600 }}>
                    {stat.score}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="box2">
          <div className="head">
            <p>Question Analysis</p>
            <p>{data.score} / 15</p>
          </div>
          <p>
            <span>You scored {data.score} question correct out of 15 . </span>
            {data.score > 10
              ? "Great Job! You did well"
              : "However it still need some improvements"}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Doughnut
              data={pie_data}
              options={{
                cutout: 100,
                radius: 100,
                padding: "0px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Stats2;

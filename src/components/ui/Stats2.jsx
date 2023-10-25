const Stats2 = ({ data }) => {
  const stats = [
    { tag: "HTML Tools,Forms,History", score: 80, rgb: "67,138,246" },
    { tag: "Tags & Reference in HTML", score: 60, rgb: "255,145,66" },
    { tag: "Tables & CSS Basics", score: 24, rgb: "251,94,94" },
    { tag: "Tables & CSS Basics", score: 90, rgb: "46,201,113" },
  ];
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
        </div>
      </div>
    </>
  );
};
export default Stats2;

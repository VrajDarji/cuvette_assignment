import { useState } from "react";

const UpdateModal = ({ isOpen, onConfirm, onClose }) => {
  const [data, setData] = useState({
    rank: 12890,
    percentile: 37,
    score: 7,
  });
  const options = [
    { tag: "Update your rank", value: data.rank },
    { tag: "Update your percentile", value: data.percentile },
    { tag: "Update your current score(out of 15)", value: data.score },
  ];
  return (
    isOpen && (
      <div className="modal_container">
        <div className="modal">
          <div className="head">
            <h1>Update Scores</h1>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png"
              alt=""
            />
          </div>
          <div className="con">
            {options.map((option, index) => (
              <div className="con_bullet">
                <span>{index + 1}</span>
                <p>{option.tag}</p>
                <input
                  type="text"
                  value={option.value}
                  onChange={(e) => {
                    if (index === 0) {
                      setData((i) => ({ ...i, rank: e.target.value }));
                    }
                    if (index === 1) {
                      setData((i) => ({ ...i, percentile: e.target.value }));
                    }
                    if (index === 2) {
                      setData((i) => ({ ...i, score: e.target.value }));
                    }
                  }}
                  required
                />
              </div>
            ))}
          </div>
          <div className="btns">
            <button onClick={onClose}>Close</button>
            <button onClick={() => onConfirm(data)}>Save</button>
          </div>
        </div>
      </div>
    )
  );
};

export default UpdateModal;

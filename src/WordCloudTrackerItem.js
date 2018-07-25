import React from 'react';

function WordCloudTrackerItem(props) {
  return (
    <div className="wc-line">
      <style>{`
        .wc-line {
          border-radius: 3px;
          position: relative;
        }

        .wc-line p {
          color: white;
          font-size: 20px;
        }
      `}</style>
      <p>{props.lineValue}</p>
    </div>
  );
}

export default WordCloudTrackerItem;

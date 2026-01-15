import React, { useState } from "react";
import "./styles.css";

const CoinInfo = ({ heading, desc }) => {
  const [flag, setFlag] = useState(false);
  
  if (!desc) return null;
  
  const shortDesc =
    desc.slice(0, 350) +
    "...<br><p style='color:var(--grey);'>Read More...</p>";
  const longDesc =
    desc + "...<br><p style='color:var(--grey);'>Read Less...</p>";
  return (
    <div className="grey-wrapper">
      <h2 className="coin-info-heading">{heading}</h2>
      {desc.length > 350 ? (
        <p
          className="coin-info-desc"
          onClick={() => setFlag(!flag)}
          dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }}
        />
      ) : (
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      )}
    </div>
  );
};

export default CoinInfo;

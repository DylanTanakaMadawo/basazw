import React from "react";
import { Card } from "../Card";

import { DATA } from "../../Data";

export const Cards = () => {
  return (
    <div>
      <h1 style={{ marginLeft: "20px" }}>Available Tasks</h1>
      <div>
        {DATA.map((product) => (
          <Card data={product} />
        ))}
      </div>
    </div>
  );
};

import React from "react";
import { Card } from "../Card";

import { DATA } from "../../Data";

export const Cards = () => {
  return (
    <div>
      {DATA.map((product) => (
        <Card data={product} />
      ))}
    </div>
  );
};

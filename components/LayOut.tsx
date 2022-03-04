import React from "react";
import { LayOutProps } from "./componentsType";

function LayOut({ children }: LayOutProps) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>local header</div>
      {children}
      <div>local footer</div>
    </div>
  );
}

export default LayOut;

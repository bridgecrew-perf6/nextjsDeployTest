import React, { CSSProperties } from "react";
import { GlobalLayOutProps } from "../componentsType";

function GlobalLayOut({ children }: GlobalLayOutProps) {
  const container: CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: "10px",
  };
  const styles: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%",
    width: "100%",
  };
  return (
    <div style={container}>
      <div>GlobalHeader</div>
      <div style={styles}>{children}</div>
      <div>GlobalFooter</div>
    </div>
  );
}

export default GlobalLayOut;

import React from "react";
import { Audio } from "react-loader-spinner";

export default function Spinner() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Audio height="100" width="100" color="grey" ariaLabel="loading" />
    </div>
  );
}

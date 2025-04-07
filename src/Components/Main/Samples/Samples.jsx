import React from "react";
import Caption from "../../Caption";
import Sample from "./Sample";

export default function Samples() {
  return (
    <div className="my-25">
      <Caption title={"نمونه‌کارها"}></Caption>
      <div className="container mt-15">
        <Sample></Sample>
      </div>
    </div>
  );
}

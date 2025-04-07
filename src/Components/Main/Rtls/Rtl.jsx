import React from "react";
import { Link } from "react-router-dom";

export default function Right() {
  return (
    <Link to={"https://www.rtl-theme.com/"} className="flex items-center gap-1">
      <img src="images/rtl.png" alt="rtl" />
    </Link>
  );
}

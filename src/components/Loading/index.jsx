import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <div data-testid="loading">
        <AiOutlineLoading size={"3.5em"} className="rotating" />
      </div>
    </div>
  );
};

export default Loading;

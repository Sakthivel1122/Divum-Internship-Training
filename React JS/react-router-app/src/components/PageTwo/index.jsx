import React from "react";
import { useSearchParams } from "react-router-dom";

const PageTwo = () => {
  const [searchParems, setSearchParems] = useSearchParams();
  console.log("HII ",searchParems.get("data"));
  return (
    <div className="container">
      <h2>Page Two</h2><br />
      <p>
        {" "}
        Data from Search Parems:{" "}
        <span style={{ color: "green" }}>{searchParems.get("data")}</span>
      </p>
    </div>
  );
};

export default PageTwo;

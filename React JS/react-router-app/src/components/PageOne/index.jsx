import React, { useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const PageOne = () => {
  const inputRef = useRef();
  const [searchParems, setSearchParems] = useSearchParams();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParems({ data: inputRef.current.value });
    navigate("/pagetwo?" + window.location.href.split("?")[1]);
  };
  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <h2>Pass data to Page 2</h2>
        <br />
        <input ref={inputRef} type="text" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default PageOne;

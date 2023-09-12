import React, { useEffect } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const BookLayout = () => {
  const [searchParam, setSearchParam] = useSearchParams({ n: 3 });

  useEffect(() => {
    setSearchParam({ n: 3 });
  }, []);

  return (
    <div className="BookLayout container">
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to={`/books/${searchParam.get("n")}`}>
        Book {searchParam.get("n")}
      </Link>
      <br />
      <Link to="/books/new">New Book</Link>
      <input
        type="number"
        value={searchParam.get("n")}
        onChange={(e) => {
          setSearchParam({ n: e.target.value });
        }}
      />
      <Outlet context={{ hello: "World" }} />
    </div>
  );
};

export default BookLayout;

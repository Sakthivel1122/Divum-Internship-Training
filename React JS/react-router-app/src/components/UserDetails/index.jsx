import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const UserDetails = () => {
  const data = useParams();
  const [searchParems, setSeatchParems] = useSearchParams();

  return (
    <div className="container">
      <p>Details about User {data.userId}</p>
      <p>{searchParems?.get("id")}</p>
    </div>
  );
};

export default UserDetails;

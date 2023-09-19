import React, { useEffect, useState } from "react";
import "./SearchFilter.css";
import Contants from "../../Data/Contacts.json";

const SearchFilter = () => {
  const [filteredContacts, setFilteredContacts] = useState(Contants);
  const [search, setSearch] = useState("");
  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="SearchFilter">
      <h1>Search Filter</h1>
      <input type="text" value={search} onChange={handleOnChange} />
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Contact No</th>
        </thead>
        <tbody>
          {Contants.filter((contact) => {
            return search.toLowerCase() === ""
              ? true
              : contact.name.toLowerCase().includes(search);
          }).map((contact) => {
            return (
              <tr>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.contact}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchFilter;

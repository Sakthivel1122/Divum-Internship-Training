import React, { useEffect, useState } from "react";
import "./App.css";
import data from "./constants/data";
const App = () => {
    const[currentPage,setCurrentPage] = useState(1);
    const [recordsPerPage,setRecordsPerPage] = useState(5);
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const [records,setRecords] = useState(data.slice(firstIndex,lastIndex));
    const nPage = Math.ceil(data.length / recordsPerPage);
    const numbers = [...Array(nPage + 1).keys()].splice(1);
    const prePage = () => {
      if(currentPage != firstIndex){
      setCurrentPage(currentPage - 1);
    }
  }
  const changeCurrentPage = (n) => {
    setCurrentPage(n);
  }
  const nextPage = () => {
    if(currentPage != lastIndex){
      setCurrentPage(currentPage + 1);
    }
  }
  return (
    <div className="App">
      <table>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>DOB</th>
        </thead>
        <tbody>
          {
            records.map((data) => {
              return(
              <tr key={data.userId}>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.dob}</td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
      <div>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>Prev
            </a>
          </li>
          {
            numbers.map((n, i) => {
              return(
                <li className={"page-item" + currentPage == n ? "active" : ""} key={i}>
                  <a href="#" onClick={changeCurrentPage(n)} >{n}</a>
                </li>
              )
            })
          }
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;

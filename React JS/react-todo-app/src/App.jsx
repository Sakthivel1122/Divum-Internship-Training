import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8087/api/v1/todo/",
});
const App = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    date: "",
    status: "",
  });
  const [displayData, setDisplayData] = useState();
  useEffect(() => {
    Load();
  }, []);
  const Load = async () => {
    try {
      await api.get("getToDoList").then((res) => {
        setDisplayData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    if (formData.id === "") {
      await api
        .post("addToDoItem", {
          title: formData.title,
          date: formData.date,
          status: formData.status,
        })
        .then((res) => console.log("post data", res));
    } else {
    }
    setFormData({
      id: "",
      title: "",
      date: "",
      status: "",
    });
    console.log("1");
    Load();
    console.log("2");
  };
  const handleDelete = async (id) => {
    await api.delete("deleteToDoItem/" + id);
    Load();
  };

  const getFetch = async() => {
    await fetch("http://localhost:8087/api/v1/todo/getToDoList")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const postFetch = async() => {
    await fetch("http://localhost:8087/api/v1/todo/addToDoItem", {
      method: "POST",
      body: JSON.stringify({
        title: "Ass 001",
        date: "2023-09-14",
        status: "Done",
      }),
      headers: {
        "Content-type": "application/json; charset-UTF-8",
      },
    })
    Load();
  };
  return (
    <div>
      <h1>ToDo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" value={formData.id} hidden />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleOnChange}
        />
        <br />
        <input
          type="Date"
          name="date"
          placeholder="Date"
          value={formData.date}
          onChange={handleOnChange}
        />
        <br />
        <input
          type="text"
          name="status"
          placeholder="Statue"
          value={formData.status}
          onChange={handleOnChange}
        />
        <br />
        <input type="button" value="Submit" onClick={handleSubmit} />
      </form>
      <table>
        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>Date</th>
          <th>Status</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {displayData &&
            displayData.map((data) => {
              return (
                <tr>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.date}</td>
                  <td>{data.status}</td>
                  <td>
                    <button onClick={() => handleDelete(data.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button onClick={getFetch}>Get Fetch</button>
      <button onClick={postFetch}>Post Fetch</button>
    </div>
  );
};

export default App;

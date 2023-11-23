import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import axios from "axios";

function News() {
  const [{ data }, dispatch] = useStateValue();
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res.data);
      dispatch({
        type: "FETCH_NEWS",
        payload: res.data,
      });
      setNews(data);
      console.log(news, "NUAKJSDAILSGDL");
    });
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <h1>{news}</h1>
      </div>
    </div>
  );
}

export default News;

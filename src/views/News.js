import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";

function News() {
  const [{ data }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "FETCH_NEWS",
    });
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <h1>This is news</h1>
      </div>
    </div>
  );
}

export default News;

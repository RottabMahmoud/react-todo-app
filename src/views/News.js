import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import axios from "axios";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function News() {
  const [{ data }, dispatch] = useStateValue();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res.data);
      dispatch({
        type: "FETCH_TODOS",
        payload: res.data,
      });
    });
  }, []);

  const cards = data.map((card) => (
    <Card className="cards" key={card.id} sx={{ maxWidth: 345 }}>
      <CardContent className={card.completed ? "done" : "unDone"}>
        <Typography gutterBottom variant="h5" component="div">
          {card.title}
        </Typography>
      </CardContent>
    </Card>
  ));

  return <div className="cards">{cards}</div>;
}

export default News;

import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import axios from "axios";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function News() {
  const [{ data }, dispatch] = useStateValue();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res.data);
      dispatch({
        type: "FETCH_NEWS",
        payload: res.data,
      });
    });
  }, []);

  const cards = data.map((card) => (
    <Card className="cards" key={card.id} sx={{ maxWidth: 345 }}>
      {/* <CardMedia sx={{ height: 250 }} image={card.imgUrl} title={card.name} /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {card.title}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {card.completed ? "Done" : "UnDone"}
        </Typography>
      </CardContent>
      <CardActions style={{ color: "blue" }}>
        {card.completed ? "Done" : "UnDone"}
      </CardActions>
    </Card>
  ));

  return (
    <div className="App">
      <div className="App-header">
        <h1>{cards}</h1>
      </div>
    </div>
  );
}

export default News;

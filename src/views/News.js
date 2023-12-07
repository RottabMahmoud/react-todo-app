import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
// import axios from "axios";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
function News() {
  const [{ data }, dispatch] = useStateValue();

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
  //     console.log(res.data);
  //     dispatch({
  //       type: "FETCH_TODOS",
  //       payload: res.data,
  //     });
  //   });
  // }, []);

  const dblClick = (id) => {
    // console.log(id, "IDs");

    dispatch({
      type: "FILTER_TODO",
      payload: id,
    });
  };
  const cards = data.map((card) => (
    <Card
      onDoubleClick={(e) => dblClick(card.id)}
      className="cards"
      key={card.id}
      sx={{ maxWidth: 345 }}
    >
      <CardContent className={card.completed ? "done" : "unDone"}>
        <Typography gutterBottom variant="h5" component="div">
          {card.title}
        </Typography>
      </CardContent>
      <IconButton aria-label="delete">
        <DeleteIcon
          onClick={() => dispatch({ type: "DELETE_TODO", payload: card.id })}
        />
      </IconButton>
    </Card>
  ));

  return <div className="cards">{cards}</div>;
}

export default News;

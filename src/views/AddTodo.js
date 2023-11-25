import React, { useState, useEffect } from "react";
// import axios from "axios";

import { useStateValue } from "../StateProvider";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function AddTodo() {
  const [{ data }, dispatch] = useStateValue();
  const [value, setValue] = useState("");
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(checked, "CHECKED");
  };

  const addTodo = async (e) => {
    e.preventDefault();
    const post = {
      id: Math.random(),
      title: value,
      completed: checked,
    };
    if (post.title) {
      // const response = await axios.post(
      //   "https://jsonplaceholder.typicode.com/todos",
      //   post // Posting to the Server
      // );
      // console.log(post, "POST");
      // console.log(response.data, "POST");
      console.log(post, "NEW TODO");
      setValue("");
      setChecked(false);
      dispatch({
        type: "ADD_TODO",
        payload: post,
      });
    } else alert("Please Insert a Todoo");
  };
  return (
    <div className="App">
      <div className="App-header">
        <Stack
          direction="row"
          flexWrap="wrap"
          marginLeft={"30em"}
          marginTop={"2em"}
          spacing={2}
        >
          <form onSubmit={(event) => addTodo(event)}>
            <TextField
              value={value}
              onChange={(event) => setValue(event.target.value)}
              id="addTodo"
              label="Todo"
              variant="standard"
            />
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Button type="submit" variant="contained">
              Add Todo
            </Button>
          </form>
        </Stack>
      </div>
    </div>
  );
}

export default AddTodo;

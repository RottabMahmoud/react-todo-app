import React, { useState, useEffect } from "react";

import { useStateValue } from "../StateProvider";
import TextField from "@mui/material/TextField";

function AddTodo() {
  const [{ data }] = useStateValue();
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <div className="App-header">
        <TextField
          value={value}
          onChange={(event) => setValue(event.target.value)}
          id="standard-basic"
          label="Standard"
          variant="standard"
        />
      </div>
    </div>
  );
}

export default AddTodo;

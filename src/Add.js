import React, { useState } from "react";
import { useDispatch } from "./context";

export default () => {
  const [newToDo, setNewToDo] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
    setNewToDo("");
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewToDo(value);
  };
  <>
    <h1>Add to do</h1>
    <form onSubmit={onSubmit}>
      <input
        value={newToDo}
        type="text"
        placeholder="Write to do"
        onChange={onChange}
      />
    </form>
  </>;
};

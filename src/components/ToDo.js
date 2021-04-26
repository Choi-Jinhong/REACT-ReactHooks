import React from "react";
import { DEL, COMPLETE, UNCOMPLETE } from "../actions";
import { useDispatch } from "../context";

const ToDo = ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();
  return (
    <li key={id}>
      <span>{text}</span>
      <button onClick={() => dispatch({ type: DEL, payload: id })}>
        DELETE
      </button>
      <button
        onClick={() => dispatch({ type: isCompleted ? UNCOMPLETE : COMPLETE })}
      >
        {isCompleted ? "COMPLETE" : "UNCOMPLETE"}
      </button>
    </li>
  );
};

export default ToDo;
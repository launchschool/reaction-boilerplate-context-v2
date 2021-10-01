import React, { useReducer, createContext } from "react";

export const BoardContext = createContext();

const reducer = (state = [], action) => {
  switch (action.type) {
    case "GET_BOARDS":
      return action.payload;
    case "CREATE_BOARD":
      return state.concat(action.payload);
    default:
      throw new Error();
  }
};

export const BoardContextProvider = (props) => {
  const [boards, dispatch] = useReducer(reducer, []);

  return (
    <BoardContext.Provider value={[boards, dispatch]}>
      {props.children}
    </BoardContext.Provider>
  );
};

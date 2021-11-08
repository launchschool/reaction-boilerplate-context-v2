import React, { createContext, useCallback, useState } from "react";

const defaultStateValue = {
  boards: [],
};
const defaultDispatchValue = {
  createBoard: () => undefined,
  getBoards: () => undefined,
};

export const BoardStateContext = createContext(defaultStateValue);
export const BoardDispatchContext = createContext(defaultDispatchValue);

export const BoardProvider = (props) => {
  const [boards, setBoards] = useState([]);

  const getBoards = useCallback(
    (data) => {
      setBoards(() => {
        return data;
      });
    },
    [setBoards]
  );

  const createBoard = useCallback(
    (data) => {
      setBoards((currentBoards) => {
        return [...currentBoards, data];
      });
    },
    [setBoards]
  );

  return (
    <BoardDispatchContext.Provider
      value={{
        createBoard,
        getBoards,
      }}
    >
      <BoardStateContext.Provider
        value={{
          boards,
        }}
      >
        {props.children}
      </BoardStateContext.Provider>
    </BoardDispatchContext.Provider>
  );
};

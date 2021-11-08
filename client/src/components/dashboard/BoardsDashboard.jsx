import React, { useEffect, useContext } from "react";
import BoardTile from "./BoardTile";

import CreateBoardTile from "./CreateBoardTile";
import {
  BoardStateContext,
  BoardDispatchContext,
} from "../../context/board-context";
import apiClient from "../../lib/ApiClient";

const BoardsDashboard = (props) => {
  const { boards } = useContext(BoardStateContext);
  const { setBoards } = useContext(BoardDispatchContext);

  const boardTiles = boards.map((board) => {
    return <BoardTile key={board._id} title={board.title} id={board._id} />;
  });

  useEffect(() => {
    apiClient.getBoards((data) => {
      setBoards(data.boards);
    });
  }, [setBoards]);

  return (
    <main className="dashboard">
      <section className="board-group">
        <header>
          <div className="board-section-logo">
            <span className="person-logo"></span>
          </div>
          <h2>Personal Boards</h2>
        </header>

        <ul className="dashboard-board-tiles">
          {boardTiles}
          <CreateBoardTile onClick={props.onNewBoardClick} />
        </ul>
      </section>
    </main>
  );
};

export default BoardsDashboard;

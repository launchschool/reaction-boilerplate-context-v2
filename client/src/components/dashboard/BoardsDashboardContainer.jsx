import React, { useReducer } from "react";
import BoardsDashboard from "./BoardsDashboard";
import Popover from "../shared/Popover";
import NewBoardForm from "./NewBoardForm";
import { BoardContextProvider } from "../../context/board-context";

const BoardsDashboardContainer = () => {
  const reducer = (prevState, updatedProperty) => ({
    ...prevState,
    ...updatedProperty,
  });

  const initState = {
    popover: {
      visible: false,
      attachedTo: null,
      type: null,
    },
  };

  const [state, setState] = useReducer(reducer, initState);

  const handleNewBoardClick = (e) => {
    setState({
      popover: {
        visible: true,
        attachedTo: e.currentTarget,
        type: "new-board",
      },
    });
  };

  const handleClosePopoverClick = (e) => {
    e.preventDefault();
    setState(initState);
  };

  return (
    <div>
      <BoardContextProvider>
        <BoardsDashboard onNewBoardClick={handleNewBoardClick} />
        <Popover {...state.popover} coverTarget={true}>
          <NewBoardForm onCloseClick={handleClosePopoverClick} />
        </Popover>
      </BoardContextProvider>
    </div>
  );
};

export default BoardsDashboardContainer;

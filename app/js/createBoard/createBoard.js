const createBoard = (boardWidth, boardHeight) => {
  const board = [];
  for (
    let outerArrayIndex = 0;
    outerArrayIndex < boardHeight;
    outerArrayIndex++
  ) {
    board[outerArrayIndex] = [];
    for (
      let innerArrayIndex = 0;
      innerArrayIndex < boardWidth;
      innerArrayIndex++
    ) {
      board[outerArrayIndex][innerArrayIndex] = "";
    }
  }

  return board;
};

export default createBoard;

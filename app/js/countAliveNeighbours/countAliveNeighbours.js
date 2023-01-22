const countAliveNeighbours = (board, positionCellColumn, positionCellRow) => {
  let aliveNeighbours = 0;
  for (let column = -1; column < 2; column++) {
    for (let row = -1; row < 2; row++) {
      aliveNeighbours +=
        board[positionCellColumn + column][positionCellRow + row];
    }
  }

  aliveNeighbours -= board[positionCellColumn][positionCellRow];
  return aliveNeighbours;
};

export default countAliveNeighbours;

const startRandomGame = (board, boardWidth, boardHeight) => {
  for (let i = 0; i < boardWidth; i++) {
    for (let j = 0; j < boardHeight; j++) {
      board[i][j] = Math.floor(Math.random() * 2);
    }
  }

  return board;
};

export default startRandomGame;

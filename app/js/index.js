import countAliveNeighbours from "./countAliveNeighbours/countAliveNeighbours.js";
import createBoard from "./createBoard/createBoard.js";
// Import addFirstCell from "./addFirstCell/addFirstCell.js";
import startRandomGame from "./startRandomGame/startRandomGame.js";

const boardWidth = 10;
const boardHeight = 10;

const board = createBoard(boardWidth, boardHeight);

console.table(startRandomGame(board, boardWidth, boardHeight));

// AddFirstCell(board);
// findNeighbours(board);

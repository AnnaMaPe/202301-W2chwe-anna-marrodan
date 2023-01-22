import countAliveNeighbours from "./countAliveNeighbours/countAliveNeighbours.js";
import createBoard from "./createBoard/createBoard.js";

import startRandomGame from "./startRandomGame/startRandomGame.js";

const boardWidth = 10;
const boardHeight = 10;
const positionCellColumn = 1;
const positionCellRow = 1;

const emptyBoard = createBoard(boardWidth, boardHeight);

const board = startRandomGame(emptyBoard, boardWidth, boardHeight);

console.table(board);

countAliveNeighbours(board, positionCellColumn, positionCellRow);

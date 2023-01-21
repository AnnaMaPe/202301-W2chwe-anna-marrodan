import findNeighbours from "./findNeighbours/findNeighbours.js";
import createBoard from "./createBoard/createBoard.js";
import addFirstCell from "./addFirstCell/addFirstCell.js";

const boardWidth = 3;
const boardHeight = 3;

const board = createBoard(boardWidth, boardHeight);

addFirstCell(board);
findNeighbours(board);

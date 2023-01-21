import findNeighbours from "./findNeighbours/findNeighbours.js";
import createBoard from "./createBoard/createBoard.js";

console.table(createBoard(3, 2));

const board = [
  ["", "X", ""],
  ["", "", ""],
  ["", "", "X"],
];

findNeighbours(board);

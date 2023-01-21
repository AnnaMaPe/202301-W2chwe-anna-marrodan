import addFirstCell from "../addFirstCell/addFirstCell";
import findNeighbours from "../findNeighbours/findNeighbours";

const applyRules = () => {
  const cellCounts = findNeighbours();
  let selectedCell = addFirstCell();

  if (cellCounts < 2) {
    selectedCell = 0;
  }

  if (cellCounts === 3) {
    selectedCell = 1;
  }

  return selectedCell;
};

export default applyRules;

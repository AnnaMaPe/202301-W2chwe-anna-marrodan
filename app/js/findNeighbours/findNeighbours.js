const findNeighbours = (board) => {
  const neighbourCoordenates = [];

  board.forEach((row, index) => {
    const neighbourCoordenate = [];
    const columnePosition = row.indexOf("X");
    if (columnePosition > -1) {
      neighbourCoordenate[0] = index;
      neighbourCoordenate[1] = columnePosition;
      neighbourCoordenates.push(neighbourCoordenate);
    }
  });

  return neighbourCoordenates;
};

export default findNeighbours;

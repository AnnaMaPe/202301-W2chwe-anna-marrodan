import countAliveNeighbours from "./countAliveNeighbours";

describe("Given the fucntion countNeighbours", () => {
  describe("When it receives a board with four values 1", () => {
    test("Then it should return the value 3", () => {
      const board = [
        [0, 1, 1],
        [0, 1, 0],
        [0, 0, 1],
      ];
      const positionCellColumn = 1;
      const positionCellRow = 1;

      const expectedResult = 3;

      const obtainedResult = countAliveNeighbours(
        board,
        positionCellColumn,
        positionCellRow
      );

      expect(obtainedResult).toBe(expectedResult);
    });
  });
});

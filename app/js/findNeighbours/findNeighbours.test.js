import findNeighbours from "./findNeighbours";

describe("Given the fucntion findNeighbours", () => {
  describe("When it receives ['', 'X', ''], ['', '', 'X'], ['', '', '']", () => {
    test("Then it should return '[[0, 1],[2, 2]]'", () => {
      const board = [
        ["", "X", ""],
        ["", "", ""],
        ["", "", "X"],
      ];
      const expectedResult = [
        [0, 1],
        [2, 2],
      ];

      const obtainedResult = findNeighbours(board);

      expect(obtainedResult).toStrictEqual(expectedResult);
    });
  });
});

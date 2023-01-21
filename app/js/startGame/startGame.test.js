import startGame from "./startGame";

describe("Given the function startGame", () => {
  describe("When it receives that position [1][1] of the board 0 '1", () => {
    test("Then it should return [['', '', ''], ['', '1', '']]", () => {
      const board = [
        ["", "", ""],
        ["", "", ""],
      ];

      const expectedResult = [
        ["", "", ""],
        ["", "1", ""],
      ];

      const obtainedResult = startGame(board);

      expect(obtainedResult).toStrictEqual(expectedResult);
    });
  });
});

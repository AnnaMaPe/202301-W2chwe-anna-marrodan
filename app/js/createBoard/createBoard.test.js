import createBoard from "./createBoard";

describe("Given the function createBoard", () => {
  describe("When it receives a boardWith=3 and a boardHeight=3", () => {
    test("Then it should return [['', '', ''], ['', '', '']]", () => {
      const boardWidth = 3;
      const boardHeight = 2;

      const expectedResult = [
        ["", "", ""],
        ["", "", ""],
      ];

      const obtainedResult = createBoard(3, 2);

      expect(obtainedResult).toStrictEqual(expectedResult);
    });
  });
});

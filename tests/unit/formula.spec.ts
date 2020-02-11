import { Formula } from "@/formula";
import { RuntimeException, LogicException } from "@/exception";

describe("Formula", () => {
  [
    { expected: 1, numbers: [5, 3, 4, 7, 6, 8, 9, 1, 2] },
    { expected: 0.9995778453225261, numbers: [5, 6, 3, 8, 4, 7, 9, 1, 2] }
  ].forEach(({ expected, numbers }) => {
    it(`正常系 ${numbers[0]}/${numbers[1]}${numbers[2]} + ${numbers[3]}/${numbers[4]}${numbers[5]} + ${numbers[6]}/${numbers[7]}${numbers[8]} = ${expected}`, () => {
      const formula = new Formula(numbers);
      expect(formula.Result()).toStrictEqual(expected);
    });
  });

  it("異常系 number 数足りない", () => {
    const numbers = [1];
    expect(() => {
      new Formula(numbers);
    }).toThrow(LogicException);
  });

  it("異常系 number ユニークジャない", () => {
    const numbers = [1, 2, 3, 4, 4, 5, 6, 7, 8];
    expect(() => {
      new Formula(numbers);
    }).toThrow(RuntimeException);
  });
});

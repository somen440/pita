import { Fraction, isAllowNumber } from "@/fraction";

describe("Fraction", () => {
  it("Calc", () => {
    const expected = 0.25;

    const fraction = new Fraction(6, 2, 4);
    const actual = fraction.Calc();

    expect(expected).toStrictEqual(actual);
  });

  [
    { expected: false, num: 0 },
    { expected: true, num: 1 },
    { expected: true, num: 2 },
    { expected: true, num: 3 },
    { expected: true, num: 4 },
    { expected: true, num: 5 },
    { expected: true, num: 6 },
    { expected: true, num: 7 },
    { expected: true, num: 8 },
    { expected: true, num: 9 },
    { expected: false, num: 10 }
  ].forEach(({ expected, num }) => {
    it(`isAllowNumber ${num} は ${expected}`, () => {
      expect(expected).toStrictEqual(isAllowNumber(num));
    });
  });
});

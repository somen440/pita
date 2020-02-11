import { Fraction } from "@/fraction";

describe("Fraction", () => {
  it("Calc", () => {
    const expected = 0.25;

    const fraction = new Fraction(6, 2, 4);
    const actual = fraction.Calc();

    expect(expected).toStrictEqual(actual);
  });
});

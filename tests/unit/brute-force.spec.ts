import { BruteForce } from "@/brute-force";

describe("Brute Force", () => {
  it("初期化", () => {
    const min = 1;
    const max = 3;
    const digits = 2;
    const param = {
      min,
      max,
      digits
    };
    const bruteForce = new BruteForce(min, max, digits);
    expect(param).toMatchObject(bruteForce.Params());
  });

  describe("最小限 1 桁", () => {
    const min = 1;
    const max = 3;
    const digits = 1;
    const bruteForce = new BruteForce(min, max, digits);

    [
      { current: [0], next: [1] },
      { current: [1], next: [2] },
      { current: [2], next: [3] },
      { current: [3], next: [0] }
    ].forEach(({ current, next }) => {
      it(`${current} の次は ${next}`, () => {
        const actual = bruteForce.Next(current);
        expect(next).toMatchObject(actual);
      });
    });
  });
});

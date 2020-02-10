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
});

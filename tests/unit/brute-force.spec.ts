import { BruteForce } from "@/brute-force";

describe("Brute Force", () => {
  it("初期化", () => {
    const min = 1;
    const max = 3;
    const param = {
      min,
      max
    };
    const bruteForce = new BruteForce(min, max);
    expect(param).toMatchObject(bruteForce.Params());
  });

  describe("最小限 1 桁", () => {
    const min = 1;
    const max = 1;
    const bruteForce = new BruteForce(min, max);

    it("ほげ", () => {
      bruteForce.Run(0, data => {
        expect([1]).toMatchObject(data);
      });
    });
  });

  describe("2 桁", () => {
    const min = 1;
    const max = 2;
    const bruteForce = new BruteForce(min, max);

    it("ほげ", () => {
      let expectsIndex = 0;
      const expects = [
        [1, 2],
        [2, 1]
      ];
      bruteForce.Run(0, data => {
        expect(expects[expectsIndex++]).toMatchObject(data);
      });
    });
  });

  describe("3 桁", () => {
    const min = 1;
    const max = 3;
    const bruteForce = new BruteForce(min, max);

    it("ほげ", () => {
      let expectsIndex = 0;
      const expects = [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1]
      ];
      bruteForce.Run(0, data => {
        expect(expects[expectsIndex++]).toMatchObject(data);
      });
    });
  });

  describe("9 桁", () => {
    const min = 1;
    const max = 9;
    const bruteForce = new BruteForce(min, max);

    it("ほげ", () => {
      const expectCount = 362880;
      let actualCount = 0;
      bruteForce.Run(0, () => {
        actualCount++;
      });
      expect(expectCount.toString()).toMatch(actualCount.toString());
    });
  });

  describe("ジェネレーター 1", () => {
    const min = 1;
    const max = 2;
    const bruteForce = new BruteForce(min, max);

    it("ほげ", () => {
      const expects = [
        [1, 2],
        [2, 1]
      ];
      let current = 0;
      for (const actual of bruteForce.RunGene(0)) {
        expect(actual).toStrictEqual(expects[current]);
        current++;
      }
      expect(current).toStrictEqual(2);
    });
  });

  describe("ジェネレーター 2", () => {
    const min = 1;
    const max = 3;
    const bruteForce = new BruteForce(min, max);

    it("ほげ", () => {
      const expects = [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1]
      ];
      let current = 0;
      for (const actual of bruteForce.RunGene(0)) {
        expect(actual).toStrictEqual(expects[current]);
        current++;
      }
      expect(current).toStrictEqual(6);
    });
  });
});

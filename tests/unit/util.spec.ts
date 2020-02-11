import { ArrayUtil } from "@/util";

describe("ArrayUtil", () => {
  it("uniq", () => {
    const arr = [1, 1, 2, 3];
    const expected = [1, 2, 3];
    const actual = ArrayUtil.uniq(arr);
    expect(expected).toMatchObject(actual);
  });
});

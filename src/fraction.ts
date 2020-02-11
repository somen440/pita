export type AllowNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export function isAllowNumber(num: number): num is AllowNumber {
  if (1 <= num && num <= 9) {
    return true;
  }
  return false;
}

//  a
// ----
//  bc
export class Fraction {
  private numerator: AllowNumber;
  private denominator1: AllowNumber;
  private denominator2: AllowNumber;

  constructor(
    numerator: AllowNumber,
    denominator1: AllowNumber,
    denominator2: AllowNumber
  ) {
    this.numerator = numerator;
    this.denominator1 = denominator1;
    this.denominator2 = denominator2;
  }

  Calc(): number {
    return this.numerator / (10 * this.denominator1 + this.denominator2);
  }
}

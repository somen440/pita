import { Fraction, AllowNumber, isAllowNumber } from "./fraction";
import { ArrayUtil } from "./util";
import { RuntimeException, LogicException } from "./exception";

const NUMBERS_NUM = 9;

// Fraction + Fraction + Fraction
// - numbers do not overlap
export class Formula {
  private numbers: number[];
  private fraction1: Fraction | null = null;
  private fraction2: Fraction | null = null;
  private fraction3: Fraction | null = null;

  constructor(numbers: number[]) {
    this.numbers = numbers;
    this.ensureValidNumbers();

    if (this.isAllowNumbers()) {
      this.fraction1 = new Fraction(
        numbers[0] as AllowNumber,
        numbers[1] as AllowNumber,
        numbers[2] as AllowNumber
      );
      this.fraction2 = new Fraction(
        numbers[3] as AllowNumber,
        numbers[4] as AllowNumber,
        numbers[5] as AllowNumber
      );
      this.fraction3 = new Fraction(
        numbers[6] as AllowNumber,
        numbers[7] as AllowNumber,
        numbers[8] as AllowNumber
      );
    }
  }

  public Result(): number {
    return this.isAllowNumbers()
      ? (this.fraction1?.Calc() ?? 0) +
          (this.fraction2?.Calc() ?? 0) +
          (this.fraction3?.Calc() ?? 0)
      : 0;
  }

  private isAllowNumbers(): boolean {
    return this.numbers.every((v: number) => {
      return isAllowNumber(v);
    });
  }

  private ensureValidNumbers(): void {
    if (this.numbers.length !== NUMBERS_NUM) {
      throw new LogicException(`length not valid [${this.numbers.length}]`);
    }

    const t = ArrayUtil.uniq(this.numbers);
    if (JSON.stringify(t) !== JSON.stringify(this.numbers)) {
      throw new RuntimeException(`numbers not uniq [${this.numbers}]`);
    }
  }
}

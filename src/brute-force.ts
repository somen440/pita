export class BruteForce {
  private min: number;
  private max: number;
  private digits: number;

  constructor(min: number, max: number, digits: number) {
    this.min = min;
    this.max = max;
    this.digits = digits;
  }

  Params(): object {
    return {
      min: this.min,
      max: this.max,
      digits: this.digits
    };
  }
}

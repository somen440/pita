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

  Next(current: Array<number>): Array<number> {
    const next = [...Array(this.digits)].map(() => 0);

    if (current[0] >= this.max) {
      return next;
    }

    current.forEach((value, index) => {
      if (next[index] !== 0) {
        return;
      }

      next[index] = value + 1;
      if (next.length <= index + 1) {
        return;
      }

      for (let i = this.min; i <= this.max; i++) {
        if (next[index] === i) {
          continue;
        }
        next[index + 1] = i;
        break;
      }
    });

    return next;
  }
}

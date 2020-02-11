export type ResultFunction = (data: number[]) => void;

export class BruteForce {
  private min: number;
  private max: number;
  private data: number[];

  constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
    this.data = [...Array(this.max)].map(() => 0);
  }

  Params(): object {
    return {
      min: this.min,
      max: this.max
    };
  }

  Run(index: number, callback: ResultFunction): void {
    if (this.data.length < index + 1) {
      return;
    }
    for (let i = this.min; i <= this.max; i++) {
      if (this.data.includes(i)) {
        continue;
      }
      this.data[index] = i;
      if (!this.data.includes(0)) {
        callback(this.data);
      }
      this.Run(index + 1, callback);
      this.data[index] = 0;
    }
  }

  *RunGene(index: number): any {
    for (let i = 0; i < this.data.length; i++) {
      for (let j = this.min; j <= this.max; j++) {
        if (this.data.includes(j)) {
          continue;
        }
        this.data[index] = j;
        if (!this.data.includes(0)) {
          yield this.data;
        }
        if (i !== this.data.length - 1) {
          break;
        }
        this.data[i] = 0;
      }
    }
  }
}

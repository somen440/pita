import * as tsx from "vue-tsx-support";
import { Formula } from "./formula";
import { BruteForce } from './brute-force';

export default tsx.component({
  name: "App",
  data() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return {
      numbers: numbers,
      numbersAsStr: "1,2,3,4,5,6,7,8,9",
      formula: new Formula(numbers),
      msg: 1,
      isLoop: false,
      elapsed: 0
    };
  },
  methods: {
    validResult(): boolean {
      return this.formula.Result() !== 0;
    }
  },
  render() {
    return (
      <div id="app">
        <h1>ピーターからの問題</h1>

        <p>
          {this.numbers[0]}/{this.numbers[1]}{this.numbers[2]}
          +{this.numbers[3]}/{this.numbers[4]}{this.numbers[5]}
          +{this.numbers[6]}/{this.numbers[7]}{this.numbers[8]}
          ={this.formula.Result()}
        </p>

        <br />

        <p>elapsed: {this.elapsed} sec</p>

        <input
          type="text"
          value={this.numbersAsStr}
          onInput={(e) => {
            const numbers: number[] = [];
            e.target.value?.
              toString().
              split(",").
              forEach(e => {
                const d = parseInt(e);
                if (!Number.isInteger(d)) {
                  return;
                }
                numbers.push(d);
              });
            if (numbers.length !== 9) {
              return;
            }
            this.numbers = numbers;
            this.numbersAsStr = numbers.join(",");
            this.formula = new Formula(this.numbers);
          }}
        />

        <button
          onClick={() => {
            const sleep = (msec: any) => new Promise(resolve => {
              setTimeout(resolve, msec);
            });

            (async () => {
              console.log("clic");
              const startTime = Date.now();
              const bruteForce = new BruteForce(1, 9);
              this.isLoop = true;
              for (const val of bruteForce.RunGene(0)) {
                console.log(val);
                this.numbers = val;
                this.formula = new Formula(this.numbers);
                this.numbersAsStr = this.numbers.join(",");
                await sleep(50);

                const ms = (Date.now() - startTime);
                this.elapsed = Math.floor(ms / 10) / 100;

                if (!this.isLoop) {
                  break;
                }
              }
            })();
          }}
        >
          わからん
        </button>
        <button
          onClick={() => { this.isLoop = false; }}
        >
          やめよう
        </button>
      </div>
    )
  }
});

import {coinToss, getRandomInt, range, range2} from '../utils';
import {GameMode} from './Game';

export const ProblemType = {
    Addition:  'Addition',
    Multiplication: 'Multiplication',
}

// Problems can be displayed three ways. This helps with learning.
export const ProblemMode = {
    HideLeft: 0, // "? x 5 = 30"
    HideRight: 1, // "6 x ? = 30"
    HideAnswer: 2 // "6 x 5 = ?"
}

export class Problem {
    static maskCharacter = '?';

    problemMode;

    constructor(type, left, right) {
        this.type = type;
        this.left = left;
        this.right = right;
        if (type === ProblemType.Multiplication && (left === 0 || right === 0)) {
            // in multiplication, if one factor is zero and you mask the other one then there
            // are multiple (infinite) correct solutions. Let's avoid that.
            if (left !== 0) {
                this.problemMode = coinToss(ProblemMode.HideRight, ProblemMode.HideAnswer);
            } else if (right !== 0) {
                this.problemMode = coinToss(ProblemMode.HideLeft, ProblemMode.HideAnswer);
            } else {
                // zero times zero.
                this.problemMode = ProblemMode.HideAnswer;
            }

        } else {
            this.problemMode = getRandomInt(0, 3);
        }
    }

    get operator() {
        if (this.type === ProblemType.Addition) {
            return '+';
        } else {
            return 'x';
        }
    }

    get questionMasked() {
        let values = [this.left, this.right, this.answer];
        values[this.problemMode] = Problem.maskCharacter;
        return `${values[0]} ${this.operator} ${values[1]} = ${values[2]}`;
    }

    get solution() {
        return [this.left, this.right, this.answer][this.problemMode];
    }

    get questionUnmasked() {
        return `${this.left} ${this.operator} ${this.right} = ${this.answer}`;
    }

    get answer() {
        if (this.type === ProblemType.Addition) {
            return this.left + this.right;
        } else {
            return this.left * this.right;
        }
    }

    static makeProblems(args) {
        if (args.gameMode === GameMode.Competitive) {
            return range2(args.max + 1)
                .map(p => new Problem(args.problemType, p.x, p.y));
        } else {
            return range(args.max + 1)
                .map(x => new Problem(args.problemType, args.practiceDigit, x));
        }
    }

    toString() {
        return `${this.left} ${this.operator} ${this.right} = ${this.answer}`;
    }
}

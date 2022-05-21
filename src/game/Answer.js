export class Answer {
  constructor(problem, time, firstTry, expired) {
    this.problem = problem;
    this.time = time;
    this.firstTry = firstTry;
    this.expired = expired;
  }

  get success() {
    return this.firstTry && !this.expired;
  }

  toString() {
    let message;
    if (this.success) message = "(Correct!)";
    else if (!this.firstTry) message = "(First Answer was Incorrect)";
    else message = "(Time Out)";

    return `${this.problem.toString()} ${message}`;
  }
}

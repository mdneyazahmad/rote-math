export const Events = {
    GameStart: 'GameStart',
    GameOver: 'GameOver',
    ProblemLoaded: 'ProblemLoaded',
    CorrectAnswer: 'CorrectAnswer',
    ScoreChanged: 'ScoreChanged',
}

export class Event {

    static _eventQueues = {};

    static fire(event) {
        let queue = this._eventQueues[event];            

        if (!queue) {
            return;
        }

        queue.forEach(f => f());
    }

    static on(event, handler) {
        if (typeof this._eventQueues[event] === 'undefined') {
            this._eventQueues[event] = [];
        }

        this._eventQueues[event].push(handler);

        return () => {
            this._eventQueues[event] = this._eventQueues[event].filter(fn => fn !== handler);
        }
    }
}

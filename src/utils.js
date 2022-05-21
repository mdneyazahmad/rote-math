export function coinToss(option1, option2) {
    return Math.random() >= 0.5 ? option2 : option1;
}

export function getRandomInt(min, max) {
    // thanks MDN!
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export function range(size) {
    return [...Array(size).keys()];
}

export function range2(size1, size2 = undefined) {
    let result = [];
    for (let i of range(size1)) {
        for (let j of range(size2 || size1)) {
            result.push({ x: i, y: j });
        }
    }
    return result;
}

export function range3(start, end) {
    const list = [];
    for (var i = start; i <= end; i++) {
        list.push(i);
    }

    return list;
}

export function shuffleInPlace(array) {
    // do the Fisher-Yates shuffle!
    // https://stackoverflow.com/a/2450976/41457
    let currentIndex = array.length
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    let hq = 42;
    let distance = Math.abs(someValue - hq);
    return distance;
}

function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    let feet = distanceFromHqInBlocks(someValue) * 264;
    return feet;
}

function distanceTravelledInFeet(start, destination) {
    let distance = Math.abs((start - destination) * 264);
    return distance;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
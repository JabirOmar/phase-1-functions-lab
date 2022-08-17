// Code your solution in this file!
function distanceFromHqInBlocks(value) {
     if (value > 42) {
         return value-42
     } else if (value < 42) {
         return 42-value
     }
}

function distanceFromHqInFeet(value) {
    const result = distanceFromHqInBlocks(value);
    return result * 264;
 }

function distanceTravelledInFeet(starting, destination){
    if (starting > destination){
        return (starting - destination) * 264;
    }else {
        return (destination - starting) * 264;
    }
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);

    if(distance <= 400) {
        return 0;
     } else if(distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
     } else if(distance > 2000 && distance <= 2500) {
        return 25;
     } else {
        return 'cannot travel that far';
     }
}




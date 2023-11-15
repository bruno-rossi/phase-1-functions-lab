// Code your solution in this file!

const scuberHq = 42;
const blockLength = 264;

function distanceFromHqInBlocks(blockNumber) {
    
    if (blockNumber > scuberHq) {
        return blockNumber - scuberHq;
    } else {
        return scuberHq - blockNumber;
    };
}

distanceFromHqInBlocks(50);


function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * blockLength;
}

distanceFromHqInFeet(43);

// distanceTravelledInFeet

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * blockLength;
    } else {
        return (destination - start) * blockLength;
    };
}

function calculatesFarePrice(start, destination) {
    
    const distance = distanceTravelledInFeet(start, destination);

    if (distance < 400) {
        return 0; 
    } else if (distance < 2000) {
        return (distance - 400) * 0.02;
    } else if (distance < 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    };
};

calculatesFarePrice(43, 42);
// Function for convert feet to mile.
function feetToMile(feet) {
    if (typeof (feet) == "number") {
        let mile = feet / 5280;    //1 mile = 5280 feet.
        let reternValue = `${feet} Feet = ${mile} Mile.`;
        return reternValue;
    }
    else {
        return "You enter wrong type of parameter."
    }
}


//Function for calculate wood cubic.
function woodCalculater(chair, table, bed) {
    if (typeof (chair, table, bed) == "number") {
        let totalCubic = (chair * 1) + (table * 3) + (bed * 5);
        let returnValue = `${totalCubic} cubic wood need for your all Futniture.`;
        return returnValue
    }
    else {
        return "You didn't submit all parameter value or you enter wrong type of parameter."
    }
}


//Funtion for claculate brick. 
function brickCalculator(floor) {
    if (typeof (floor) == 'number') {
        let brickPerFeet = 1000;
        let totalBrick = 0;
        for (let i = 1; i <= floor; i++) {
            if (i <= 10) {
                let brickPerFloor = brickPerFeet * 15;
                totalBrick = totalBrick + brickPerFloor;
            }
            else if (i > 10 && i <= 20) {
                let brickPerFloor = brickPerFeet * 12;
                totalBrick = totalBrick + brickPerFloor;
            }
            else {
                let brickPerFloor = brickPerFeet * 10;
                totalBrick = totalBrick + brickPerFloor;
            }
        }
        let returnValue = `You need ${totalBrick} brick for ${floor} fllor.`;
        return returnValue
    }
    else {
        return "Your enter wrong type of parameter."
    }
}


//Funcion for find smaller name.
function tinyFriends(friendList) {
    if (friendList.length != 0) {
        let tinyName = friendList[0];
        for (let i = 0; i < friendList.length; i++) {
            if (tinyName.length > friendList[i].length) {
                let friendName = friendList[i];
                tinyName = friendName;
            }
        }
        let returnValue = `'${tinyName.toUpperCase()}' have tiny name from all of your friend.`;
        return returnValue
    }
    else {
        return "You didn't submit parameter value, or you enter wrong type of parameter."
    }
}

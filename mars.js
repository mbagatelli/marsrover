// Rover Object Goes Here
// ======================
const rover = { 
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [{x: 0,y: 0, direction: "N"}],
};



// ======================
function turnLeft(){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
  }
      let newPosition = {x: rover.x, y: rover.y, direction: rover.direction};
     rover.travelLog.push(newPosition);
}

function turnRight(){
  console.log("turnRight was called!");
    switch (rover.direction) {
    case "N":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "N";
    break;
  }
      let newPosition = {x: rover.x, y: rover.y, direction: rover.direction};
     rover.travelLog.push(newPosition);
}

function moveForward(){
  console.log("moveForward was called")
    switch (rover.direction) {
    case "N":
    rover.y -= 1;
    break;
    case "E":
    rover.x += 1;
    break;
    case "S":
    rover.y += 1;
    break;
    case "W":
    rover.x -= 1;
    break;
    } 
    canMoveRover(rover.x,rover.y, "forward")
    let newPosition = {x: rover.x, y: rover.y, direction: rover.direction};
     rover.travelLog.push(newPosition);
}

function moveBackwards() {
  console.log("moveBackwards was called")
    switch (rover.direction) {
    case "N":
    rover.y += 1;
    break;
    case "E":
    rover.x -= 1;
    break;
    case "S":
    rover.y -= 1;
    break;
    case "W":
    rover.x += 1;
    break;
    } 
     canMoveRover(rover.x,rover.y, "backward")
     let newPosition = {x: rover.x, y: rover.y, direction: rover.direction};
     rover.travelLog.push(newPosition);
    }


function canMoveRover(posx, posy ,movement) {
  if (posx > 10 ) {
      console.log("You can't move " + movement);
      rover.x -= 1
  } else if (posx < 0) {
      console.log("You can't move " + movement);
      rover.x += 1
  } else if (posy < 0) {
      console.log("You can't move " + movement);
      rover.y += 1
  } else if (posy > 10) {
      console.log("You can't move " + movement);
      rover.y -= 1
  }
}

function commands(string) {
  for (i=0; i<string.length; i++) {
   if (string[i] === "f" || string[i] === "r" || string[i] === "l" || string[i] === "b") {
    switch (string[i]) {
    case "f":
    moveForward();
    break;
    case "r":
    turnRight();
    break;
    case "l":
    turnLeft();
    break;
    case "b":
    moveBackwards();
    break;
    } 
  } else {
    console.log(`The letter ${string[i]} is not a valid input, please use f,r,l or b`);
  }
  }
}


commands("rffffxae")
console.log(rover.travelLog)
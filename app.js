// Rover Object Goes Here
rover = {
  direction : "N",
  x : 0 ,
  y : 0 ,
  nav : "ffrffrffff",
  travelLog: []
}

function turnLeft(){
  switch(rover.direction) {
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
  console.log("Current Rover Direction: " + rover.direction);
}

function turnRight(){
  switch(rover.direction) {
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
  console.log("Current Rover Direction: " + rover.direction);
};

function moveForward(){
    if (rover.direction == "N") {
        rover.y = rover.y - 1;
    }
    else if (rover.direction == "S") { 
        rover.y = rover.y + 1;
    }
    else if (rover.direction == "W") { 
      rover.x = rover.x - 1;
    }
    else if (rover.direction == "E") { 
      rover.x = rover.x + 1;
    }
  }

  i = rover.nav.length - 1;
  for (var a = 0; a <= i; a++){
    switch (rover.nav[a]) {
      case "l":
        turnLeft();
        break;
      case "r":
        turnRight();
        break;
      case "f":
//      if (0 <= rover.x >=10 && 0 <= rover.y >= 10){
          moveForward();
//      }
//      else {
//        a++
//      }    
            rover.travelLog.push(rover.x + "," + rover.y);
            break;  
      }  
      console.log("rover is now in: " + rover.x +"," + rover.y)  
    }
    console.log (rover.travelLog)

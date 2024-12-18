// Code your solution in this file!

// distance from hq
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Scuber's headquarters on 42nd Street
    return Math.abs(pickupLocation - hqLocation);
  }
  console.log(distanceFromHqInBlocks(50)); // Output: 8
  console.log(distanceFromHqInBlocks(34)); // Output: 8
  console.log(distanceFromHqInBlocks(42)); // Output: 0
  
function distanceFromHqInFeet(pickupLocation){
    const blocks=distanceFromHqInBlocks(pickupLocation)
    return blocks *264;
}

function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264;}
    console.log (distanceTravelledInFeet(50) )
    console.log(distanceTravelledInFeet(34))
    console.log(distanceTravelledInFeet(42))



    function calculatesFarePrice(start, destination) {
        const distance = distanceTravelledInFeet(start, destination);
      
        if (distance <= 400) {
          return 0; 
        } else if (distance > 400 && distance <= 2000) {
          const chargeableDistance = distance - 400;
          return chargeableDistance * 0.02;
        } else if (distance > 2000 && distance <= 2500) {
          return 25; 
        } else {
          return 'cannot travel that far';}}








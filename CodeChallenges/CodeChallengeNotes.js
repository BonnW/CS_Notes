// Overlapping Rectangles 1/23/2018

// Write a function findOverlap to find the rectangular intersection of two given rectangles.
// Values are positive, Rectangles defined as obects such as 

const rectangle1 = { 
    leftX: 1, 
    bottomY: 5,
    width: 10,
    height: 4,
};

// Solution

function findOverlap(rect1, rect2) {
    const xOverlap = findRangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
    const yOverlap = findRangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);
    if (xOverlap.overlapLength === null || yOverlap.overlapLength === null) {
      return {
        leftX: null, 
        bottomY: null, 
        width: null,
        height: null,
      };
    }
    return {
      leftX: xOverlap.startPoint,
      bottomY: yOverlap.startPoint,
      width: xOverlap.overlapLength,
      height: yOverlap.overlapLength,
    };
  }
  
  function findRangeOverlap(point1, length1, point2, length2) {
    const highestPoint = Math.max(point1, point2);
    const lowestEndPoint = Math.min(point1 + length1, point2 + length2);
    if(highestPoint >= lowestEndPoint) {
      return {startPoint: null, overlapLength: null};
    }
    const overlapLength = lowestEndPoint - highestPoint;
    return {startPoint: highestPoint, overlapLength};
  }
  
  const rect1 = {
    leftX: 1,
    bottomY: 1,
    width: 9,
    height: 10,
  };
  
  const rect2 = {
    leftX: 4,
    bottomY: 5,
    width: 7,
    height: 13,
  };
  
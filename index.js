const testVar = {}
const recordTest = [
  {year: "2018", result: "L"},
  // {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]


function testFunc() {
  return "hi"
}


function superbowlWin(array) {
  let newArray = array.find(
    function(test) {
      // console.log(test.result);
      return test.result === 'W'
    })
    // console.log(newArray.year);
    if (newArray === undefined) {
      return undefined
    } else {
      return newArray.year
    }
    // return newArray.year
}

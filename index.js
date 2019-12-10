// const testVar = {}

// function testFunc() {
//   return "hi"
// }


const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]


function superbowlWin(array) {
let findwin = array.find(res => { return res.result === "W" } ) 

 if (findwin) {
    let year = findwin.year
    debugger
    return year
 } else {
  return undefined
 }

} 


superbowlWin(record)



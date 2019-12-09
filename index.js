const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

// function returnRecord(record) {
//   console.log(record[0].year)
// }


function superbowlWin(sbList) {
  let win = sbList.find(function(rec) {
      return rec.result === "W"
    }
  )
  if (win === undefined) 
    { return undefined }
  else 
    { return win.year }  
}
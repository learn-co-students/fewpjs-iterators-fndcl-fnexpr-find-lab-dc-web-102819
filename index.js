const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {

const getRecord = record.find( rec => rec.result === "W");

if (!!getRecord) {
	return getRecord.year;
}
else {
	return undefined
}

}
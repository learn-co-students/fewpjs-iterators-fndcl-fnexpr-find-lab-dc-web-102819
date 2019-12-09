const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
	let win = array.find(year => year.result === "W");
	if (win) {
		return win.year
	}
}
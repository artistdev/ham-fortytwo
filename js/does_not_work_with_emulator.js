/* This code sample will NOT work in the emulator.
*/
var stepcount = 0;
var type = "PEDOMETER";
var query = {
};
query.anchorTime = (new Date(2018, 7, 1, 0, 0)).getTime() / 1000;
query.interval= 1440;

function onerror(error) {
	console.log(error.name + ": " + error.message);
}

function onread(data) {
	for (var idx = 0; idx < data.length; ++idx) {
		stepcount = data[idx].totalStepCount;
	}
}

function onchange() {
	tizen.humanactivitymonitor.readRecorderData(type, query, onread, onerror);
}

try {
	tizen.humanactivitymonitor.startRecorder(type);
	
} catch (err) {
	console.log(err.name + ": " + err.message);
}

tizen.humanactivitymonitor.start("WRIST_UP", onchange, onerror);

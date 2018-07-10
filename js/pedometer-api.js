
var stepcount = "";
var query = {};
var type = "PEDOMETER";

function onerror(error) {
	console.log(error.name + ": " + error.message);
}

function onread(data) {
	for (var idx = 0; idx < data.length; ++idx) {
		stepcount = data[idx].totalStepCount;	
		document.getElementById("total-step-count").innerHTML = stepcount;
	}
}

function onchange() {	
	tizen.humanactivitymonitor.readRecorderData(type, query, onread, onerror)	
}

tizen.humanactivitymonitor.startRecorder(type,onerror);

tizen.humanactivitymonitor.start("WRIST_UP", onchange, onerror);


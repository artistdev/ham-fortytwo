var stepcount = "";
var type = "PEDOMETER";
var query = {
	/* To retrieve data everyday at midnight */
	/* Time is 0:00 internally */
//	anchorTime : (new Date(2018, 7, 1, 0, 0)).getTime() / 1000,
//	interval : 1440 /* Day */
};
query.startTime = (new Date(2016, 7, 1, 0, 0)).getTime() / 1000;
query.interval = 1440; /* Day */

function onerror(error) {
	console.log(error.name + ": " + error.message);
}

function onread(data) {
	for (var idx = 0; idx < data.length; ++idx) {
		console.log("Total step count: " + data[idx].totalStepCount);
		stepcount = data[idx].totalStepCount;
		document.getElementById("total-step-count").innerHTML = stepcount;
		var startTime = data[idx].startTime;
		console.log(new Date(startTime * 1000));
		var endTime = data[idx].endTime;
		console.log(new Date(endTime * 1000));
	    

	}
}

function onchange() {
	tizen.humanactivitymonitor.readRecorderData(type, query, onread, onerror);
}

try {
	tizen.humanactivitymonitor.startRecorder(type);
	console.log("Start Recording Data");
	
} catch (err) {
	console.log(err.name + ": " + err.message);
}

tizen.humanactivitymonitor.start("WRIST_UP", onchange, onerror);

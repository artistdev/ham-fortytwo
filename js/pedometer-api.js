var type = "PEDOMETER";
var query = {};
var stepcount = "";
function onerror(error) {
	console.log(error.name + ": " + error.message);
}

function onread(data) {
	for (var idx = 0; idx < data.length; ++idx) {
		console.log('Total step count: ' + data[idx].totalStepCount);
		stepcount = data[idx].totalStepCount;		
	}
}
try {	
	tizen.humanactivitymonitor.startRecorder(type);	
	tizen.humanactivitymonitor.readRecorderData(type, query, onread, onerror);
} catch (err) {
	console.log(err.name + ": " + err.message);
}

function onchange(){
	document.getElementById("total-step-count").innerHTML = stepcount;
}

tizen.humanactivitymonitor.start("WRIST_UP", onchange);


//var type = "PEDOMETER";
//var query = {};
//var stepcount = "";
//function onerror(error) {
//	console.log(error.name + ": " + error.message);
//}
//
//function onread(data) {
//	for (var idx = 0; idx < data.length; ++idx) {
//		console.log('Total step count: ' + data[idx].totalStepCount);
//		stepcount = data[idx].totalStepCount;
//		document.getElementById("total-step-count").innerHTML = stepcount;
//	}
//}
//
//try {
//	tizen.humanactivitymonitor.readRecorderData(type, query, onread, onerror);
//} catch (err) {
//	console.log(err.name + ": " + err.message);
//}

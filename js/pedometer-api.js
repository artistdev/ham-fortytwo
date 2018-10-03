
var stepcount = 0;  // global variable to hold total step count
var type = "PEDOMETER"; // Human Activity Monitor, type of PEDOMETER
var query = { //  empty Object to hold anchor and interval query properties 
};
	query.anchorTime = (new Date(2018, 7, 1, 0, 0)).getTime() / 1000; // anchor time in Epoch
	query.interval= 1440;	// 1440 minutes is equal to one Day

function onerror(error) { // error handling function for readRecorderData and start, human activity monitor methods
	console.log(error.name + ": " + error.message);// console log any errors 
}

function onread(data) { // onread function with data parameter
	for (var idx = 0; idx < data.length; ++idx) { // data is step count
		stepcount = data[idx].totalStepCount; // update stepcount variable with new total step count value
	}
}

function onchange() {
	tizen.humanactivitymonitor.readRecorderData(type, query, onread, onerror);
}

try { // try - catch statement 
	tizen.humanactivitymonitor.startRecorder(type); // invoke the startRecorder method with one parameter 
	
} catch (err) {
	console.log(err.name + ": " + err.message); // if the startRecorder fails, we display error in JS console
}

tizen.humanactivitymonitor.start("WRIST_UP", onchange, onerror); // invoke start method for WRIST_UP gesture
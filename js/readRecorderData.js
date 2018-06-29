//Holds the value of our total step count
var stepcount = "";

// Retrieve data from Human Activity type of Pedometer
var type = 'PEDOMETER';

// Record step count data for 1 day
var options = {
	interval : 1 // 1 Day
// retentionPeriod: 24 /* 24 hours */
};

try {
	// Start the recorder
	tizen.humanactivitymonitor.startRecorder(type, options);
	console.log('Start recording steps');
} catch (err) {
	// Log any erros for start recorder mehod
	console.log(err.name + ': ' + err.message);
}

function onerror(error) {
	// Log any errors for readRecorderData method
	console.log(error.name + ": " + error.message);
}

function onread(data) {
	for (var idx = 0; idx < data.length; ++idx) {
		console.log("*** " + idx);
		console.log('totalStepCount: ' + data[idx].totalStepCount);
		stepcount = data[idx].totalStepCount;
		document.getElementById("total-step-count").innerHTML = stepcount;
	}
}

function onchange() {
	console.log('You are looking at your smart watch');

	// instead of using query property we will use the 24 hour interval option a
	tizen.humanactivitymonitor.readRecorderData(type, null, onread, onerror);

}

// Start the Wrist_Up
tizen.humanactivitymonitor.start('WRIST_UP', onchange);

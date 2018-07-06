var stepcount = "";
var type = 'PEDOMETER';
var query = {};
	
function onread(data) {
    for (var idx = 0; idx < data.length; ++idx) {
        console.log('Total step count: ' + data[idx].totalStepCount);
        stepcount = data[idx].totalStepCount;        
    }
}

try {
	tizen.humanactivitymonitor.startRecorder(type);
	tizen.humanactivitymonitor.readRecorderData(type, query, onread);
} catch (error) {
	console.log(error.name + ': ' + error.message);
}

function onchange(){
	document.getElementById("total-step-count").innerHTML = stepcount;
}

tizen.humanactivitymonitor.start('WRIST_UP', onchange);

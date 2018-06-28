//Holds the value of our step count
var stepcount = "";

//Human Activity Type
var type = 'PEDOMETER';

//Duration
var options = {
   retentionPeriod: 2 /* 1 hour */
};

try 
{
	//Start the recorder API
   tizen.humanactivitymonitor.startRecorder(type, options);
   console.log('Start recording steps');
}
catch (err)
{
	//Log any erros for start recorder API
   console.log(err.name + ': ' + err.message);
}


function onerror(error){
   console.log(error.name + ": " + error.message);
}

function onread(data)
{
   for (var idx = 0; idx < data.length; ++idx){
      console.log("*** " + idx);
      console.log('totalStepCount: ' + data[idx].totalStepCount);
      
      stepcount = data[idx].totalStepCount;
      // Insert step count value in HTML <p> tags
    	  document.getElementById("total-step-count").innerHTML = stepcount;
   }
}

try
{
   tizen.humanactivitymonitor.readRecorderData(type, null, onread, onerror);
}
catch (err)
{
   console.log(err.name + ': ' + err.message);
}



function onerror(error)
{
   console.log(error.name + ": " + error.message);
}

function onread(data)
{
   for (var idx = 0; idx < data.length; ++idx)
   {
      console.log("*** " + idx);
      console.log('totalStepCount: ' + data[idx].totalStepCount);
   }
}

var type = 'PEDOMETER';
var now = new Date();
var startTime = now.setDate(now.getDate() - 7);
var anchorTime = (new Date(2000, 1, 2, 6)).getTime();
var query =
{
   startTime: startTime / 1000,
   anchorTime: anchorTime / 1000,
   interval: 1440 /* 1 day */
};
try
{
   tizen.humanactivitymonitor.readRecorderData(type, query, onread, onerror);
}
catch (err)
{
   console.log(err.name + ': ' + err.message);
}



//function onerror(error)
//{
//   console.log(error.name + ": " + error.message);
//}
//
//function onread(data)
//{
//   for (var idx = 0; idx < data.length; ++idx)
//   {
//      console.log('startTime: ' + data[idx].startTime);
//      console.log('endTime: ' + data[idx].endTime);
//      console.log('calories: ' + data[idx].calorie);
//      console.log("*** " + idx);
//      console.log('totalStepCount: ' + data[idx].totalStepCount);
//      
//   }
//}
//
//var type = 'PEDOMETER';
//
//var now = new Date();
//var startTime = now.setDate(now.getDate() - 4); // 4 days
//var anchorTime = (new Date(2000, 1, 2, 6)).getTime();
//var query = {
//    startTime: startTime / 1000,
//    anchorTime: anchorTime / 1000,
//    interval: 1440 // 1 day
//};
//
//try
//{
//   tizen.humanactivitymonitor.readRecorderData(type, query, onread, onerror);
//}
//catch (err)
//{
//   console.log(err.name + ': ' + err.message);
//}

//function onerror(error)
//{
//   console.log(error.name + ": " + error.message);
//}
//
//function onread(data)
//{
//   for (var idx = 0; idx < data.length; ++idx)
//   {
//      console.log("*** " + idx);
//      console.log('totalStepCount: ' + data[idx].totalStepCount);
//      document.getElementById("step-status").innerHTML = 'totalStepCount: ' +idx;
//      document.getElementById("step-count").innerHTML = 'totalStepCount: ' + data[idx].totalStepCount;
//   }
//}
//
//var type = 'PEDOMETER';
//var now = new Date();
//var startTime = now.setDate(now.getDate() - 7);
//var anchorTime = (new Date(2000, 1, 2, 6)).getTime();
//var query =
//{
//   startTime: startTime / 1000,
//   anchorTime: anchorTime / 1000,
//   interval: 1440 /* 1 day */
//};
//try
//{
//   tizen.humanactivitymonitor.readRecorderData(type, query, onread, onerror);
//}
//catch (err)
//{
//   console.log(err.name + ': ' + err.message);
//}

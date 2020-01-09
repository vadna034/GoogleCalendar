//  Format = "Subject,Start Date,Start Time,End Date,End Time,All Day Event \n"; 
var inputs = [];
var index = 0;

// week of 03/09/2020 is spring break

const Mondays = ['1/27/2020','2/3/2020','2/10/2020','2/17/2020','2/24/2020','3/2/2020','3/16/2020','3/23/2020','3/30/2020','4/6/2020','4/13/2020','4/20/2020','4/27/2020','5/4/2020'];
const Tuesdays = ['1/28/2020','2/4/2020','2/11/2020','2/18/2020','2/25/2020','3/3/2020','3/17/2020','3/24/2020','3/31/2020','4/7/2020','4/14/2020','4/21/2020','4/28/2020'];
const Wednesdays = ['1/29/2020','2/5/2020','2/12/2020','2/19/2020','2/26/2020','3/4/2020','3/18/2020','3/25/2020','4/1/2020','4/8/2020','4/15/2020','4/22/2020','4/29/2020'];
const Thursdays = ['1/30/2020','2/6/2020','2/13/2020','2/20/2020','2/27/2020','3/5/2020','3/19/2020','3/26/2020','4/2/2020','4/9/2020','4/16/2020','4/23/2020','4/30/2020'];
const Fridays = ['1/31/2020','2/7/2020','2/14/2020','2/21/2020','2/28/2020','3/6/2020','3/20/2020','3/27/2020','4/3/2020','4/10/2020','4/17/2020','4/24/2020','5/1/2020'];
const Saturdays = ['2/1/2020','2/8/2020','2/15/2020','2/22/2020','2/29/2020','3/7/2020','3/14/2020','3/21/2020','3/28/2020','4/4/2020','4/11/2020','4/18/2020','4/25/2020','5/2/2020'];
const Sundays = ['2/2/2020','2/9/2020','2/16/2020','2/23/2020','2/30/2020','3/8/2020','3/15/2020','3/22/2020','3/29/2020','4/5/2020','4/12/2020','4/19/2020','4/26/2020','5/3/2020'];

function myFunction() {
    var form = document.getElementById("sch-form");
    var inText = form.elements;
    input = ''
    input += inText[0].value + ',';
    input += inText[1].value + ',';
    input += inText[2].value + ',';
    input += inText[3].value;
    input += '\n';
    

    var schItem = {
      Weekday: inText[0].value,
      Subject: inText[1].value,
      StartTime: inText[2].value,
      EndTime: inText[3].value
    };

    inputs[index] = schItem;
    index++;

    document.getElementById('schedule').innerHTML += '<div><p> Event ' + index + ': ' + input + '<input type="button" value="Delete" onclick="delFunction()"></p></div>';
  }


function generateCSV() {
  csvString = "data:text/csv;charset=utf-8," + "Subject, Start Date, Start Time, End Date, End Time, All Day Event\n";
  
  for(i=0; i<index; i++){
    var subject = inputs[i].Subject;
    var startTime = inputs[i].StartTime;
    var endTime = inputs[i].EndTime;

    var dates;
    switch(inputs[i].Weekday){
      case 'Monday':
        dates = Mondays;
      case 'Tuesday':
        dates = Tuesdays;
      case 'Wedneday':
        dates = Wednesdays;
      case 'Thursday':
        dates = Thursdays;
      case 'Friday':
        dates = Fridays;
      case 'Saturday':
        dates = Saturdays;
      case 'Sunday':
        dates = Sundays;
    }

    for(j=0; j<dates.length; j++){
      addString = subject + ',' + dates[j] + ',' + startTime + ',' + dates[j] + ',' + endTime + ', FALSE\n'
      csvString += addString;
    }
  }

  var encodedUri = encodeURI(csvString);
  window.open(encodedUri);
}
//Need to add dates for the thingy, and need to add a system for writing text to a file. Otherwise, this baby is just about dont :3



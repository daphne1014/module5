//Display today's date on jumptron
let currentDay = moment().format('MMMM Do YYYY');
$("#currentDay").append(currentDay);


//Display Timeblocks
let currentHour = moment().hour(); //Number from 0 to 23
let startTime = 9;
let workingHours = 8;

//create list
let day = localStorage.getItem('date') || "";

if (day === currentDay) {
    list = JSON.parse(localStorage.getItem('hourSchedule'));
} else {
    list = [];
    for (i = 0; i < workingHours.length; i++) {
        list.push('');
    }
    localStorage.setItem('hourSchedule', JSON.stringify(list));
};

for (i = 0; i < workingHours; i++) {
    //create container for each hour as a bootstrap row
    let hourContainer = $('<div>')
        .addClass('row');

    //display time as a partial colum with width of 1
    let time = $('<div>')
        .addClass('col-1')
        .append(moment(i + startTime, ["H"]).format('H')); //need to check once more
    hourContainer.append(time);

    //create schedule info inside the container
    let scheduleP = $('<textarea>')
        .addClass('col-10')
        .attr('id', 'text' + i)
    if ((i + startTime) < currentHour) {
        scheduleP.addClass('past')
    } else if ((i + startTime) === currentHour) {
        scheduleP.addClass('present')
    } else {
        scheduleP.addClass('future')
    }

    scheduleP.text(list[i]);
    hourContainer.append(scheduleP);

    //create save button inside the container

    let saveBtn = $('<button>')
        .addClass('col-1 saveBtn')
        .attr('schedule-data', i);

    let saveIcon = $('<i>')
        .addClass("far fa-save");
    saveBtn.append(saveIcon);


    //save to local storage
    saveBtn.on('click', function (event) {
        event.preventDefault();
        let now = $(this).attr('schedule-data');
        list[now] = $('#text' + now).val();

        localStorage.setItem('hourSchedule', JSON.stringify(list));
        localStorage.setItem('date', currentDay)
    })

    hourContainer.append(saveBtn);


    //append the rows
    $('#container').append(hourContainer);

}

//ScheduleText

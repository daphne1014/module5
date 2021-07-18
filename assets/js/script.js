//Display today's date on jumptron
let currentDay = moment().format('MMMM Do YYYY');
$("#currentDay").append(currentDay);


//Display Timeblocks
let currentHour = moment().hour(); //Number from 0 to 23
let startTime = 9;
let workingHours = 8;

for (i = 0; i < workingHours.length; i++) {
    //create container for each hour as a bootstrap row
    let hourContainer = $('<div>')
        .addClass('row');

    //display time as a partial colum with width of 1
    let time = $('<div>')
        .addClass('col-1')
        .append(moment(i + startTime).format('h')); //need to check once more
    hourContainer.append(time);

    //create container to put schedule



}

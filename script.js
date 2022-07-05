setInterval(() => {
var today = moment();
$(".time-block").text(today.format("dddd MMM Do, YYYY hh:mm:ss"));
},1000)

var currentTime = moment().hour()
console.log(currentTime)

var hours = ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '13:00PM', '14:00PM','15:00PM', '16:00PM', '17:00PM' ] 

/*if (setInterval < hours) {
    'textarea' === '.future';
} else if (today > hours) {
    'textarea' === '.past';
} else {
    'textarea' === '.present';
}*/

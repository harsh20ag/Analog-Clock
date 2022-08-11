const hr = document.querySelector('.hou');
const mn = document.querySelector('.min');
const sc = document.querySelector('.sec');
const day = document.querySelector('.day');

setTime();

function setTime() {
   
    const currDate = new Date();
    const currHour = currDate.getHours();
    const currMinutes = currDate.getMinutes();
    const currSeconds = currDate.getSeconds();
    const currDay = currDate.getDay();
    const hrRotation = (currHour * 30 + currMinutes / 2) - 180;
    const minRotation = (currMinutes * 6 + currSeconds / 10) - 180;
    const secRotation = (currSeconds * 6) - 180;
    hr.style.transform = `rotate(${hrRotation}deg)`;
    mn.style.transform = `rotate(${minRotation}deg)`;
    sc.style.transform = `rotate(${secRotation}deg)`;
    setDay(currDay);
    setTimeout(setTime, 1000);

}

function setDay(currDay) {
    if (currDay == "0") {
        day.innerHTML = "Sunday";
    }
    else if (currDay == "1") {
        day.innerHTML = "Monday";
    }
    else if (currDay == "2") {
        day.innerHTML = "Tuesday";
    }
    else if (currDay == "3") {
        day.innerHTML = "Wednesday";
    }
    else if (currDay == "4") {
        day.innerHTML = "Thursday";
    }
    else if (currDay == "5") {
        day.innerHTML = "Friday";
    }
    else {
        day.innerHTML = "Saturday";
    }

}
// let a = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
let a = new Audio('https://www.fesliyanstudios.com/play-mp3/5328');
let audio = () => {
    a.play();

}

let audio2 = () => {
    // let a = new Audio('https://www.fesliyanstudios.com/play-mp3/5328');
    a.pause();
}

var time
var hours;
var minutes;
var seconds;

function time12() {

    time = new Date();
    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();
    if (seconds >= '0' && seconds <= '9') {
        seconds = `0${seconds}`;
    }
    if (minutes >= '0' && minutes <= '9') {
        minutes = `0${minutes}`;
    }
    let format;
    if (hours >= 12) {
        format = 'PM';

    }
    else {
        format = 'AM';

    }
    return hours + ":" + minutes + ":" + seconds + ' ' + format;
    // return time.toLocaleTimeString();
}
setInterval(() => {
    document.getElementById("time").innerHTML = time12();
    // document.getElementById("1st").innerHTML = hours;
    // document.getElementById("2nd").innerHTML = minutes;
    // document.getElementById("3rd").innerHTML = seconds;


}, 1000);
let n, gh, gm, gs, hour, minute, second;
let abc = 0;
btn.onclick = () => {

    setInterval(() => {

        n = new Date();
        gh = n.getHours();
        // console.log(gh);
        gm = n.getMinutes();
        gs = n.getSeconds();

        let lli = document.getElementsByTagName("li");

        hour = document.getElementById("hours").value;
        // console.log(hour);
        minute = document.getElementById("minutes").value;
        second = document.getElementById("seconds").value;

        let close12 = document.getElementsByClassName("close");
        for (let i = 0; i < close12.length; i++) {

            close12[i].onclick = function () {

                audio2();
                this.parentElement.style.display = "none";
                abc = 1;
            }
        }



        if (abc == 0) {


            if (gh == hour && gm == minute && gs == second) {

                audio()
                document.getElementById("styles").classList.toggle("mainstyle");

            }
        }
        else if (abc == 1) {
            if (gh == hour && gm == minute && gs == second) {
                audio2();
            }
            document.getElementById("styles").classList.remove("mainstyle");
        }




    }, 1000);
    if (hour == 'Hours' && minute == 'Minutes' && second == 'Seconds') {
        let au = new Audio('Please-enter-correct-time.mp3');
        au.play();

    }
    if (hour == 'Hours' && minute != 'Minutes' && second != 'Seconds') {
        let au = new Audio('Please-enter-hours.mp3');
        au.play();
    }
    else if (hour != 'Hours' && minute == 'Minutes' && second != 'Seconds') {
        let au = new Audio('please-enter-minutes.mp3');
        au.play();
    }
    else if (hour != 'Hours' && minute != 'Minutes' && second == 'Seconds') {
        let au = new Audio('please-enter-seconds.mp3');
        au.play();
    }


    else if (hour == 'Hours' && minute == 'Minutes' && second != 'Seconds') {
        let au = new Audio('please-enter-hours-and-minutes.mp3');
        au.play();
    }
    else if (hour == 'Hours' && minute != 'Minutes' && second == 'Seconds') {
        let au = new Audio('please-enter-hours-and-seconds.mp3');
        au.play();
    }
    else if (hour != 'Hours' && minute == 'Minutes' && second == 'Seconds') {
        let au = new Audio('please-enter-minutes-and-seconds.mp3');
        au.play();
    }




    let li = document.createElement('li');
    let h = document.getElementById("hours").value;
    let m = document.getElementById("minutes").value;
    let s = document.getElementById("seconds").value;
    if (h != "Hours" && m != "Minutes" && s != "Seconds") {


        li.append(`Alarm set successfully at - ${h}:${m}:${s}`);
        document.getElementById("ul").append(li);
    }



    let list = document.getElementsByTagName("li");
    let i;
    for (i = 0; i < list.length; i++) {
        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        list[i].appendChild(span);
    }



    // let close = document.getElementsByClassName("close");
    // for (i = 0; i < close.length; i++) {
    //     close[i].onclick = function () {
    //         var div = this.parentElement;
    //         div.style.display = "none";
    //     }
    // }
}
















const clock = document.querySelector("h2#clock");
let date = new Date();
let second = 0;
let minute = 0;
let hour = 0;
let viewTime = `${hour} : ${minute} : ${second}`;

sayHello()

function sayHello(){
    date = new Date();
    second = String(date.getSeconds()).padStart(2,"0");
    minute = String(date.getMinutes()).padStart(2,"0");
    hour = String(date.getHours()).padStart(2,"0");
    viewTime = `${hour} : ${minute} : ${second}`;
    clock.innerText = viewTime;
    // .padStart( lin,"A") : lin 만큼의 길이 중 빈곳을 앞쪽 부터 A 로 채움
}
setInterval(sayHello, 1000);

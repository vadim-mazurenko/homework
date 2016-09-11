for_count.innerHTML="00-00-00-00";

// var buttonStart = document.createElement('input');

// buttonStart.type = 'button';
// buttonStart.setAttribute('id', 'start');
// buttonStart.value = 'Start';
// // body.appendChild(buttonStart);
// buttonStart.innerHTML;

// var buttonEnd = document.createElement('input');

// buttonEnd.type = 'button';
// buttonEnd.setAttribute('id', 'stp');
// buttonEnd.value = 'Stop';
// // body.appendChild(buttonEnd);
// buttonEnd.innerHTML;

start.addEventListener("click", start_click);
stp.addEventListener("click", stp_click);


var count = 0, 
    flag = 0,
    timerId;
function cout() {
    count++;
    var msec = count%100;
    var sec = Math.floor(count/100)%60;
    var min = Math.floor(count/6000)%60;
    var hours = Math.floor(count/36000)%24;
    var str = hours + "-" + min + "-" + sec + "-" + msec;
    for_count.innerHTML = str;
  }
function start_click() {
  start.removeAttribute('value');
  start.setAttribute('value', 'Pause');
  if (flag===0){
  timerId=setInterval(cout,10)
    flag=1;
  } else {
  clearInterval(timerId);
  flag=0;
  start.removeAttribute('value');
  start.setAttribute('value', 'continue');
}
}
function pausecontinue(){
   start.removeAttribute('value');
  start.setAttribute('value', 'start');
}


function stp_click(){
  clearInterval(timerId);
  flag=0;
  count=00;
  for_count.innerHTML= "0-0-0-00";
  start.removeAttribute('value');
  start.setAttribute('value', 'Start');
}
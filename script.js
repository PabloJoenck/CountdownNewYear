    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutsEl = document.getElementById('mins');
    const secondsEl = document.getElementById('seconds');
    
    

const newYears ='1 jan 2021';

function countdown(){
    const newYearsDate = new Date (newYears);
    const currentDate = new Date();

    const Totalseconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(Totalseconds / 3600 / 24);
    const hours = Math.floor(Totalseconds / 3600) % 24;
    const minuts = Math.floor(Totalseconds / 60) % 60;
    const seconds = Math.floor(Totalseconds) % 60;
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutsEl.innerHTML = minuts;
    secondsEl.innerHTML = seconds;    

}

//Iniciar

countdown();
setInterval(countdown, 1000);
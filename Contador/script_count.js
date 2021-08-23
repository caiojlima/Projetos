const seconds = document.getElementById('segundo');
const minutes = document.getElementById('minuto');
const hours = document.getElementById('hora');
const days = document.getElementById('dia');
const months = document.getElementById('mes');
const tSeconds = document.getElementById('texto-segundo');
const tMinutes = document.getElementById('texto-minuto');
const tHours = document.getElementById('texto-hora');
const tDays = document.getElementById('texto-dia');
const tMonths = document.getElementById('texto-mes');
const footer = document.getElementsByTagName('a')[0];

function textFormat(time) {
  const tempoForm = Math.floor(time);
  if (tempoForm < 10) {
    return `0${tempoForm}`;
  }
  return tempoForm;
}

function countTime() {
  const diaAtual = new Date();
  const trybeDay = new Date('07/12/2022');  
  const tempoEmMili = trybeDay - diaAtual;
  minutes.innerText = textFormat(tempoEmMili/1000/60%60);
  seconds.innerText = textFormat(tempoEmMili / 1000%60);
  hours.innerText = textFormat(tempoEmMili/1000/60/60%24);
  days.innerText = textFormat(tempoEmMili/1000/60/60/24%30);
  months.innerText = textFormat(tempoEmMili/1000/60/60/24/30%12);
  if (seconds.innerText === '01') {
    tSeconds.innerText = 'Segundo';
  } else if (seconds.innerText !== '01') {
    tSeconds.innerText = 'Segundos';
  }
  if (minutes.innerText === '01') {
    tMinutes.innerText = 'Minuto';
  } else if (minutes.innerText !== '01') {
    tMinutes.innerText = 'Minutos';
  }
  if (hours.innerText === '01') {
    tHours.innerText = 'Hora';
  } else if (hours.innerText !== '01') {
    tHours.innerText = 'Horas';
  }
  if (days.innerText === '01') {
    tDays.innerText = 'Dia';
  } else if (days.innerText !== '01') {
    tDays.innerText = 'Dias';
  }
  if (months.innerText === '01') {
    tMonths.innerText = 'Mês';
  } else if (months.innerText !== '01') {
    tMonths.innerText = 'Meses';
  }  
}

function changeLinkColor() {
  const style = getComputedStyle(footer);
  if (footer.style.color === 'white'){
    footer.style.color = 'rgb(218, 77, 77)';
  } else {
    footer.style.color = 'white';
  }
}

setInterval(countTime, 1000);
setInterval(changeLinkColor, 300);
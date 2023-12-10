import { Scale } from 'lucide';
import './style.css'

const secHand = document.querySelector('.sec')
const minHand = document.querySelector('.min')
const hourHand = document.querySelector('.hour')

function setTime (){

  const time = new Date();

  // sec hand
  let secs =  time.getSeconds()
  console.log(secs)
  secs = (secs / 60) * 360 + 90
  secHand.style.transform = `rotate(${secs}deg)`

  // min hand
  let mins = time.getMinutes()
  mins = (mins / 60) * 360 + 90
  minHand.style.transform = `rotate(${mins}deg)`

  // hour hand
  let hours = time.getHours()
  hours = (hours / 12) * 360 + 90
  hourHand.style.transform = `rotate(${hours}deg)`
  
}

setInterval(setTime, 1000)

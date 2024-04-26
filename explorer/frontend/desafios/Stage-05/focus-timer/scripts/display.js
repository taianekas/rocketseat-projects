import { Time } from './elements.js';
import { ToggleButtonPlay, ToggleButtonPause } from './events.js';
import { TimeEnd, bgAudioForestStop, bgAudioRainStop, bgAudioCoffeeShopStop, bgAudioFireplaceStop } from './sound.js';

let timerTimeOut;
let minutes = Number(Time.Minutes.textContent);
const numberControl = 1;

export const UpdateDisplay = (newMinutes, seconds) => {
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  Time.Minutes.textContent = String(newMinutes).padStart(2, '0')
  Time.Seconds.textContent = String(seconds).padStart(2, '0')
}

export const Reset = () => { clearTimeout(timerTimeOut) }

export const PlayMinutes = () => {
  
    timerTimeOut = setTimeout( () => {
      let minutes = Number(Time.Minutes.textContent)
      let seconds = Number(Time.Seconds.textContent)
      const isFinished = minutes <= 0 && seconds <= 0
      
      if (isFinished) {
        TimeEnd()
        Reset()
        UpdateDisplay()
        bgAudioForestStop() 
        bgAudioRainStop() 
        bgAudioCoffeeShopStop() 
        bgAudioFireplaceStop()
        ToggleButtonPause()
        return
      }

      if ( seconds <= 0 ) {
        seconds = 60
        --minutes
      }

      UpdateDisplay(minutes, String(seconds - 1))
      PlayMinutes()
      ToggleButtonPlay()
  
    }, 1000)
}; 

export const PauseMinutes = () => {
  clearTimeout(timerTimeOut)
  ToggleButtonPause()
};

export const StopMinutes = () => {
  let minutes = 0
  let seconds = 0
  UpdateDisplay(minutes, String(seconds))
  ToggleButtonPause()
};

const updateMinutes = (minutes) => { Time.Minutes.textContent = String(minutes).padStart(2, '0') }

export const AddMinutes = () => {
  minutes = minutes <= 55 ? Number(minutes) + numberControl : (minutes = 0)
  updateMinutes(minutes)
};

export const SubtractMinutes = () => {
  minutes = minutes > 5 ? Number(minutes) - numberControl : (minutes = 0)
  updateMinutes(minutes)
};
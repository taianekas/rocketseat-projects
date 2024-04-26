import { Button } from './elements.js';

export const ToggleButtonPlay = () => {
  Button.Play.classList.add('hide')
  Button.Pause.classList.remove('hide')
};

export const ToggleButtonPause = () => {
  Button.Pause.classList.add('hide')
  Button.Play.classList.remove('hide')
};

export const ToggleCardForest = () => {
  Button.Forest.classList.add('selected')
  Button.Rain.classList.remove('selected')
  Button.CoffeeShop.classList.remove('selected')
  Button.Fireplace.classList.remove('selected')
};

export const ToggleCardRain = () => {
  Button.Rain.classList.add('selected')
  Button.Forest.classList.remove('selected')
  Button.CoffeeShop.classList.remove('selected')
  Button.Fireplace.classList.remove('selected')
};

export const ToggleCardCoffeeShop = () => {
  Button.CoffeeShop.classList.add('selected')
  Button.Forest.classList.remove('selected')
  Button.Rain.classList.remove('selected')
  Button.Fireplace.classList.remove('selected')
};

export const ToggleCardFireplace = () => {
  Button.Fireplace.classList.add('selected')
  Button.Forest.classList.remove('selected')
  Button.Rain.classList.remove('selected')
  Button.CoffeeShop.classList.remove('selected')
};

export const ToggleButtonSun = () => {
  Button.Sun.classList.add('hide')
  Button.Moon.classList.remove('hide')
  Button.Body.classList.add('dark')
}

export const ToggleButtonMoon = () => {
  Button.Sun.classList.remove('hide')
  Button.Moon.classList.add('hide')
  Button.Body.classList.remove('dark')
}
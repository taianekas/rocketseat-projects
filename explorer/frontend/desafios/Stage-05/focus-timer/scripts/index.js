import { Button } from './elements.js';
import { ToggleButtonSun, ToggleButtonMoon } from './events.js';
import { PlayMinutes, StopMinutes, AddMinutes, SubtractMinutes, PauseMinutes } from './display.js';
import { ForestCard, RainCard, CoffeeShopCard, FireplaceCard } from './cards.js'

Button.Play.addEventListener('click', PlayMinutes);
Button.Pause.addEventListener('click', PauseMinutes);
Button.Stop.addEventListener('click', StopMinutes);
Button.Add.addEventListener('click', AddMinutes);
Button.Subtract.addEventListener('click', SubtractMinutes);

Button.Forest.addEventListener('click', ForestCard);
Button.Rain.addEventListener('click', RainCard);
Button.CoffeeShop.addEventListener('click',CoffeeShopCard);
Button.Fireplace.addEventListener('click', FireplaceCard);

Button.Sun.addEventListener('click', ToggleButtonSun)
Button.Moon.addEventListener('click', ToggleButtonMoon)

import Bulb from './Bulb';
import RemoteControl from './RemoteControl';
import TurnOff from './TurnOff';
import TurnOn from './TurnOn';

const bulb = new Bulb();

const turnOn = new TurnOn(bulb);
const turnOff = new TurnOff(bulb);

const control = new RemoteControl();
control.submit(turnOn); // Light up
control.submit(turnOff); // Darkness
import type Bulb from './Bulb';
import type Action from './Action';

// Concrete Command
export default class TurnOff implements Action {

  constructor(private readonly bulb: Bulb) { }

  do(): void {
    this.bulb.turnOff();
  }

  undo(): void {
    this.bulb.turnOn();
  }

}
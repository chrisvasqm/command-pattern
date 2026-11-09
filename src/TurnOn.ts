import type Bulb from './Bulb';
import type Action from './Action';

// Concrete Command
export default class TurnOn implements Action {

  constructor(private readonly bulb: Bulb) { }

  do(): void {
    this.bulb.turnOn();
  }

  undo(): void {
    this.bulb.turnOff();
  }

}
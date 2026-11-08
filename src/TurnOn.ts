import type Bulb from './Bulb';
import type Command from './Command';

// Concrete Command
export default class TurnOn implements Command {

  constructor(private readonly bulb: Bulb) { }

  execute(): void {
    this.bulb.turnOn();
  }

  undo(): void {
    this.bulb.turnOff();
  }

  redo(): void {
    this.execute();
  }

}
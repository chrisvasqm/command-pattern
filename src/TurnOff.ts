import type Bulb from './Bulb';
import type Command from './Command';

// Concrete Command
export default class TurnOff implements Command {

  constructor(private readonly bulb: Bulb) { }

  execute(): void {
    this.bulb.turnOff();
  }

  undo(): void {
    this.bulb.turnOn();
  }
  
  redo(): void {
    this.execute();
  }

}
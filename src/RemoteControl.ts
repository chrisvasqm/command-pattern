import type Command from './Command';

// Invoker
export default class RemoteControl {

  submit(command: Command) {
    command.execute();
  }

}
import type Action from './Action';

// Invoker
export default class RemoteControl {

  submit(action: Action) {
    action.do();
  }

}
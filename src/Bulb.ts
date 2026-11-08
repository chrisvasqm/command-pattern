// Receiver
export default class Bulb {
  private isOn: boolean = false;

  turnOn() {
    if (this.isOn)
      return;

    this.isOn = true;
    console.log('Bulb is on');
  }

  turnOff() {
    if (!this.isOn)
      return;

    this.isOn = false;
    console.log('Bulb is off');
  }
}

import {Vehicle} from './vehicle.js'

export class Drone extends Vehicle {
  constructor(license, model, latLong) {
    super(license, model, latLong)
    this.aritTimeHours = null;
    this.bas = null
  }
}

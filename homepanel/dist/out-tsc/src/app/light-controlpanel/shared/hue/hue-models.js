export class HueGroup {
    constructor() { }
    // Set states
    setOn() {
        this.controler.setOn(this.id);
    }
    setOff() {
        this.controler.setOff(this.id);
    }
    setBrightness(brightness) {
        this.controler.setBrightness(this.id, brightness);
    }
    setColor(HSVColor) {
        this.controler.setColor(this.id, HSVColor);
    }
    // Get states
    getSwitchState() {
        return this.controler.getSwitchState(this.id);
    }
    getBrightness() {
        return this.controler.getBrightness(this.id);
    }
    getColor() {
        return this.controler.getColor(this.id);
    }
}
//# sourceMappingURL=hue-models.js.map
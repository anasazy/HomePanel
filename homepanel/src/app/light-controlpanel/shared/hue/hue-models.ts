export class HueGroup{
  constructor(){}

  id;
  controler;


  // Set states
  setOn(){
    this.controler.setOn(this.id);
  }

  setOff(){
    this.controler.setOff(this.id);
  }

  setBrightness(brightness: number){
    this.controler.setBrightness(this.id,brightness);
  }

  setColor(HSVColor: object){
    this.controler.setColor(this.id, HSVColor);
  }


  // Get states
  getSwitchState(): number{
    return this.controler.getSwitchState(this.id);
  }

  getBrightness(): number{
    return this.controler.getBrightness(this.id);
  }

  getColor(): object{
    return this.controler.getColor(this.id);
  }
}
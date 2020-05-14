import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-dimmer',
  templateUrl: './dimmer.component.html',
  styleUrls: ['./dimmer.component.css']
})
export class DimmerComponent implements OnInit {
  @Input() id;
  @Input() brightness;

  rangeMin = 1;
  rangeMax = 254;

  percentage = 0

  @Output() brightnessChanged = new EventEmitter()


  constructor() {}

  ngOnInit() {}

  changeHandler(value){
      this.updateBrightness(value);
      let event = {
        "brightness": this.brightness,
        "percentage": this.percentage,
        "type": "BrightnessChangedEvent",
        "source": "DimmerComponent",
        "id": this.id
      }
      this.brightnessChanged.emit(event);
  }

  updateBrightness(value){
    this.brightness = value;
  }
  

  // Visuals
  getRangeBarCSS(){
      this.calcFillPercentage()
      return this.getGradientString();
  }

  getGradientString(){
    return 'linear-gradient(0deg, rgb('+this.brightness+','+this.brightness+','+this.brightness+') '+ this.percentage +'%, rgb(25,25,25) '+ this.percentage +'%)';
  }

  calcFillPercentage(){
      this.percentage = (this.brightness / this.rangeMax) * 100;
  }

}


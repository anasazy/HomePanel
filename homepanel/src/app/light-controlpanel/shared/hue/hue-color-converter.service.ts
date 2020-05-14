import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HueColorConverterService {

  constructor() { }

    hsv_to_cie(hue: number, saturation: number, ligthness: number): object{
        let cie = {};
        cie["hue"] = Math.floor(65535 * hue / 360);
        cie["sat"] = Math.floor(saturation /100 * 255);
        cie["bri"] = Math.floor(ligthness /100 * 255);

        if (cie["sat"] > 254) {
            cie["sat"] = 254
        }

        if (cie["bri"] > 254) {
            cie["bri"] = 254
        }

        return cie;
    }

}

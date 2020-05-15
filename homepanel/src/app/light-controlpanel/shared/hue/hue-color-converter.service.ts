import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class HueColorConverterService {

	constructor() { }

	hsv2cie(hue: number, saturation: number, ligthness: number) {
		const cie = {
			hue: Math.floor(65535 * hue / 360),
			sat: Math.floor(saturation / 100 * 255),
			bri: Math.floor(ligthness / 100 * 255),
		};

		if (cie.sat > 254) {
			cie.sat = 254;
		}

		if (cie.bri > 254) {
			cie.bri = 254;
		}

		return cie;
	}

}

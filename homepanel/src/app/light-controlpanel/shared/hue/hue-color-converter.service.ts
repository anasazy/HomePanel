import { Injectable } from '@angular/core';

export interface CIE {
	bri: number;
	hue: number;
	sat: number;
}

@Injectable({
	providedIn: 'root'
})
export class HueColorConverterService {

	constructor() { }

	hsv2cie(hue: number, saturation: number, ligthness: number): CIE {
		const cie = {
			bri: Math.floor(ligthness / 100 * 255),
			hue: Math.floor(65535 * hue / 360),
			sat: Math.floor(saturation / 100 * 255),
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

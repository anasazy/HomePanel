import { TestBed } from '@angular/core/testing';

import { HueIOService } from './hue-io.service';

describe('HueIOService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HueIOService = TestBed.get(HueIOService);
    expect(service).toBeTruthy();
  });
});

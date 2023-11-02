import { TestBed } from '@angular/core/testing';

import { CustomRendererService } from './custom-renderer.service';

describe('CustomRendererService', () => {
  let service: CustomRendererService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomRendererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Custom renderer element style', () => {
    const dummyElement = document.createElement('div');
    service.setElementStyle(dummyElement, 'color', 'blue');
    
    expect(dummyElement.style.color).toBe('blue');
  });
});

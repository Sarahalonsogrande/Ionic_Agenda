import { TestBed } from '@angular/core/testing';

import { TareasManagerService } from './tareas-manager.service';

describe('TareasManagerService', () => {
  let service: TareasManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareasManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

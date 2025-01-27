import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TareasArchivadasPage } from './tareas-archivadas.page';

describe('TareasArchivadasPage', () => {
  let component: TareasArchivadasPage;
  let fixture: ComponentFixture<TareasArchivadasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasArchivadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

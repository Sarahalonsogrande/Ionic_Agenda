import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodasTareasPage } from './todas-tareas.page';

describe('TodasTareasPage', () => {
  let component: TodasTareasPage;
  let fixture: ComponentFixture<TodasTareasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TodasTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

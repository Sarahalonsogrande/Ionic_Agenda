import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodosTrabajosPage } from './todos-trabajos.page';

describe('TodosTrabajosPage', () => {
  let component: TodosTrabajosPage;
  let fixture: ComponentFixture<TodosTrabajosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosTrabajosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

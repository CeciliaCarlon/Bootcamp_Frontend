import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTareasCreadasComponent } from './lista-tareas-creadas.component';

describe('ListaTareasCreadasComponent', () => {
  let component: ListaTareasCreadasComponent;
  let fixture: ComponentFixture<ListaTareasCreadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTareasCreadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTareasCreadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

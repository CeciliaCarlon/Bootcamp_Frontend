import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss']
})
export class AgregarTareaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() nuevaTarea = new EventEmitter<string>();

  informarAgregarTarea(nombreTarea : string){ this.nuevaTarea.emit(nombreTarea); }

}

import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-lista-tareas-creadas',
  templateUrl: './lista-tareas-creadas.component.html',
  styleUrls: ['./lista-tareas-creadas.component.scss']
})
export class ListaTareasCreadasComponent implements OnInit {

  constructor() { }

  //Lo que ingresa
  @Input() tarea = {
    id : 0,
    nombreTarea : "",
    checked : false,
  };

  ngOnInit(): void {
  }

  //Lo que sale
  @Output() enviarTarea = new EventEmitter<Object>();
  @Output() cambiarEstado = new EventEmitter<Object>();

  //Funciones que emiten
  informarTareaEliminada(TAREA : Object) : void { this.enviarTarea.emit(TAREA); }
  informarCambioEstado(TAREA : Object){ this.cambiarEstado.emit(TAREA); }

}

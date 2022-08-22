import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-tareas-creadas',
  templateUrl: './lista-tareas-creadas.component.html',
  styleUrls: ['./lista-tareas-creadas.component.scss']
})
export class ListaTareasCreadasComponent implements OnInit {

  constructor() { }

  @Input() tarea = "";

  ngOnInit(): void {
  }

}

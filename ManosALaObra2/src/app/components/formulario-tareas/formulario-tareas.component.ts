import { Component, OnInit } from '@angular/core';

export interface EstructuraTarea {
  id : number ;
  nombreTarea : string ;
  checked : boolean ;
}

@Component({
  selector: 'app-formulario-tareas',
  templateUrl: './formulario-tareas.component.html',
  styleUrls: ['./formulario-tareas.component.scss']
})

export class FormularioTareasComponent implements OnInit {

  //Variables
  protected tareas: Array<any>;

  constructor() {
    this.tareas = new Array();
    let tarea1 : EstructuraTarea = {
      id: this.tareas.length,
      nombreTarea : "Bañar al perro",
      checked : false,
    }
    this.tareas = new Array();
    let tarea2 : EstructuraTarea = {
      id: this.tareas.length,
      nombreTarea : "Hacer las compras",
      checked : false,
    }
    this.tareas.push(tarea1);
    this.tareas.push(tarea2);
  }

  ngOnInit(): void {
  }

  agregarTarea(ID: number, NOMBRE: string, CHECKED: boolean): void {
    let nuevaTarea : EstructuraTarea ={
      id: ID,
      nombreTarea : NOMBRE,
      checked : CHECKED,
    };
    this.tareas.push(nuevaTarea);
  }
  

}

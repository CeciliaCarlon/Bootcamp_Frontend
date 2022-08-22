import { Component, OnInit } from '@angular/core';

export interface EstructuraTarea{
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
  protected ID : number = 0;
  protected index = 0;

  constructor() {
    this.tareas = new Array();
    let tarea1 : EstructuraTarea = {
      id: this.ID,
      nombreTarea : "Bañar al perro",
      checked : false,
    }
    this.tareas.push(tarea1);
    this.ID = this.ID + 1;
    let tarea2 : EstructuraTarea = {
      id: this.ID,
      nombreTarea : "Hacer las compras",
      checked : false,
    }
    this.tareas.push(tarea2);
  }

  ngOnInit(): void {
  }

  obtenerTarea(idTarea: number){
    this.tareas.forEach(tarea => {
      if(tarea.id === idTarea) {
        this.index = this.tareas.indexOf(tarea);
        return tarea;
      };
    });
  }

  agregarTarea(NOMBRE: string, CHECKED: boolean): void {
    console.log(NOMBRE);
    console.log(this.tareas.length);
    if(NOMBRE){
      this.ID = this.ID + 1;
      let nuevaTarea : EstructuraTarea ={
        id: this.ID,
        nombreTarea : NOMBRE,
        checked : CHECKED,
      };
      this.tareas.unshift(nuevaTarea);
      console.log(nuevaTarea.id);
    } else {
      alert("Debe insertar el nombre de la tarea");
    }
    console.log(this.tareas.length);
  }

  eliminarTarea($event: any) : void {
    console.log(this.tareas[$event.id]);
    let tareaParaEliminar = this.obtenerTarea($event.id);    
    delete this.tareas[this.index];
    console.log(tareaParaEliminar);
  }
  

}

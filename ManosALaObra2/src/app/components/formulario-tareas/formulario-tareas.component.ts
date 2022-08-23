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

  cambiarEstadoTarea($event : any) : void {
    this.tareas.forEach(tarea => {
      if(tarea.id === $event.id) $event.checked = !$event.checked;
    });
  }

  agregarTarea(NOMBRE: string): void {
    if(NOMBRE){
      this.ID = this.ID + 1;
      let nuevaTarea : EstructuraTarea ={
        id: this.ID,
        nombreTarea : NOMBRE,
        checked : false,
      };
      this.tareas.unshift(nuevaTarea);
    } else {
      alert("Debe insertar el nombre de la tarea");
    }
  }

  eliminarTarea($event: any) : void {
    for( let i = 0; i < this.tareas.length; i++){ 
      if ( this.tareas[i].id === $event.id) { 
        if(this.tareas[i].checked) this.tareas.splice(i, 1); 
        else alert("La tarea debe estar completada");
      } 
    }
  }
  

}

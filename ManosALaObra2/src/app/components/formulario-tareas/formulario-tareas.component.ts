import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-tareas',
  templateUrl: './formulario-tareas.component.html',
  styleUrls: ['./formulario-tareas.component.scss']
})
export class FormularioTareasComponent implements OnInit {

  //Variables
  tarea1= "Hacer las compras";
  tarea2= "Bañar al perro";
  tarea3= "Preparar el budín";
  tarea4= "Lavar el auto";

  constructor() { }

  ngOnInit(): void {
  }

}

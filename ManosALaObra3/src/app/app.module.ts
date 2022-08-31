import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioTareasComponent } from './components/formulario-tareas/formulario-tareas.component';
import { ListaTareasCreadasComponent } from './components/lista-tareas-creadas/lista-tareas-creadas.component';
import { AgregarTareaComponent } from './components/agregar-tarea/agregar-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioTareasComponent,
    ListaTareasCreadasComponent,
    AgregarTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

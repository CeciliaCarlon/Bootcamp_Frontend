import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioTareasComponent } from './components/formulario-tareas/formulario-tareas.component';
import { AgregarTareaComponent } from './components/agregar-tarea/agregar-tarea.component';
import { ListaTareasCreadasComponent } from './components/lista-tareas-creadas/lista-tareas-creadas.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioTareasComponent,
    AgregarTareaComponent,
    ListaTareasCreadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

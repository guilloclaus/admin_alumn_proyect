import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PageWrapperComponent } from './component/page-wrapper/page-wrapper.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { AlumnosComponent } from './component/views/alumnos/alumnos.component';
import { CursosComponent } from './component/views/cursos/cursos.component';
import { InscripcionesComponent } from './component/views/inscripciones/inscripciones.component';
import { ListaAlumnosComponent } from './component/views/lista-alumnos/lista-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PageWrapperComponent,
    ToolbarComponent,
    AlumnosComponent,
    CursosComponent,
    InscripcionesComponent,
    ListaAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

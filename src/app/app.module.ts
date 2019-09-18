import { AlteracaoAgendaService } from './services/alteracao-agenda.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './rotas/app.routes';

import { AppComponent } from './app.component';
import { ListaAgendaComponent } from './lista-agenda/lista-agenda.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InclusaoAgendaService } from './services/inclusao-agenda.service';
import { ListaAgendaService } from './services/lista-agenda.service';
import { ExlusaoAgendaService } from './services/exclusao-agenda.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaAgendaComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ListaAgendaService,
    InclusaoAgendaService,
    AlteracaoAgendaService,
    ExlusaoAgendaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

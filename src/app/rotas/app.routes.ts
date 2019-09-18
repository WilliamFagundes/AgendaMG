import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaAgendaComponent } from '../lista-agenda/lista-agenda.component';
import { CadastroComponent } from '../cadastro/cadastro.component';

export const appRoutes: Routes = [
  //  ordem é importante, é sempre lido de cima pra baixo
    { path:"", component:  ListaAgendaComponent},
    { path:"agenda", component:  ListaAgendaComponent},
    { path:"cadastro", component:  CadastroComponent}
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);

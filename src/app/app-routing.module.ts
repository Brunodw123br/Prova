import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroViagemComponent } from './cadastro-viagem/cadastro-viagem.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ExcluirComponent } from './excluir/excluir.component';

const routes: Routes = [

    { path : '', component : HomeComponent},
    { path : 'Detalhes/:destino/:tipo/:dataC/:dataS/:orcamento/:qtd', component : DetalhesComponent},
    { path : 'Cadastro', component : CadastroViagemComponent},
    { path : 'Excluir/:destino/:tipo/:dataC/:dataS/:orcamento/:qtd', component : ExcluirComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

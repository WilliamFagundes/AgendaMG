import { AlteracaoAgendaService } from './../services/alteracao-agenda.service';
import { IPessoa } from './../classes/interface.pessoa';
import { ListaAgendaService } from './../services/lista-agenda.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InclusaoAgendaService } from '../services/inclusao-agenda.service';
import { ExlusaoAgendaService } from '../services/exclusao-agenda.service';

@Component({
  selector: 'app-lista-agenda',
  templateUrl: './lista-agenda.component.html',
  styleUrls: ['./lista-agenda.component.css']
})
export class ListaAgendaComponent implements OnInit {

  constructor(private listaagendaService : ListaAgendaService,
    private formBuilder: FormBuilder,
    private inclusaoAgendaService : InclusaoAgendaService,
    private alteracaoAgendaService : AlteracaoAgendaService,
    private exclusaoAgendaService : ExlusaoAgendaService) { }

  listaClientes : IPessoa[];
  formulario : FormGroup;
  alteracaoAgenda : Boolean;

  ngOnInit() {
    this.inicializarForm();
    this.listaagendaService
    .getPessoas()
    .subscribe(dados =>
      {
        this.listaClientes = dados

      });
  }

  inicializarForm(){
    this.formulario = this.formBuilder.group({
      idPessoa : [],
      nome : [],
      telefone : [],
      email : []
    });
  }

  SalvarPessoa()
  {
    if(!this.alteracaoAgenda){
      this.inclusaoAgendaService
      .addPessoa(this.formulario)
      .subscribe(dados => {
        this.listaClientes = dados
        console.log(dados)
        this.inicializarForm();

      },
      (erro: any) => alert('erro'));
    }
    else {
      this.alteracaoAgendaService
      .updatePessoa(this.formulario)
      .subscribe(dados => {
        this.listaClientes = dados
        console.log(dados)
        this.inicializarForm();
        this.alteracaoAgenda =  false;
      });
    }
  }

  Excluir(id : number)
  {
    this.exclusaoAgendaService
    .deletePessoa(id)
    .subscribe(dados => {
      this.listaClientes = dados
      console.log(dados)
    });
  }

  Alterar(pessoa)
  {
    this.alteracaoAgenda =  true;
    this.formulario = this.formBuilder.group({
      idPessoa : [pessoa.idPessoa],
      nome : [pessoa.nome],
      telefone : [pessoa.telefone],
      email : [pessoa.email]
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { InclusaoAgendaService } from '../services/inclusao-agenda.service';
import { Router } from '@angular/router';
import { IPessoa } from '../classes/interface.pessoa';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formulario : FormGroup;
  listaClientes : IPessoa[];
  constructor(
    private formBuilder: FormBuilder,
    private inclusaoAgendaService : InclusaoAgendaService,
    private route : Router) { }

  ngOnInit() {
    this.inicializarForm();
  }

  inicializarForm(){
    this.formulario = this.formBuilder.group({
      nome : [],
      telefone : [],
      email : []
    });
  }
  SalvarPessoa()
  {
    this.inclusaoAgendaService
    .addPessoa(this.formulario)
    .subscribe(dados => {

      console.log(dados)
      this.route.navigate(['/']);

    },
    (erro: any) => alert('erro'));
  }

}

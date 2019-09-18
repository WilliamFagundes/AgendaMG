import { IPessoa } from './../classes/interface.pessoa';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import 'rxjs';
import { FormGroup } from '@angular/forms';


@Injectable()

export class AlteracaoAgendaService{

  constructor(private _http : HttpClient){}

  private url = "https://localhost:44385/api/pessoas/updatepessoa";
  //https://localhost:44385/

  public updatePessoa(formulario : FormGroup) {

    return this._http.post<IPessoa[]>(this.url, JSON.stringify(formulario.value));

  }

}

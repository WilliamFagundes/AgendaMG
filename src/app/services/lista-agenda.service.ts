import { IPessoa } from './../classes/interface.pessoa';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import 'rxjs';


@Injectable()

export class ListaAgendaService{

  constructor(private _http : HttpClient){}

  private url = "https://localhost:44385/api/pessoas/GetListPessoa";
  //https://localhost:44385/

  public getPessoas() {

    return this._http.get<IPessoa[]>(this.url);

  }

}

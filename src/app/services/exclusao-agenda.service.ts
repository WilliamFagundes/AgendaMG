import { IPessoa } from './../classes/interface.pessoa';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import 'rxjs';
import { FormGroup } from '@angular/forms';


@Injectable()

export class ExlusaoAgendaService{

  constructor(private _http : HttpClient){}

  private url = "https://localhost:44385/api/pessoas/DeletePessoa";
  //https://localhost:44385/

  public deletePessoa(id : number) {
    let tempUrl = this.url + '/'+id;
    return this._http.get<IPessoa[]>(tempUrl);

  }

}

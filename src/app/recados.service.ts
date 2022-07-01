import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecadosService {

  url = 'https://muralderecados.herokuapp.com/api/recados';

  constructor(private http : HttpClient) { }

  getRecados() {
    return this.http.get(this.url);
  }

  saveRecado(data:any) {
    return this.http.post(this.url, data);
  }
}

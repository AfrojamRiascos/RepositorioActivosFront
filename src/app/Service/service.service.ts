import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulos } from '../Modelo/Articulos';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  

  constructor(private http:HttpClient) { }

  // Url = 'http://localhost:8080/activos/listArticulos';
  // Urladd = 'http://localhost:8080/activos/addArticulos';

  private u = 'http://localhost:8080/activos/';

  getArticulos(){
    return this.http.get<Articulos[]>(`${this.u}/listArticulos`);
  }

  addArticulo(articulos:Articulos){
    return this.http.post<Articulos>(`${this.u}/addArticulos`, articulos);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulos } from '../Modelo/Articulos';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  private Url = 'http://localhost:8080/activos';

  getArticulos(){
    return this.http.get<Articulos[]>(`${this.Url}/listArticulos`);
  }

  addArticulo(articulos:Articulos){
    return this.http.post<Articulos>(`${this.Url}/addArticulos`, articulos);
  }
}

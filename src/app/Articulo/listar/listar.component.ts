import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulos } from 'src/app/Modelo/Articulos';
import {ServiceService} from '../../Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  articulos: Articulos[] = [];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getArticulos()
    .subscribe(data=>{
        this.articulos=data;
        console.log(data);
      }
    )
  }

  Editar(articulos:Articulos){
    localStorage.setItem("id", articulos.id!.toString());
    this.router.navigate(["edit"]);
  }
}

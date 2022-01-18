import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulos } from 'src/app/Modelo/Articulos';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar(articulos:Articulos){
    this.service.addArticulo(articulos)
    .subscribe(data=>{
      alert("Agregado con Éxito!!!");
      this.router.navigate(["listar"]);
    })
  }

}

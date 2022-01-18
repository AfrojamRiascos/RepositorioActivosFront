import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulos } from 'src/app/Modelo/Articulos';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  articulos:Articulos = new Articulos();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.updateArticulo();
  }

  updateArticulo(){
    this.service.updateArticulo(this.articulos)
    .subscribe(data=>{
      alert("Actualizado con Éxito!!!");
      this.router.navigate(["listar"]);
    })
  }

  // Editar(articulos:Articulos){
  //   let id = localStorage.getItem("id");
  //   this.service.getArticulosId(id)
  //   .subscribe(data=>{
  //     this.articulos = data;
  //   })
  // }

}

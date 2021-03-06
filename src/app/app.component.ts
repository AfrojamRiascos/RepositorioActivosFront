import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Activos Empresa';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }

  Crear(){
    this.router.navigate(["add"]);
  }

  Editar(){
    this.router.navigate(["edit"]);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Articulo/add/add.component';
import { EditComponent } from './Articulo/edit/edit.component';
import { ListarComponent } from './Articulo/listar/listar.component';

const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BeerComponent } from './beer.component';
import { BeerFormComponent } from './beer-form/beer-form.component';
import { BeerDetalheComponent } from './beer/beer-novo/beer-detalhe/beer-detalhe.component';
import { BeerEditarComponent } from './beer/beer-editar/beer-editar.component';
import { BeerNovoComponent } from './beer/beer-novo/beer-novo.component';

/**
 *  O Routing module serve para o gerenciamento de rotas dos componets do angular
 */

export const beerRoutes: Routes = [
  {
    path: 'beer',
    component: BeerComponent,
    data: { title: 'Lista de Cervejas' }
  },
  {
    path: 'beer-detalhe/:id',
    component: BeerDetalheComponent,
    data: { title: 'Detalhe das Cervejas' }
  },
  {
    path: 'beer-novo',
    component: BeerNovoComponent,
    data: { title: 'Adicionar Cerveja' }
  },
  {
    path: 'beer-editar/:id',
    component: BeerEditarComponent,
    data: { title: 'Editar a Cerveja' }
  },
  { path: '',
    redirectTo: '/beer',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(beerRoutes)],
  exports: [RouterModule]
})
export class BeerModule { }
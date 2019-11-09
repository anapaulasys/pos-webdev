import { NgModule } from '@angular/core';

import { CardsComponent } from 'src/app/core/components/cards/cards.component';
import { BeerComponent } from './beer.component';
import { BeerFormComponent } from './beer-form/beer-form.component';
import { BeerNovoComponent } from './beer/beer-novo/beer-novo.component';
import { BeerEditarComponent } from './beer/beer-editar/beer-editar.component';
import { BeerDetalheComponent } from './beer/beer-novo/beer-detalhe/beer-detalhe.component';
import { ApiService } from 'src/app/core/services/beer.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BeerService } from 'src/app/core/services/beer.service';

// aqui irá conter todas os módulos de comunicacao
// te todos os registros filhos

@NgModule({
  declarations: [
    BeerComponent,
    BeerFormComponent,
    CardsComponent,
    BeerNovoComponent,
    BeerEditarComponent,
    BeerDetalheComponent    
  ],
  imports: [BrowserModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule ],
  providers: [
    ApiService
  ],
  bootstrap: []
})
export class BeerModule { }

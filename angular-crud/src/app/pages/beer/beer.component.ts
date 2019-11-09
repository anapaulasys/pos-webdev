import { Component, OnInit } from '@angular/core';
// import { BeerService } from 'src/app/core/services/beer.service';
import { Beer } from 'src/app/core/model/beer.model';

import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/beer.service';
//controlador e troca de informações entre html e scss

@Component({
  // selector Irá informar ao Angular qual nome que deverá utilizar na tag HTML
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  public beers ;

  constructor(
    // private beerService: BeerService
    private _api: ApiService
  ) { }

  ngOnInit() {
    this._api.getBeers()
      .subscribe(res => {
        this.beers = res;
        console.log(this.beers);
        // this.isLoadingResults = false;
      }, err => {
        console.log(err);
        // this.isLoadingResults = false;
      });
  }
}
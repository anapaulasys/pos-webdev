import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiService } from 'src/app/core/services/beer.service';


@Component({
  selector: 'app-beer-novo',
  templateUrl: './beer-novo.component.html',
  styleUrls: ['./beer-novo.component.scss']
})
export class BeerNovoComponent implements OnInit {
  beerForm: FormGroup;
  _id: string;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.beerForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'description': [null, [Validators.required, Validators.minLength(4)]]
    });
  }

  getBeer(id) {
    this.api.getBeer(id).subscribe(data => {
      this._id = data._id;
      this.beerForm.setValue({
        name: data.name,
        description: data.description
      });
    });
  }

  updateBeer(form: NgForm) {
    // this.isLoadingResults = true;
    this.api.updateBeer(this._id, form)
      .subscribe(res => {
        // this.isLoadingResults = false;
        this.router.navigate(['/beer-detalhe/' + this._id]);
      }, (err) => {
        console.log(err);
        // this.isLoadingResults = false;
      }
      );
  }
}

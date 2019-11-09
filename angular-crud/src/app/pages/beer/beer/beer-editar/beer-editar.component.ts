import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/beer.service';

@Component({
  selector: 'app-beer-editar',
  templateUrl: './beer-editar.component.html',
  styleUrls: ['./beer-editar.component.scss']
})
export class BeerEditarComponent implements OnInit {
 
  public beerForm: FormGroup;
  _id: String = '';
  name: String = '';
  description: String = '';
  // isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getBeer(this.route.snapshot.params['id']);
    this.beerForm = this.formBuilder.group({
   'name' : [null, Validators.required],
   'description' : [null, Validators.required]
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
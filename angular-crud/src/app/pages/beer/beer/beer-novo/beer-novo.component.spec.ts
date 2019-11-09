import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerNovoComponent } from './beer-novo.component';

describe('BeerNovoComponent', () => {
  let component: BeerNovoComponent;
  let fixture: ComponentFixture<BeerNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

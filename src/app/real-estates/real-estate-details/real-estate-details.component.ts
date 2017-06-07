import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import 'rxjs/add/operator/switchMap';

import { RealEstatesService } from "../shared/real-estates.service";
import { RealEstate } from "../shared/real-estate.model";
import { SpinnerService } from "../../shared/shared.module";

@Component({
  templateUrl: 'real-estate-details.component.html',
  providers: [SpinnerService],
})
export class RealEstateDetailsComponent implements OnInit, OnDestroy {
  public realEstate: RealEstate;
  public notFound: boolean = false;

  constructor(private realEstatesService: RealEstatesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private spinnerService: SpinnerService) {
  }

  ngOnInit() {
    console.log(`RealEstateDetailsComponent initialized at:`, Date.now());
    this.activatedRoute.params
      .switchMap((params: Params) => {
        this.spinnerService.show();
        this.notFound = false;
        return this.realEstatesService.getById(+params['id']);
      })
      .subscribe((realEstate: RealEstate) => {
        console.log('realEstate', realEstate);
        this.spinnerService.hide();
        this.notFound = !realEstate;
        this.realEstate = realEstate;
      });
  }

  ngOnDestroy(): void {
    console.log('RealEstateDetailsComponent destroy');
  }

  onBack() {
    this.router.navigate(['']);
  }
}

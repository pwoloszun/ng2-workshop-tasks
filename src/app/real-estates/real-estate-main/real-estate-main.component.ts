import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import 'rxjs/add/operator/switchMap';

import { RealEstatesService } from "../shared/real-estates.service";
import { RealEstate } from "../shared/real-estate.model";

@Component({
  templateUrl: './real-estate-main.component.html',
})
export class RealEstateMainComponent implements OnInit {
  count: number;
  ids: number[] = [];
  selectedId: number = null;

  constructor(private realEstatesService: RealEstatesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.realEstatesService.getAll().subscribe((realEstates: RealEstate[]) => {
      this.count = realEstates.length;
      this.ids = realEstates.map((re) => re.id);
      this.selectedId = this.ids[0];
    });
  }

  gotoRealEstate() {
    this.router.navigate([this.selectedId], {relativeTo: this.activatedRoute});
  }

  isIdSelected(): boolean {
    return this.selectedId !== null;
  }
}

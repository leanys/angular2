import { Component, OnInit, Input } from '@angular/core';
import { Prince } from '../prince';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() prince: Prince;
  constructor(private route: ActivatedRoute, private location: Location, private heroservice: HeroService) { }

  ngOnInit():void {
    this.getPrince();
  }

  getPrince(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroservice.getPrince(id)
    .subscribe(prince => this.prince = prince);
  }

  goBack(): void{
    this.location.back();
  }
}

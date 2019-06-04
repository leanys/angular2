import { Component, OnInit } from '@angular/core';
import { Prince } from '../prince';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  princes: Prince[] = [];

  constructor(private HeroService: HeroService) { }

  ngOnInit() {
    this.getPrinces();
  }

  getPrinces():void{
    this.HeroService.getPrinces()
    .subscribe(princes => this.princes = princes.slice(1,5));
  }

}

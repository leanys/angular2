import { Component, OnInit} from '@angular/core';
import { Prince } from '../prince';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-princes',
  templateUrl: './princes.component.html',
  styleUrls: ['./princes.component.css']
})
export class PrincesComponent implements OnInit {
  constructor(private heroService: HeroService) { }
  princes: Prince[];
  getPrinces(): void{
    this.heroService.getPrinces()
      .subscribe(princes => this.princes = princes);
  }

  ngOnInit() {
    this.getPrinces();
  }
}

import { Component, OnInit } from '@angular/core';
import { IHero as Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-daashboard',
  templateUrl: './daashboard.component.html',
  styleUrls: ['./daashboard.component.css']
})
export class DaashboardComponent implements OnInit {
  heroes:Hero[]=[];

  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }
  getHeroes():void{
     this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes.slice(1,5))
  }

}

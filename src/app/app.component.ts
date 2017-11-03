import { Component, OnInit } from '@angular/core';
import { HeroService } from './service/hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService] 
})
export class AppComponent implements OnInit {
  title = 'app';
  heroes = [];

  constructor(private heroService: HeroService) {}
  
  // called on demand by Angular
  ngOnInit() {
    this.heroService.get().then(response => { this.heroes = response; });
  }
}

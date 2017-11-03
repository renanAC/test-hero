import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroService] 
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: object;
  comics = [];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.getComics(this.hero['id']).then(response => { this.comics = response; })
  }

}

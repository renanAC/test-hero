import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class HeroService {
  path = 'http://gateway.marvel.com';
  requesOptions = new RequestOptions();
  options = new RequestOptions({
    params: {
      ts: 'hero',
      apikey: 'd7286f54bcceac4bac8a10c973905c12',
      hash: Md5.hashStr('hero91c10e38b468ab6c7c15f4dad3cb05de3061e5a9d7286f54bcceac4bac8a10c973905c12')
    }
  }
);

  constructor ( private http: Http) {}

  //Get all heroes
  get(): Promise<any> {
    let promise: Promise<boolean>;
    return this.http.get(`${this.path}/v1/public/characters`, this.options)
    .toPromise()
    .then(response => {return response.json().data.results;})
    .catch(err => err);

  }

  //Get Commics by hero id
  getComics(id): Promise<any> {
    let promise: Promise<boolean>;
    return this.http.get(`${this.path}/v1/public/characters/${id}/comics`, this.options)
    .toPromise()
    .then(response => {return response.json().data.results;})
    .catch(err => err);

  }
}

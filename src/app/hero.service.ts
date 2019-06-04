import { Injectable } from '@angular/core';
import { Prince} from './prince';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { MessagesService } from './messages.service'
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor( private http: HttpClient,
    private MessagesService: MessagesService) { }

  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.MessagesService.add(`HeroService: ${message}`);
}
private heroesUrl = 'api/heroes';  // URL to web api

  getPrinces(): Observable<Prince[]>{
    this.MessagesService.add('Princes have been fetched');
    return this.http.get<Prince[]>(this.heroesUrl)
  }

  // getPrince(idd: number): Observable<Prince>{
  //   this.MessagesService.add(`HeroService: fetched hero id=${idd}`);
  //   return of(PRINCE.find(princes => princes.id === idd));
  // }
 
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Artiste } from '../../classes/artistes';

@Injectable()
export class ArtisteService {

  private readonly url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}


  public getArtistes(): Observable<Artiste> {
    return this.http.get<Artiste>(this.url + '/artistes');
  }

}

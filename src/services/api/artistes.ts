import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArtisteService {

  private readonly url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}


  public getArtistes(): Observable<Response> {
    return this.http.get(this.url + '/artistes');
  }

}

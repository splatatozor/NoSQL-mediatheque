import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Album } from '../../classes/albums';

@Injectable()
export class AlbumService {

  private readonly url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}


  public getAlbums(): Observable<Album> {
    return this.http.get<Album>(this.url + '/albums');
  }

}

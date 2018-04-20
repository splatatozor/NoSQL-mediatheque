import { Component } from '@angular/core';
import { AlbumService } from '../services/api/albums';
import {ArtisteService} from '../services/api/artistes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public albums: any;
  private albumsBak: any
  public artistes: any;
  private artistesBak: any
  protected searchValue: string;
  protected displayAlbums: Boolean = true

  constructor(public albumService: AlbumService, public artisteService: ArtisteService) {
    this.getAlbums();
    this.getArtistes();
  }

  protected search(value: string) {
    for (const i in this.albums) {
      if (this.albums[i].alb_nom.toLowerCase() === value.toLowerCase() || this.albums[i].art_nom.toLowerCase() === value.toLowerCase()) {
        const album = this.albums[i]
        console.log(album)
        this.albums = []
        this.albums.push(album)
        return;
      }
    }
  }

  protected valueChange(value) {
    if (value === '') {
      this.albums = this.albumsBak;
      return;
    }
    this.search(value);
  }

  protected getAlbums() {
    this.albumService.getAlbums().subscribe(res => {
      this.albums = res;
      this.albumsBak = res;
    });
  }

  protected getArtistes() {
    this.artisteService.getArtistes().subscribe(res => {
      this.artistes = res;
      this.artistesBak = res;
      console.log(this.artistes)
    });
  }

  protected filterAlbumsByPrice() {
    const byPrice = this.albums.slice(0);
    byPrice.sort(function(a, b) {
      return a.alb_prix - b.alb_prix;
    });
    this.albums = byPrice;
  }

  protected filterAlbumsByAnnee() {
    const byAnnee = this.albums.slice(0);
    byAnnee.sort(function(a, b) {
      return a.alb_annee - b.alb_annee;
    });
    this.albums = byAnnee;
  }

  protected filterAlbumsByTitle() {
    const byName = this.albums.slice(0);
    byName.sort(function(a, b) {
      const x = a.alb_nom.toLowerCase();
      const y = b.alb_nom.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    this.albums = byName;
  }

  protected toggleCards() {
    this.displayAlbums = !this.displayAlbums;
  }
}

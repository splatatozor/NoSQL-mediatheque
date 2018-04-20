import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { ArtisteCardComponent } from './artiste-card/artiste-card.component';
import { Album } from '../classes/albums';
import { AlbumService } from '../services/api/albums';
import { ArtisteService } from '../services/api/artistes';

@NgModule({
  declarations: [
    AppComponent,
    AlbumCardComponent,
    ArtisteCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [Album, AlbumService, ArtisteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

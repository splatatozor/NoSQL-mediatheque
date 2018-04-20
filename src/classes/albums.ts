import { Injectable } from '@angular/core';


@Injectable()
export class Album {
  alb_nom: String = '';
  alb_annee: Number;
  alb_prix: Number;
  alb_picture: String = '';
  art_nom: String = '';
  art_typ: String = '';
  art_picture: String = '';
  gen_libelle: String = '';
  pay_libelle: String = '';

  constructor() {}

}

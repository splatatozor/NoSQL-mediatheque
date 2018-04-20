import { Injectable } from '@angular/core';


@Injectable()
export class Artiste {
  art_nom: String = '';
  art_typ: String = '';
  art_picture: String = '';
  art_description: String = '';
  gen_libelle: String = '';
  pay_libelle: String = '';

  constructor() {}

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-artiste-card',
  templateUrl: './artiste-card.component.html',
  styleUrls: ['./artiste-card.component.css']
})
export class ArtisteCardComponent implements OnInit {
  @Input() private artistes: any;

  constructor() {
  }

  ngOnInit() {
  }

  protected convertLabelToString(label: string): String {
    if (label === 'S') {
      return 'Single';
    }
    return 'Groupe';
  }
}

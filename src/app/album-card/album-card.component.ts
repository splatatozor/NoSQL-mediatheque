import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
  @Input() protected albums: any;
  constructor() {}

  ngOnInit() {}

  protected convertLabelToString(label: string): String {
    if (label === 'S') {
      return 'Single';
    }
    return 'Groupe';
  }
}

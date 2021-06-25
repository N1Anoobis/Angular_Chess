import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss'],
})
export class PieceComponent implements OnInit {
  @Input() piece: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.piece ? this.piece.type : null);
  }

  display() {
    this.piece ? this.piece.type : '';
  }
}

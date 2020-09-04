import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-hash',
  templateUrl: './color-hash.component.html',
  styleUrls: ['./color-hash.component.css']
})
export class ColorHashComponent implements OnInit {

  background = '#00e067';
  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    this.background = value;
  }

}

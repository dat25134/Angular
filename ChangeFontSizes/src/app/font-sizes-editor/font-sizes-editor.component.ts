import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-sizes-editor',
  templateUrl: './font-sizes-editor.component.html',
  styleUrls: ['./font-sizes-editor.component.css']
})
export class FontSizesEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fontSize = 14;
  onChange(value) {
    this.fontSize = value;
  }
}

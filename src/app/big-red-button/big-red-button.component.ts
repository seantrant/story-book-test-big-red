import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-red-button',
  templateUrl: './big-red-button.component.html',
  styleUrls: ['./big-red-button.component.scss']
})
export class BigRedButtonComponent implements OnInit {
  @Input() buttonText: string = "Click"

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { nameData } from '../fakeNameData'

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {

  nameData = nameData;

  constructor() { }

  ngOnInit() {
  }

}

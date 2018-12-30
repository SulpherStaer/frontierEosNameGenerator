import { Component, OnInit } from '@angular/core';
import { RandomNameSelectorService } from '../random-name-selector.service'

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {

  nameData$: any;
  
  constructor(private randomNameService: RandomNameSelectorService) { }

  ngOnInit() {
    this.randomNameService.getNameDataFromService().subscribe(res => {
      this.nameData$ = res;
    });
  }

}

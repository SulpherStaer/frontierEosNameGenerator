import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GetFileWithHttpRequestService } from '../get-file-with-http-request.service'
import { RandomNameSelectorService } from '../random-name-selector.service'

import { factionData } from '../fakeFactionsList'

@Component({
  selector: 'app-input-selector',
  templateUrl: './input-selector.component.html',
  styleUrls: ['./input-selector.component.css']
})
export class InputSelectorComponent implements OnInit {

  factionData = factionData;
  
  inputForm = new FormGroup({
    quantity: new FormControl(1),
    faction: new FormControl('Aquila')
  });
  
  constructor(private randomNameSelectorService: RandomNameSelectorService) { }

  ngOnInit() {
  }
  
  public onSubmit(): void {
    this.randomNameSelectorService.generateButtonPressed(this.inputForm.value);
  }
}

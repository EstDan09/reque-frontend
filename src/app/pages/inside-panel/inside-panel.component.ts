import { Component } from '@angular/core';

@Component({
  selector: 'app-inside-panel',
  templateUrl: './inside-panel.component.html',
  styleUrls: ['./inside-panel.component.scss']
})
export class InsidePanelComponent {

  currentNumber: number = 0;

  updateNumber(newNumber: number): void {
    this.currentNumber = newNumber;
  }

}

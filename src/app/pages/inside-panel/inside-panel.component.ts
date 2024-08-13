import { Component } from '@angular/core';

@Component({
  selector: 'app-inside-panel',
  templateUrl: './inside-panel.component.html',
  styleUrls: ['./inside-panel.component.scss']
})
export class InsidePanelComponent {

  currentNumber: number = 0;

  phoneNumber: string = '';

  updateNumber(newNumber: number): void {
    this.currentNumber = newNumber;
  }

  pressKey(number: string): void {
    this.phoneNumber += number;
  }

  clear(): void {
    this.phoneNumber = '';
  }

}

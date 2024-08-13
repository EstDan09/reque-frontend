import { Component } from '@angular/core';

@Component({
  selector: 'app-outside-panel',
  templateUrl: './outside-panel.component.html',
  styleUrls: ['./outside-panel.component.scss']
})
export class OutsidePanelComponent {
  CURRENT_FLOOR = 0;

  maxFloor = 10;
  floor = Math.floor(Math.random() * this.maxFloor);
  isElevatorMoving = false;
  isElevatorError = false;

  moveElevator() {
      
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsidePanelComponent } from './pages/inside-panel/inside-panel.component';
import { OutsidePanelComponent } from './pages/outside-panel/outside-panel.component';

const routes: Routes = [

  {
    path: 'inner',
    component: InsidePanelComponent
  },
  {
    path: 'outer',
    component: OutsidePanelComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

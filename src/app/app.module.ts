import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutsidePanelComponent } from './pages/outside-panel/outside-panel.component';
import { InsidePanelComponent } from './pages/inside-panel/inside-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    OutsidePanelComponent,
    InsidePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

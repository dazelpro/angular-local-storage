import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; //panggil library form module angular

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //tambahkan form module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

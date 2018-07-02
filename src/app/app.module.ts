import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DetailComponent} from './detail/detail.component';
import {AppRoutingModule} from './app-routing.module';
import {ListComponent} from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

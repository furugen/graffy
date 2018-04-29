import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { IgniteUIModule } from 'igniteui-angular-wrappers';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,

    IgniteUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

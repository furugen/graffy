import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from ".//app-routing.module";

import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from "./app.component";
import { TopComponent } from "./top/top.component";
import { SettingComponent } from "./setting/setting.component";
import { SamplesComponent } from "./samples/samples.component";

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    SettingComponent,
    SamplesComponent
  ],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

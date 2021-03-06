import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { TopComponent } from "./top/top.component";
import { SettingComponent } from "./setting/setting.component";

const routes: Routes = [
  { path: "", component: TopComponent },
  { path: "setting", component: SettingComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: []
})
export class AppRoutingModule {}

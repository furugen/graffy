import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { IgxInputGroupModule, IgxButtonModule, IgxGridModule, IgxRadioModule } from "igniteui-angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxGridModule,
    IgxRadioModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxGridModule,
    IgxRadioModule,
    FormsModule
  ],
  declarations: [HeaderComponent, FooterComponent]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        "CoreModule has already been loaded. Import Core modules in the AppModule only."
      );
    }
  }
}

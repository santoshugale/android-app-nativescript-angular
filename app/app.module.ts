import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes } from "./app.routing";
// import { IfAndroidDirective, IfIosDirective } from "./shared/if-platform.directive";
import { LoginComponent } from "./pages/login/login.component";
import { FullPageComponent } from "./pages/full-page/full-page.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: 
  [
    AppComponent,
    //FullPageComponent,
    LoginComponent,
    // IfAndroidDirective,
    // IfIosDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
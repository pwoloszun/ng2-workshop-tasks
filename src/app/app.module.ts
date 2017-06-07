import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from "./app-routing.module";
import { LayoutModule } from "./layout/layout.module";
import { CoreModule } from "./core/core.module";
import { UsersModule } from "./users/users.module";
import { RealEstatesModule } from "./real-estates/real-estates.module";

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { SharedModule } from "./shared/shared.module";
import { HelloWorldComponent } from "./home/hello-world/hello-world.component";
import { ContactModule } from "./contact/contact.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    // core
    CoreModule,
    SharedModule,

    ContactModule,
    // routing IMPORTANT: order matters!
    LayoutModule,
    RealEstatesModule,
    UsersModule,
    AppRoutingModule,
  ],
  declarations: [
    HomeComponent,
    HelloWorldComponent,
    AboutComponent,
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

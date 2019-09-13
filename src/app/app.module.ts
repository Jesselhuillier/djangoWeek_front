import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardChatComponent } from "./dashboard-chat/dashboard-chat.component";
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, DashboardChatComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

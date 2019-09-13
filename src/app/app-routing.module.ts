import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardChatComponent } from "./dashboard-chat/dashboard-chat.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "chats",
    component: DashboardChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

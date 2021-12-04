import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DevelopmentComponent } from "./development/development.component";
import { InnovationComponent } from "./innovation/innovation.component";
import { WorkingComponent } from "./working/working.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
  },
  {
    path: "how-it-works",
    component: WorkingComponent,
  },
  {
    path: "innovation",
    component: InnovationComponent,
  },
  {
    path: "development",
    component: DevelopmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

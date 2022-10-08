import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SwimmersComponent } from './swimmers/swimmers.component';

const routes: Routes = [
  { path: '', redirectTo:'main', pathMatch:'full'},
  { path: 'main', component: MainComponent },
  { path: 'swimmers', component: SwimmersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

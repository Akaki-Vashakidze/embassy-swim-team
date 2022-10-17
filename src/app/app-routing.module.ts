import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SwimmersComponent } from './swimmers/swimmers.component';

const routes: Routes = [
  { path: '', redirectTo:'main', pathMatch:'full'},
  { path: 'main', component: MainComponent },
  { path: 'swimmers', component: SwimmersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signUp', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { MessagesComponent } from './components/pages/messages/messages.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

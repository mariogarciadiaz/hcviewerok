import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { AssistanceDetailComponent } from './components/assistance-detail/assistance-detail.component';
import { AssistanceListComponent } from './components/assistance-list/assistance-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/assistance-list', pathMatch: 'full' },
  { path: 'assistance-list', component: AssistanceListComponent },
  { path: 'detail/:id', component: AssistanceDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

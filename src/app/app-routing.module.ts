import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowseComponent } from './components/employee/browse/browse.component';
import { AddComponent } from './components/employee/add/add.component';
import { EditComponent } from './components/employee/edit/edit.component';

const routes: Routes = [
     { path: '' ,redirectTo: 'employees', pathMatch: 'full' },
     { path: 'employees', component: BrowseComponent},
     { path:'add', component: AddComponent },
     { path: 'edit/:id', component:EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsTableComponent } from './bills-table/bills-table.component';
import { PartnersComponent } from './partners/partners.component';
import { JobsComponent } from './jobs/jobs.component';


const routes: Routes = [
  { path: 'bills', component: BillsTableComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'jobs', component: JobsComponent },
  { path: '', redirectTo: '/bills', pathMatch: 'full' }, // Redirect to bills by default
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

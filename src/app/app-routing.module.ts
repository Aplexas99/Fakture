import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsTableComponent } from './bills-table/bills-table.component';
import { PartnersComponent } from './partners/partners.component';
import { JobsComponent } from './jobs/jobs.component';
import { BillDetailsComponent } from './bills-table/bill-details/bill-details.component';


const routes: Routes = [
  { path: 'bills', component: BillsTableComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'bills/:id', component: BillDetailsComponent},
  { path: '', redirectTo: '/bills', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

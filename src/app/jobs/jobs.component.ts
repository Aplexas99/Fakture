import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Job } from '../models/job.model';
import { JobsService } from './service/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  dataSource!: MatTableDataSource<Job>;
  displayedColumns: string[] = ['id', 'name', 'foreign-exchange-price', 'bam-price'];

  constructor(
    public jobService: JobsService, 
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loadBills();
  }

  loadBills() {
    this.jobService.getJobs().subscribe((result) => {
      this.dataSource = new MatTableDataSource(result.jobs);
    });
  }

}

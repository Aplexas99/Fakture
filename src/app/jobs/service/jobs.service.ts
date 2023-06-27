import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Job } from 'src/app/models/job.model';


@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private apiUrl = 'https://localhost:7069/api/';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl+'Job').pipe(
      map((result: any[]) => {
        let jobs = result.map(job => new Job(job));
        return {
          jobs: jobs,
        };
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BillHeader } from 'src/app/models/billHeader.model';


@Injectable({
  providedIn: 'root'
})
export class BillsService {
  private apiUrl = 'https://localhost:7069/api/';

  constructor(private http: HttpClient) {}

  getBillHeaders(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl+'BillHeader').pipe(
      map((result: any[]) => {
        let billHeaders: BillHeader[] = result.map(bill => new BillHeader(bill));
        return {
          billHeaders: billHeaders,
        };
      })
    );
  }
}

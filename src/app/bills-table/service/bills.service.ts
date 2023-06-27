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

  getBillHeader(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl+'BillHeader/'+id).pipe(
      map((result: any) => {
        let billHeader: BillHeader = new BillHeader(result);
        return billHeader;
      })
    );
  }

  updateBillHeader(billHeader: BillHeader): Observable<any> {
     let billHeaderPayload:BillHeader = {
      id: billHeader.id,
      billNumber: billHeader.billNumber,
      documentDate: billHeader.documentDate,
      issueDate: billHeader.issueDate,
      deliveryDate: billHeader.deliveryDate,
      dueDate: billHeader.dueDate,
      partnerId: billHeader.partnerId,
      description: billHeader.description,
      note: billHeader.note,
      totalAmount: billHeader.totalAmount,
      placeOfIssue: billHeader.placeOfIssue,
      fiscalNumber: billHeader.fiscalNumber,
      status: billHeader.status,
      rate: billHeader.rate,
    };
      return this.http.put<BillHeader>(this.apiUrl+'BillHeader/'+billHeader.id, billHeaderPayload).pipe(
      map((result: any) => {
        return result;
      })
    );
  }
}

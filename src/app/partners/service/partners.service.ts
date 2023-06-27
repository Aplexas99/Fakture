import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Partner } from 'src/app/models/partner.model';


@Injectable({
  providedIn: 'root'
})
export class PartnersService {
  private apiUrl = 'https://localhost:7069/api/';

  constructor(private http: HttpClient) {}

  getPartners(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl+'Partner').pipe(
      map((result: any[]) => {
        let partners: Partner[] = result.map(partner => new Partner(partner));
        return {
          partners: partners,
        };
      })
    );
  }
}

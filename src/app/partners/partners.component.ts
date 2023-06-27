import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Partner } from '../models/partner.model';
import { PartnersService } from './service/partners.service';


@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {

  dataSource!: MatTableDataSource<Partner>;
  displayedColumns: string[] = ['name', 'address', 'city', 'postalCode', 'mb', 'type', 'country', 'actions'];

  constructor(
    public partnersService: PartnersService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loadPartners();
  }

  loadPartners() {
    this.partnersService.getPartners().subscribe((result) => {
      this.dataSource = new MatTableDataSource(result.partners);
    });
  }

  edit(partner : Partner) {
    
  }

  delete(partner : Partner) {

  }
  
}

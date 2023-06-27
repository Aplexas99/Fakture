import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillsService } from '../service/bills.service';
import { BillHeader } from 'src/app/models/billHeader.model';
import { DatePipe } from '@angular/common';
import { Partner } from 'src/app/models/partner.model';
import { PartnersService } from 'src/app/partners/service/partners.service';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})

export class BillDetailsComponent implements OnInit {
  billHeader: BillHeader = new BillHeader();
  dateFormat = 'dd/MM/yyyy';

  partners: Partner[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public billsService: BillsService,
    public partnersService: PartnersService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; 
      this.loadBillHeader(id);
      this.loadPartners();
    });
  }

  loadBillHeader(id: number): void {
    this.billsService.getBillHeader(id).subscribe((result) => {
      console.log(result);
      this.billHeader = result;
      this.billHeader.deliveryDate = result.deliveryDate ? new Date(result.deliveryDate) : new Date();
      this.billHeader.documentDate = result.documentDate ? new Date(result.documentDate) : new Date();
      this.billHeader.dueDate = result.dueDate ? new Date(result.dueDate) : new Date();
      this.billHeader.issueDate = result.issueDate ? new Date(result.issueDate) : new Date();
    });
  }

  saveBill(): void {
    this.billsService.updateBillHeader(this.billHeader).subscribe(() => {
    });
  }

  loadPartners(): void {
    this.partnersService.getPartners().subscribe((result) => {
      this.partners = result.partners;
    });
  }
  
  goBack(): void {
    this.router.navigate(['/bills']);
  }
}

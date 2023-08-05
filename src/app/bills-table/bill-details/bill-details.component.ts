import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillsService } from '../service/bills.service';
import { BillHeader } from 'src/app/models/billHeader.model';
import { Partner } from 'src/app/models/partner.model';
import { PartnersService } from 'src/app/partners/service/partners.service';
import { BillBody } from 'src/app/models/billBody.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})

export class BillDetailsComponent implements OnInit {
  billHeader: BillHeader = new BillHeader();
  dateFormat = 'dd/MM/yyyy';

  partners: Partner[] = [];

  billBodies: BillBody[] = [];
  billBodiesSource!: MatTableDataSource<BillBody>;

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
      this.loadBillBodies(id);
    });
  }

  loadBillHeader(id: number): void {
    this.billsService.getBillHeader(id).subscribe((result) => {
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
  
  loadBillBodies(id: number): void {
    this.billsService.getBillBodies(id).subscribe((result) => {
      this.billBodies = result.billBodies;
      this.billBodiesSource = new MatTableDataSource(result.billBodies);
      this.calculateBillBodyValues();
    });

  }

calculateBillBodyValues(): void {
  for (let i = 0; i < this.billBodies.length; i++) {
    const billBody = this.billBodies[i];
    this.updateBillBodyValues(billBody);
  }
}

  addBillBody(): void {
    this.billsService.addBillBody(this.billHeader.id!).subscribe((result) => {
      result = new BillBody(result);
      this.billBodies.push(result);
      this.billBodiesSource = new MatTableDataSource(this.billBodies);
      this.calculateBillBodyValues();
    }
    );
  }

  deleteBillBody(billBody: any): void {
    this.billsService.deleteBillBody(billBody.id).subscribe(() => {
      this.billBodies = this.billBodies.filter(b => b.id !== billBody.id);
      this.billBodiesSource = new MatTableDataSource(this.billBodies);
    });
  }


  goBack(): void {
    this.router.navigate(['/bills']);
  }

  updateBillBodyValues(billBody: BillBody, bamChange: boolean = false): void {
    if(bamChange){
      this.updateForeignExchangePrice(billBody);
    } 
    else{
      this.updateBamPrice(billBody);
    }
    this.updateDiscountValue(billBody);
    this.updateTotalPrice(billBody);
  }

  updateBamPrice(billBody: BillBody): void {
    const foreignExchangePrice = billBody.foreignExchangePrice || 0;
    const rate = this.billHeader.rate || 1;
    if(foreignExchangePrice > 0){
      billBody.bamPrice = foreignExchangePrice * rate;
      billBody.bamPrice = +billBody.bamPrice.toFixed(3);
    }
  }

  updateForeignExchangePrice(billBody: BillBody): void {
    const bamPrice = billBody.bamPrice || 0;
    const rate = this.billHeader.rate || 1;
    if(bamPrice > 0){
      billBody.foreignExchangePrice = bamPrice / rate;
      billBody.foreignExchangePrice = +billBody.foreignExchangePrice.toFixed(3);
    }
   }

   updateDiscountValue(billBody: BillBody): void {
    const invoiceValue = billBody.invoiceValue || 0;
    const discount  = billBody.discount || 0;
      billBody.discountAmount = (invoiceValue * discount / 100).toFixed(3);
   }

   updateTotalPrice(billBody: BillBody): void {
    const baseline = billBody.baseline || 0;
    const taxAmount = billBody.taxAmount || 0;
    billBody.totalPrice = +(baseline + taxAmount).toFixed(3);
   }
}

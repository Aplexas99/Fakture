import { Component } from '@angular/core';
import { BillsService } from './service/bills.service';
import { MatTableDataSource } from '@angular/material/table';
import { BillHeader } from '../models/billHeader.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bills-table',
  templateUrl: './bills-table.component.html',
  styleUrls: ['./bills-table.component.css']
})
export class BillsTableComponent {

  dataSource!: MatTableDataSource<BillHeader>;
  displayedColumns: string[] = ['bill-number', 'document-date', 'delivery-date', 'due-date', 'description', 'place-of-issue', 'issue-date', 'fiscal-number', 'rate' ,'partner-id','actions'];
  dateFormat = 'dd.MM.yyyy';
  constructor(
    public billsService: BillsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loadBills();
  }

  loadBills() {
    this.billsService.getBillHeaders().subscribe((result) => {
      this.dataSource = new MatTableDataSource(result.billHeaders);
    });
  }

  edit(billHeader: BillHeader) {
    const id = billHeader.id;
    this.router.navigateByUrl(`bills/${id}`);
  }

  delete(billHeader : BillHeader) {
  }
}

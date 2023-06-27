import { Component } from '@angular/core';
import { BillsService } from './service/bills.service';
import { MatTableDataSource } from '@angular/material/table';
import { BillHeader } from '../models/billHeader.model';

@Component({
  selector: 'app-bills-table',
  templateUrl: './bills-table.component.html',
  styleUrls: ['./bills-table.component.css']
})
export class BillsTableComponent {

  billsDataSource!: MatTableDataSource<BillHeader>;
  displayedColumns: string[] = ['id', 'bill-number', 'partner-id', 'status', 'total-amount'];

  constructor(
    public billsService: BillsService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loadBills();
  }

  loadBills() {
    this.billsService.getBillHeaders().subscribe((result) => {
      this.billsDataSource = new MatTableDataSource(result.billHeaders);
    });
  }

}

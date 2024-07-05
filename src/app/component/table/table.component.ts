import { Component } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { Customer } from '../../Model/Customer';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  customerList !: Customer[];
  dataSource: any;
  displayedColumns: string[] = ["code", "name", "email", "phone", "status", "action"];

  constructor(private service: MasterService) {
    service.GetCustomer().subscribe(
      res => {
        this.customerList = res;
        this.dataSource = new MatTableDataSource<Customer>(this.customerList);
      })
  }

}

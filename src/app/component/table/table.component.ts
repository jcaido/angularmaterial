import { Component, ViewChild } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { Customer } from '../../Model/Customer';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  customerList !: Customer[];
  dataSource: any;
  displayedColumns: string[] = ["code", "name", "email", "phone", "status", "action"];


  listCustomer :Customer[] = [
    {
      code: "1",
      name: "Janesh",
      email: "janesh@in.com",
      phone: "a989787867",
      active: "Active"
    },
    {
      code: "2",
      name: "Bishoi",
      email: "bishoi@in.com",
      phone: "8989787867",
      active: "In Active"
    },
    {
      code: "3",
      name: "surya",
      email: "surya@in.com",
      phone: "8989787867",
      active: "In Active"
    },
    {
      code: "4",
      name: "kamlesh",
      email: "kamlesh@in.com",
      phone: "8989787867",
      active: "In Active"
    },
    {
      code: "5",
      name: "Kriti shetty",
      email: "kriti@in.com",
      phone: "8989787867",
      active: "Active"
    },
    {
      code: "6",
      name: "Tammanah",
      email: "tam@in.com",
      phone: "8989787867",
      active: ""
    },
    {
      code: "7",
      name: "Priyanka Mohan",
      email: "priya@in.com",
      phone: "8989787867",
      active: "Active"
    },
    {
      code: "8",
      name: "rashmika",
      email: "rashmika@in.com",
      phone: "8989787867",
      active: "Active"
    },
    {
      code: "9",
      name: "Trisha",
      email: "trisha@in.com",
      phone: "8989787867",
      active: "Active"
    },
    {
      code: "10",
      name: "samanta",
      email: "samantha@in.com",
      phone: "8989787867",
      active: "Active"
    }
  ]

  data: any = new MatTableDataSource<Customer>(this.listCustomer);
  @ViewChild(MatPaginator) paginator! :MatPaginator;
  @ViewChild(MatSort) sort! :MatSort;

  //constructor(private service :MasterService) {
  //  service.GetCustomer().subscribe(
  //    res => {
  //      this.customerList = res;
  //      this.dataSource = new MatTableDataSource<Customer>(this.customerList);
  //    })
  //}

  constructor(){}

  ngAfterViewInit() {
    this.data.paginator = this.paginator;
    this.data.sort = this.sort;
  }

}

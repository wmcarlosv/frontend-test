import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  title:string = "Nuevo Empleado";
  countries:any = [];
  constructor(private es: EmployeeService) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries():void{
    this.es.getAllCountries().subscribe((data:any)=>{
      this.countries = data;
    });
  }

}

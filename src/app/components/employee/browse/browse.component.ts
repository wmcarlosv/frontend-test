import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  title:String = "Empleados";
  
  constructor() { }

  ngOnInit(): void {
    
  }

}

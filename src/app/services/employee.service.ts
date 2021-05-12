import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const urlApiCountries = "https://restcountries.eu/rest/v2/all";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(private http: HttpClient) { }

  getAllCountries():any{
    return this.http.get(urlApiCountries);
  }
}

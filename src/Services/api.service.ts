import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //Drivers
  fetchDrivers(): Observable<any> {
    return this.HTTP.get('http://localhost:5213/api/Driver/all');
  }
  addDriver(driverData: any): Observable<any> {
    return this.HTTP.post(`http://localhost:5213/api/Driver/add`, driverData);
  }
  updateDriver(id: string, driverData: any): Observable<any> {
    return this.HTTP.put(
      `http://localhost:5213/api/Driver/Update?driverId=${id}`,
      driverData
    );
  }
  deleteDriver(id: string): Observable<any> {
    return this.HTTP.delete(
      `http://localhost:5213/api/Driver/Delete?driverId=${id}`
    );
  }
  //Drivers

  constructor(private HTTP: HttpClient) {}
}

import { Component } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [CommonModule, DriversComponent, RouterOutlet],
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.css',
})
export class DriversComponent {
  Drivers: any[] = [];
  constructor(private router: Router, private api: ApiService) {
    api.fetchDrivers().subscribe({
      next: (response) => {
        this.Drivers = response.gvar.dicOfDT.Drivers;
        console.log(response);
      },
      error: (error) => {
        console.log('Hi', error);
      },
    });
  }

  updateDriver(driver: any) {
    console.log(driver);
    this.router.navigate(['/drivers/update-driver', driver.DriverID], {
      state: {
        driverData: {
          driverName: driver.DriverName,
          phoneNumber: driver.PhoneNumber,
        },
      },
    });
  }
  deleteDriver(driverId: string) {
    console.log(driverId);
    this.api.deleteDriver(driverId).subscribe({
      next: (response) => {
        console.log(response);
        this.Drivers = this.Drivers.filter(
          (item) => item.DriverID !== driverId
        );
        console.log(this.Drivers);
      },
      error: (error) => {
        console.log('Hi', error);
      },
    });
  }
}

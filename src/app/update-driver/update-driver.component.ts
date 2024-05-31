import { Component } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { AddDriverComponent } from '../add-driver/add-driver.component';

@Component({
  selector: 'app-update-driver',
  standalone: true,
  imports: [ReactiveFormsModule, AddDriverComponent, RouterOutlet],
  templateUrl: './update-driver.component.html',
  styleUrl: './update-driver.component.css',
})
export class UpdateDriverComponent {
  constructor(private api: ApiService, private route: ActivatedRoute) {}

  driverForm = new FormGroup({
    driverName: new FormControl(''),
    phoneNumber: new FormControl(''),
  });
  driverId: any;
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.driverId = params.get('id');
    });

    const driverData = history.state.driverData;

    if (driverData) {
      console.log(driverData, 'id=', this.driverId);
      this.driverForm.patchValue({
        driverName: driverData.driverName,
        phoneNumber: driverData.phoneNumber,
      });
    }
  }

  onSubmit() {
    this.api.updateDriver(this.driverId, this.driverForm.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log('Hi', error);
      },
    });
  }
}

import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-add-driver',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-driver.component.html',
  styleUrl: './add-driver.component.css',
})
export class AddDriverComponent {
  constructor(private api: ApiService) {}

  driverForm = new FormGroup({
    driverName: new FormControl(''),
    phoneNumber: new FormControl(''),
  });
  onSubmit() {
    this.api.addDriver(this.driverForm.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log('Hi', error);
      },
    });
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './drivers/drivers.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';

export const routes: Routes = [
  {
    path: 'drivers',
    component: DriversComponent,
  },
  {
    path: 'drivers/add-driver',
    component: AddDriverComponent,
  },
  {
    path: 'drivers/update-driver/:id',
    component: UpdateDriverComponent,
  },
];

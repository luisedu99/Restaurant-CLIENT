import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
imports: [SharedModule,
  ReactiveFormsModule,
  HttpClientModule,
  CommonModule
],
declarations: [ReservationComponent],
exports: [ReservationComponent]
})

export class ReservationModule{}

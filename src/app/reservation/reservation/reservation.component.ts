import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservationsService } from '../../services/reservations.service';
declare var $: any;
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  @Input() items = [];
  @Input() key = null;
  datosbyCliente = [];

  constructor(private reservationsServices:ReservationsService) { }


  reservationForm = new FormGroup({
    idcliente: new FormControl('', Validators.required),
    nombres : new FormControl('', Validators.required),
    apellidos : new FormControl('', Validators.required),
    telefono : new FormControl('', Validators.required),
    correo : new FormControl('', Validators.required),
    numeropersonas : new FormControl('', Validators.required),
    fecha : new FormControl('', Validators.required),
    hora : new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.reservationsServices.getReservationByIdClient(3).subscribe(datosbyCliente =>{
      this.datosbyCliente = datosbyCliente as any;
      //console.log("Datos cliente ", datosbyCliente);
    });


  }

  saveReservation(data){
    //console.log(data.value);
    this.reservationsServices.addReservation(data.value).subscribe();
  }

  deleteReservation(id){
    this.reservationsServices.deleteReservation(id).subscribe();
  }

}

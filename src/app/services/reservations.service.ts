import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ReservationsService {

  constructor(private HttpClient:HttpClient) { }

  getReservations(){
    return this.HttpClient.get('http://localhost:3000/api/reservaciones');
  }

  getReservationByIdClient(idclient){
    return this.HttpClient.get('http://localhost:3000/api/reservaciones/' + idclient);
  }

  addReservation(reservation){
    return this.HttpClient.post('http://localhost:3000/api/reservaciones', reservation);
  }

  deleteReservation(id){
    return this.HttpClient.delete('http://localhost:3000/api/reservaciones/' + id);
  }

}

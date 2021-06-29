import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Ticket} from './ticket'

@Injectable({
  providedIn: 'root'
})
export class TicketService {

 url:string="http://localhost:3000/";
  constructor(private servicio:HttpClient) { }
  GETTICKET():Observable<Ticket[]>{
    return this.servicio.get<Ticket[]>(`${this.url}`+'ticket');
  }
  POSTTICKET(ticket:Ticket){
    this.servicio.post<Ticket>(`${this.url}`+'ticket',ticket).subscribe(
      (resp) => console.log(resp),
      (err) => console.log(err)
    );
  }
 
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AdressService {

  constructor(private http:HttpClient) { }

  getRegiones() {
    return this.http.get(`${environment.API_URL}regiones`); 
  }

  getComunas(codigo:string) {
    return this.http.get(`${environment.API_URL}regiones/${codigo}/comunas`);
  }
}
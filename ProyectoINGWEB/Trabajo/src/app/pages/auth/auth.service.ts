import { UserResponse, User } from '@shared/models/user.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from '@env/environment';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt'
import { Router } from '@angular/router';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorageService;
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient, private router: Router) {
    this.localStorageService = localStorage;
    this.checkToken();
  }

  get isLogged():Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  login(authData:User): Observable<UserResponse | void>{

    return this.http
      .post<UserResponse>(`${environment.API_URL}/auth/login`, authData)
      .pipe(
        map( (res:UserResponse) => {
          console.log('Res-> ', res)
          this.saveToken(res.token);
          this.loggedIn.next(true);
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  logout(): void{
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.router.navigate(['']);
    //set userIsLogged = false
  }

  private checkToken(): void{
    const userToken = localStorage.getItem('token') || null;
    if(userToken){
      const isExired = helper.isTokenExpired(userToken);
      console.log('isExpires ->', isExired)
      if (isExired){
        this.logout();
      }
      else{
        this.loggedIn.next(true);
      }
    }

    //

    // set userisLogged = isExpired
  }

  saveToken(token:string): void{
    localStorage.setItem('token', token);

    //set userIsLogged

  }

  private handlerError(err: { message: any; }): Observable<never>{
    let errorMessage = 'An errror occured retrienving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  register(user:User) {
    return this.http.post(`${environment.API_URL}auth/register`, user);
  }

  eraseToken() {
    this.localStorageService.removeItem('token');
  }
}

import { Subscription } from 'rxjs';
import { AuthService } from './../../../pages/auth/auth.service';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription;
  isAdmin = false;
  isLogged = false;

  //test
  //admin:any = 'admin';

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private authSvc:AuthService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.authSvc.isLogged.subscribe((res) => (this.isLogged = res))
    );

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }

  onLogout(): void {
    this.authSvc.logout();
  }

  // //test
  // change(): void {
  //   if (!this.isAdmin){
  //     this.isAdmin = this.admin;
  //   }
  //   else{
  //     this.isAdmin = null;
  //   }
  // }

}

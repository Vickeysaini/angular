import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Email, User } from 'src/app/auth/models';
import { AuthService } from 'src/app/auth/services';
import { routes } from '../../../../consts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isMenuOpened!: boolean;
  @Output() isShowSidebar = new EventEmitter<boolean>();
  @Output() userInfo$!: any;
  public routers: typeof routes = routes;
  token: string | null;

  constructor(
    private userService: AuthService,
    private router: Router,
  ) {
    this.token = sessionStorage.getItem('auth');
  }
 ngOnInit(): void {
  this.userInfo$ = this.userService.setCurrentUser(this.token);
 }
  public getUserInfo(){
      this.userService.getUser(this.userInfo$._id)
        .pipe()
        .subscribe(
          (response) => {
            if (response.status) {
              this.router.navigate(['/']);
              sessionStorage.setItem('auth', response.data)
            }
          },
          (err) => {
            if (err) {
              console.log(err.message);
            }
          }
        );
  }
  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;

    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public signOut(): void {
    this.router.navigate([this.routers.LOGIN]);
    this.userService.signOut();
  }

}

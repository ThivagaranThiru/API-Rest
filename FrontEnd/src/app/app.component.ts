import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string;
  private authority: string;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      if (this.roles === 'ROLE_ADMIN') {
        this.authority = 'admin';
        return false;
      } else if (this.roles === 'ROLE_USER') {
        this.authority = 'pm';
        return false;
      }
      this.tokenStorage.saveAuthorities('ROLE_ADMIN')
      this.authority = 'user';
      return true;
    }
  }
}

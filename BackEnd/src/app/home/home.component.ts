import { Component, OnInit } from '@angular/core';
import { SaveTokenService } from '../auth/save-token.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private authService: AuthService, private token: SaveTokenService) { }

  ngOnInit() {
    this.getInformation();
  }

  getInformation() {
    this.authService.connectAuth().subscribe(
        data => {
          this.token.saveAuthorities(data.userRole);
          this.token.saveId(data.idUser);
          console.log(data.userRole);
        },
        error => {
          console.log(error);
          console.log(error.error.message);
        }
    );
  }
}

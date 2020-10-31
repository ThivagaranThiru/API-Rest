import { Component, OnInit } from '@angular/core';
import { AdresseService } from '../services/adresse.service';
import { Adresse } from '../model/adresse-model';
import { SaveTokenService } from '../auth/save-token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {
  public roles: string;
  public authority: string;
  term: any;
  public userId: number;
  adresses: Adresse[];

  constructor(private adresseService: AdresseService, private token: SaveTokenService, private router: Router) { }

  ngOnInit() {
     if (!this.token.getToken) {
      this.router.navigateByUrl('home');
      return;
    }

     this.roles = this.token.getAuthorities();
     this.userId = +this.token.getId();

     if (this.roles === '"ROLE_ADMIN"') {
        this.authority = 'admin';
      } else {
          this.authority = 'user';
      }

     this.adresseService.getAdresseBoard()
        .subscribe( data => {
          this.adresses = data;
        });
  }

  createAdresse(): void {
    this.router.navigateByUrl('addAdresse');
  }

  editAdresse(adresse: Adresse): void {
    window.localStorage.removeItem('editAdresse');
    window.localStorage.setItem('editAdresse', adresse.id.toString());
    this.router.navigateByUrl('addAdresse');
  }

  deleteAdresse(adresse: Adresse): void {
    this.adresseService.deleteAdresse(adresse.id)
      .subscribe( data => {
        console.log(data);
        this.adresseService.getAdresseBoard()
        // tslint:disable-next-line: no-shadowed-variable
        .subscribe( data => {
          this.adresses = data;
        });
         });

    this.reloadPage();
  }

  reloadPage() {
    window.location.reload();
  }
}

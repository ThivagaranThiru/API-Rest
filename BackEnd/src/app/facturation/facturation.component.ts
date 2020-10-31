import { Component, OnInit } from '@angular/core';
import { Facturation } from '../model/facturation-model';
import { Router } from '@angular/router';
import { SaveTokenService } from '../auth/save-token.service';
import { FacturationService } from '../services/facturation.service';

@Component({
  selector: 'app-facturation',
  templateUrl: './facturation.component.html',
  styleUrls: ['./facturation.component.css']
})
export class FacturationComponent implements OnInit {

  facturations: Facturation[];
  term: any;

  constructor(private facturationService: FacturationService, private token: SaveTokenService, private router: Router) { }

  ngOnInit() {

    if (!this.token.getToken) {
      this.router.navigateByUrl('home');
      return;
    }

    this.facturationService.getFacturationBoard()
      .subscribe(
        data => {
          this.facturations = data;
        }
      );
  }

  reloadPage() {
    window.location.reload();
  }

}

import { Component, OnInit } from '@angular/core';

import { PanierService } from '../services/panier.service';
import { Panier } from '../model/panier-model';
import { Router } from '@angular/router';
import { SaveTokenService } from '../auth/save-token.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  paniers: Panier[];
  term: any;

  constructor(private panierServie: PanierService, private token: SaveTokenService, private router: Router) { }

  ngOnInit() {
    if (!this.token.getToken) {
      this.router.navigateByUrl('home');
      return;
    }

    this.panierServie.getPanierBoard()
      .subscribe(data => {
        this.paniers = data;
      });
  }

  reloadPage() {
    window.location.reload();
  }

}

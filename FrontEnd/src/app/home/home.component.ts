import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service';
import { CardsStorageService } from '../auth/card-storage.service';

import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

import { ProductResponse } from '../product-response';
import { ProductService } from '../products.service';

import { BasketResponse } from '../basket-response';
import { BasketServiceService } from '../basket-service';

import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;
  products: ProductResponse[];
  searchvalue: string;
  errorCardMessage = '';
  isAddCardFailed = false;
  selectedSort  = '';
  cardNumber = 0;
  username  = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,
              private token: TokenStorageService, private router: Router, private prodService: ProductService,
              private basketService: BasketServiceService, private  cardStorage: CardsStorageService) { }

  ngOnInit() {
      this.username = this.tokenStorage.getUsername();
    this.getProductsList();
    console.log('-----------------------------efsefffdssdfsdff');
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.cardNumber = this.cardStorage.getCards().length;
  }
    // event handler for the select element's change event
    selectChangeSortHandler (event: any) {
        this.selectedSort = event.target.value;
        if (this.selectedSort === 'ASC') {
            this.sortByPriceAsc();
        }
        if (this.selectedSort === 'DESC') {
            this.sortByPriceDesc();
        }
        if (this.selectedSort === 'DEF') {
            window.location.reload();
        }
    }
  sortByPriceAsc() {
      this.products = this.products.sort(function sortNumber(a, b) {
          return a.prix - b.prix;
      });
  }

    sortByPriceDesc() {
        this.products = this.products.sort(function sortNumber(a, b) {
            return b.prix - a.prix;
        });
    }
  getProductsList() {
    this.prodService.getAllProduct().subscribe(
        data => {
          console.log(data);
          this.products = data;
        },
        error => {
          this.products = [];
          console.log(error);
          console.log(error.error.message);
        }
    );
  }

    addNewBasket(event: any) {
      console.log(event);
        const target = event.target || event.srcElement || event.currentTarget;
        const idAttr = target.attributes.id;
        const id = idAttr.nodeValue;
        console.log(id);
        console.log(this.products);
        const current = this.products.find((elt) => elt.id.toString() === id.toString());
        console.log(current);
        this.cardStorage.addCard(current);
        this.cardNumber = this.cardStorage.getCards().length;
    }

    search(searchParam: any) {
        this.prodService.searchProduct(searchParam).subscribe(
            data => {
                console.log(data);
                this.products = data;
            },
            error => {
                this.products = [];
                console.log(error);
                console.log(error.error.message);
            }
        );
    }


  getInformation() {
    this.authService.connectAuth().subscribe(
        data => {
          this.tokenStorage.saveAuthorities(data.userRole);
          console.log(data.userRole);
          console.log(data.idUser);
        },
        error => {
          console.log(error);
          console.log(error.error.message);
        }
    );
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}

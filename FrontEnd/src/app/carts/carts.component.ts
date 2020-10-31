import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service';
import { CardsStorageService } from '../auth/card-storage.service';
import { CardsPayStorageService } from '../auth/card-pay-storage.service';

import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {ProductService} from '../products.service';
import {BasketServiceService} from '../basket-service';
import {BasketInfo} from '../basket-info';
import {ProductResponse} from '../product-response';

import {UserInfoResponse} from '../user-info-response';
import {UserInfoService} from '../user-info-service';

import {AddressResponse} from '../address-response';
import {AddressService} from '../address.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  cardNumber = 0;
  info: any;
  cardsProducts: ProductResponse[];
  basketCards: BasketInfo[] = [];
  user: UserInfoResponse;
  total: number;
  username: string;
  addresses: AddressResponse[];
  currentAddressShipping: AddressResponse;

  constructor(private authService: AuthService, private token: TokenStorageService,
              private router: Router, private prodService: ProductService,
              private basketService: BasketServiceService, private  cardStorage: CardsStorageService,
              private userInfo: UserInfoService, private  payStorage: CardsPayStorageService,
              private addressService: AddressService) {
      this.total = 0.0;
      this.username = this.token.getUsername();
  }

  ngOnInit() {
    this.getInformation();
    this.getAddresses();
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    if (!this.info.token) {
      this.router.navigateByUrl('auth/login');
    }
  }
  increment(price: any, q: any): number {
    return this.total + price * q;
  }
    formatNumber = function(i) {
        return Math.round(i * 100) / 100;
    }
    getAddresses() {
      this.addressService.getMyAddresses(this.token.getUserID()).subscribe(
          data => {
              this.addresses = data;
          }, error => {
              console.log(error);
          }
      );
    }
  getInformation() {
    this.cardsProducts = this.cardStorage.getCards();
    this.userInfo.getInfo(this.token.getUserID()).subscribe(
        data => {
          this.user = data;
          console.log(this.token.getUserID())
          console.log(data);
          // load the carditem from the product
          this.cardsProducts.forEach(value => {
            this.basketCards.push(new BasketInfo(value, this.user));
          });
          this.basketCards.forEach(value => {
            this.total = this.increment(value.produit.prix, value.quantite);
            console.log(value.produit.prix, ' ', value.quantite);
          });
            this.cardNumber = this.basketCards.length;
          console.log(this.basketCards);
        },
        error => {
          console.log(error);
          console.log(error.error.message);
        }
    );
  }
  deleteCart(index: number) {
      this.cardStorage.deleteItem(this.basketCards[index].produit.id);
      this.basketCards.splice(index, 1);
      this.total = 0.0;
      this.basketCards.forEach(value => {
          this.total = this.increment(value.produit.prix, value.quantite);
      });
  }
    handleQuantity(event: any) {
        console.log(event);
        const target = event.target || event.srcElement || event.currentTarget;
        const idAttr = target.attributes.id;
        const idt = idAttr.nodeValue;
        console.log(idt);
        const sign = idt.toString().charAt(0);
        console.log(sign);
        const id = idt.toString().substring(1);
        console.log(id);
        if (sign === '-') {
            this.basketCards.forEach(value => {
                if (value.produit.id.toString() === id) {
                    console.log('OK');
                    const v = value;
                    const num = v.quantite - 1;
                    if (num >= 0) {
                        v.quantite = num;
                        this.basketCards[this.basketCards.indexOf(value)] = v;
                    }
                }
            });
        } else if (sign === '+') {
            this.basketCards.forEach(value => {
                if (value.produit.id.toString() === id) {
                    console.log('OK');
                    const v = value;
                    const num = v.quantite + 1;
                    if (num <= value.produit.stock) {
                        v.quantite = num;
                        this.basketCards[this.basketCards.indexOf(value)] = v;
                    }
                }
            });
        }
        this.total = 0.0;
        this.basketCards.forEach(value => {
            this.total = this.increment(value.produit.prix, value.quantite);
            console.log(value.produit.prix, ' ', value.quantite);
        });
    }
    onSubmit() {
      if (this.total > 0.0 || this.addresses.length === 0) {
          this.payStorage.setOrder(this.basketCards);
          this.payStorage.storeAmount(this.total);
          this.router.navigateByUrl('payment');
      }
    }
    selectAddressHandler(event: any) {
      const addressID = event.target.value.toString().charAt(0);
      this.currentAddressShipping = this.addresses.find(value =>  value.id.toString() === addressID);
      this.payStorage.storeAddress(this.currentAddressShipping);
    }
}

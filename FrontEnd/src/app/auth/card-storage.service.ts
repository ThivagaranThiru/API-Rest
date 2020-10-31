import { Injectable } from '@angular/core';

import { ProductResponse } from '../product-response';

const ITEM = 'ITEM';

@Injectable({
    providedIn: 'root'
})

export class CardsStorageService {
    private cardes: ProductResponse[] = [];
    constructor() { }

    delete() {
        this.cardes = [];
        window.sessionStorage.removeItem(ITEM);
    }

    public addCard(card: ProductResponse) {
        this.cardes.push(card)
        window.sessionStorage.removeItem(ITEM);
        window.sessionStorage.setItem(ITEM, JSON.stringify(this.cardes));
    }

    public updatecards(newcards: ProductResponse[]) {
        this.cardes = [];
        this.cardes = newcards;
        window.sessionStorage.removeItem(ITEM);
        window.sessionStorage.setItem(ITEM, JSON.stringify(this.cardes));
    }

    public deleteItem(id: number) {
        let elt;
        this.cardes.forEach(value => {
            if (value.id.toString() === id.toString()) {
                elt = value;
            }
        });
        this.cardes.splice(this.cardes.indexOf(elt), 1);
        window.sessionStorage.removeItem(ITEM);
        window.sessionStorage.setItem(ITEM, JSON.stringify(this.cardes));
    }

    public getCards(): ProductResponse[] {
        console.log(window.sessionStorage.getItem(ITEM));
        return JSON.parse(window.sessionStorage.getItem(ITEM) || '[]');
    }
}

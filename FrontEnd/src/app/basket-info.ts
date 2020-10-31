import {ProductResponse} from './product-response';
import {UserInfoResponse} from './user-info-response';

export class BasketInfo {
    produit: ProductResponse;
    user: UserInfoResponse;
    quantite: number;

    constructor(produit: ProductResponse, user: UserInfoResponse) {
        this.produit = produit;
        this.user = user;
        this.quantite = 1;
    }
}

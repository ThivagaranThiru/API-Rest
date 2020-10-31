import { User } from './user-model';
import { Produit } from './produit-model';

export class Panier {

    id: number;
    quantite: number;
    user: User;
    produit: Produit;
}

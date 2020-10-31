import { Panier } from './panier-model';
import { Adresse } from './adresse-model';

export class Facturation {

    id: number;
    totalQt: number;
    totalPrix: number;
    payement: string;
    livraison: string;
    panier: Panier;
    adresse: Adresse;
}

import { User } from './user-model';

export class Produit {
    id: number;
    reference: string;
    prix: number;
    nom: string;
    desccription: string;
    stock: number;
    url: string;
    user: User;
}

import { User } from './user-model';
import { Produit } from './produit-model';

export class Commentaire {
    id: number;
    commentaire: string;
    note: number;
    user: User;
    produit: Produit;
}

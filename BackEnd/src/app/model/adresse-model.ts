import { User } from './user-model';

export class Adresse {
    id: number;
    rue: string;
    postalCode: string;
    city: string;
    country: string;
    user: User;
}

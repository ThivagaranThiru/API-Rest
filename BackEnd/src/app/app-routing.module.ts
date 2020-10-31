import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { AdresseComponent } from './adresse/adresse.component';
import { AddAdresseComponent } from './adresse/add-adresse/add-adresse.component';
import { ProduitComponent } from './produit/produit.component';
import { AddProduitComponent } from './produit/add-produit/add-produit.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { AddCommentaireComponent } from './commentaire/add-commentaire/add-commentaire.component';
import { PanierComponent } from './panier/panier.component';
import { FacturationComponent } from './facturation/facturation.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'editUser',
        component: EditUserComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: 'adresse',
        component: AdresseComponent
    },
    {
        path: 'addAdresse',
        component: AddAdresseComponent
    },
    {
        path: 'produit',
        component: ProduitComponent
    },
    {
        path: 'addProduit',
        component: AddProduitComponent
    },
    {
        path: 'commentaire',
        component: CommentaireComponent
    },
        {
        path: 'addCommentaire',
        component: AddCommentaireComponent
    },
    {
        path: 'panier',
        component: PanierComponent
    },
    {
        path: 'facturation',
        component: FacturationComponent
    },
    {
        path: 'profil',
        component: ProfilComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

import { httpInterceptorProviders } from './auth/interceptor';
import { AppRoutingModule } from './app-routing.module';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdresseComponent } from './adresse/adresse.component';
import { AddAdresseComponent } from './adresse/add-adresse/add-adresse.component';
import { ProduitComponent } from './produit/produit.component';
import { AddProduitComponent } from './produit/add-produit/add-produit.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { AddCommentaireComponent } from './commentaire/add-commentaire/add-commentaire.component';
import { PanierComponent } from './panier/panier.component';
import { FacturationComponent } from './facturation/facturation.component';
import { ProfilComponent } from './profil/profil.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserComponent,
    EditUserComponent,
    AdresseComponent,
    AddAdresseComponent,
    ProduitComponent,
    AddProduitComponent,
    CommentaireComponent,
    AddCommentaireComponent,
    PanierComponent,
    FacturationComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

# API Rest

J'ai développé une API Rest avec Spring Boot et deux interface web en Angular. L'API Rest va communiquer avec les interfaces web qui ont en commun les tables suivantes : Utilisateur, Adresse, Produit, Commentaire, Panier, Facturation.

L’application est divisée en trois parties :

- Une API Rest, permettant de manipuler un ensemble de données cohérent.

- Une partie FrontEnd qui va permettre aux clients du site de passer des commandes avec un catalogue représenté par une liste de produits.

- Une partie BackEnd qui va permettre d’administrer le site (créer des utilisateurs, créer /modifier des produits, gérer le stock, etc.).

Les fonctionnalités implémentées sont :

- Un système d'authentification complet avec formulaire d'inscription, de connexion et de gestion des comptes.

- Un utilisateur avec le ROLE_ADMIN doit avoir accès à des sections que les autres utilisateurs ne voient pas (ROLE_USER).

- Une fonctionnalité CRUD sur les Utilisateur, Adresse, Produit, Commentaire, Panier, Facturation en fonction de l'utilisateur connecté et/ou de son rôle. Elles communiquent entre elles grâce à des clés relationnelles.

- Un parcours d’achat de la mise au panier à la validation d’une commande.

- Une fonctionnalité de recherche de Produit et d'Utilisateur par leurs noms respectifs.


Vous pouvez trouver ci-joint notre schéma SQL sur le dépôt git.

Technologies utilisées : Spring Tools Suite 4 (Java), API Rest, MySQL, Spring Security (Tokens JWT), Angular, Node.js, Test Unitaire (MockMvc).


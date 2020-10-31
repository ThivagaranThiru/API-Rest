# API Rest

J'ai développé une API Rest avec Spring Boot et une interface web en Angular. L'API Rest va communiquer avec l'interface web qui est une boutique e-shop avec un parcours d’achat complet (mis au panier, sélection de l'adresse d’envoi) contenant les tables suivantes : Utilisateur, Adresse, Produit, Commentaire, Panier, Facturation.

Les fonctionnalités implémentées sont :

- Un utilisateur peut s’inscrire et se connecter. 

- Un utilisateur avec le ROLE_ADMIN doit avoir accès à des sections que les autres utilisateurs ne voient pas ROLE_USER.

- Une fonctionnalité CRUD sur les Utilisateur, Adresse, Produit, Commentaire, Panier en fonction de l'utilisateur et de son rôle. Elles communiquent entre elles grâce à des clés relationnelles.

- Un parcours d’achat de la mise au panier à la validation d’une commande.

- Une fonctionnalité de recherche de Produit et d'Utilisateur par leurs noms respectifs.


Vous pouvez trouver ci-joint notre schéma SQL sur le dépôt git.

Technologies utilisées : Spring Tools Suite 4 (Java), API Rest, MySQL, Spring Security (Tokens JWT), Angular, Node.js, Test Unitaire (MockMvc)


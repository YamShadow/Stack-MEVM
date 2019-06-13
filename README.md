# Rendu Stack MEVM

Projet tournant sous la stack MEVM.

Utilisation de vuejs pour permettre un isolement et créer une architecture back/front distincte. Projet ultra légé après compilation ( 952 Ko seulement )

## Installation

Pour installer le projet

### Serveur (Node)

- Start Mongodb in your computer
- \$ cd Server
- Configurer un .env
- \$ yarn install
- \$ yarn start

### PWA (VueJS)

- \$ cd pwa
- \$ yarn install
- \$ yarn serve

**/!\ Si jamais le port du serveur est modifier, penser a changer le port de la baseURL dans le fichier main.js**

## Fonctionnalités

- Routes CR de connexion
- Routes CR pour les parties
- Vérification des champs
- Utilisation du Store (vuex)
- Protection des routes (coté front)
- Jeu fonctionnel

## Axe d'amélioration

- Un respect des statuts HTTP (tout passe en 200 actuellement)
  - Création avec un 201
  - Erreur non en 200

## Routes de l'api en GET

### api/auth/

**DESCRIPTION** Liste des routes disponibles pour Auth

    PARAMETRES D'ENTREE

    PARAMETRE DE SORTE
    JSON {
        'Route': {
            '/': 'Liste des routes disponibles',
            '/register': 'Inscription de l'utilisateur',
            '/login': 'Connexion de l'utilisateur',
        }
    }

### api/game/

**DESCRIPTION** Liste des routes disponibles pour le jeu

    PARAMETRES D'ENTREE
    @token             : String, Header

    PARAMETRE DE SORTE
    JSON {
        'Route': {
            '/': 'Liste des routes disponibles',
            '/parties': 'CR des parties',
        }
    }

### api/game/parties

**DESCRIPTION** Liste de l'ensembles des parties disponibles pour l'utilisateur connecté

    PARAMETRES D'ENTREE
    @token             : String, Header

    PARAMETRE DE SORTE
    JSON {
        "message": "",
        "err": null,
        "data": {
            "parties": [
                {

                },
                {

                },
                {

                },
                {

                }
            ]
        }
    }

## Routes de l'api en POST

### /api/auth/register

**DESCRIPTION** Inscription de l'utilisateur

    PARAMETRES D'ENTREE
    @first_name         : String
    @last_name          : String
    @email              : String
    @password           : String

    PARAMETRE DE SORTE
    JSON {
        "message": "",
        "error": {
        },
        "data": null
    }

### /login

**DESCRIPTION** Connexion d'un utilisateur

    PARAMETRES D'ENTREE
    @email              : String
    @password           : String

    PARAMETRE DE SORTE
    JSON {
        "message": "",
        "err": null,
        "data": {
            "user": {
            },
            "token": ""
        }
    }

### api/game/parties

**DESCRIPTION** Création d'une partie

    PARAMETRES D'ENTREE
    @points            : String
    @token             : String, Header

    PARAMETRE DE SORTE
    JSON {
        "message": "",
        "err": null,
        "data": {
        }
    }

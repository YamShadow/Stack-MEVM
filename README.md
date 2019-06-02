# Rendu Stack MEVM

## Installation

Pour installer le projet

### Serveur

- Start Mongodb in your computer
- \$ cd Server
- configurer un .env
- \$ yarn install
- \$ yarn start

### PWA

- \$ cd pwa
- configurer un .env
- \$ yarn install
- \$ yarn serve

## Fonctionnalités

- Routes de connexion
- Routes CR pour les parties
- Vérification des champs

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

**DESCRIPTION** Liste de l'ensembles des parties disponibles

    PARAMETRES D'ENTREE

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

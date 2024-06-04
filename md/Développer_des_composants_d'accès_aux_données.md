### Développer des composants d'accès aux données.

[Social Network](https://github.com/Alann07AS/social_network)

Social Network est une app multicouche. Il est composer de plusieur API:
* Un serveur node d'image
* Un serveur node de chat
* Un serveur node React pour le client
* Un serveur Golang pour les fonctionalitées

Il y a egallement un second serveur chat en Golang qui n'est pas utiliser pour le deploiment global du projet.

```
.
├── app-image-storage
│   ├── images
│   └── node_modules
├── app-social-network
│   └── pkg
├── app-tchat
│   └── node_modules
├── app-ws-chat
│   ├── asset
│   └── pkg
├── client
│   ├── node_modules
│   ├── public
│   └── src
└── database-manager
    ├── database
    └── structs
```

#### app-social-network

```
.
├── Dockerfile
├── go.mod
├── go.sum
├── main.go
└── pkg
    ├── api
    │   ├── comment.go
    │   ├── event.go
    │   ├── group.go
    │   ├── http_methode.go
    │   ├── post.go
    │   └── user.go
    └── server
        ├── config.go
        ├── midleware.go
        └── server.go
```
Source: [API](https://github[.com/Alann07AS/social_network/tree/main/app-social-network/pkg/api), [SERVER](https://github.com/Alann07AS/social_network/tree/main/app-social-network/pkg/server)

Ici "API" est le package utile a la création des controleur des routes alors que "SERVER" est quand a lui utile pour la configuration des routes.
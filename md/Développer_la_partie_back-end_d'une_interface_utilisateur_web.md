### Développer la partie back-end d'une interface utilisateur web.

#### Social Network

Pour la partie Back De Social Network j'ai décider de Crée un package pour gerer la partie base de doner du projet. Celui ci est à la racine du projet au niveau du 'go.work' ce qui me permet de l'utiliser dans chacun des sous programe Golang qui en a besoin.

[Ripo](https://github.com/Alann07AS/social_network)

```
.
├── app-image-storage
├── app-social-network
├── app-tchat
├── app-ws-chat
├── client
├── database-manager
├── docker-compose.yml
├── go.work
├── go.work.sum
└── README.md
```

* [database package](https://github.com/Alann07AS/social_network/tree/main/database-manager)
* [API](https://github.com/Alann07AS/social_network/tree/main/app-social-network)
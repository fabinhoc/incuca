# incuca

## Instalação

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Tecnologias
* [Nuxt](https://nuxtjs.org)
* [Vue](https://vuejs.org)
* [Jest](https://jestjs.io)
* [Vuex](https://vuex.vuejs.org/)
* [Vuetify](https://vuetifyjs.com/en/)

Nuxtjs é um framework para projetos vue open source com intuito de construir uma aplicação mais simples e organizada.

## Link do Projeto
https://incuca.vercel.app/

## O Projeto
O projeto é um contador de piadas que monitora o sentimento de um emoji, conforme as piadas são lidas o sistema muda o sentimento do emoji até chegar no estado de feliz.

## Páginas
O projeto possui três páginas:
* `/` index página inicial simples apresentando um emoji e um botão para iniciar o contador de piadas
* `/start` página simples responsável que dará inicio ao jogo.
* `/joke` página onde aparece as piadas e que irá monitorar o sentimento do emoji.

## Descrição técnica
O projeto foi desenvolvido com as tecnologias conforme mencionado acima, e a ideia é utilizar os conceitos conforme descrito no teste Incuca. Desenvolvido com três páginas para obter transição de rotas, aplicado `Vuetify` para desenvolvimento do design da página e `CSS` puro para desenho do emoji. O projeto basicamente faz a consulta na `API` e retorna uma piada. No código possui gerenciamentos de estados que monitora a quantidade de piadas que foram contadas e um estado que recebe qual "estado" atual do sentimento do emoji, nesse caso, o estado armazena somente a classe que por sua vez enriquecida com código `CSS` e que demonstra o sentimento do emoji. No rodapé do projeto mostra as etapas de emojis que irá passar conforme as piadas são lidas. No fim seguindo o conceito de modal, é exibido o modal com uma mensagem de parabéns e uma chuva de confeti para dar um charme :) na página.




---
layout: post
title: Minha experiência com Laravel
author: Renan Rocha
description: Relatos sobre um novato no framework PHP Laravel.
categories: web
lang: pt-BR
---

![Logo Laravel](https://cdn-images-1.medium.com/max/1201/1*OGCE-B4onkKZyAzf1Ge0Ew.png)

Olá Pessoal!

Há pouco tempo tive a ideia de criar um sistema de gestão de clínica veterinária. Por mais que essa ideia pareça **SUPER** aleatória, eu tenho um motivo pra isso. Mas enfim, motivações a parte, decidi usar o framework [Laravel](https://laravel.com/) para construir esse sistema. Ouvi falar bastante desta ferramenta aqui no trabalho, inclusive vi um amigo mexendo, e achei **SUPER** interessante, porque ela tem muitos recursos que podem ser construidos apenas com um comando no terminal, e de quebra possui um sistema [MVC](https://pt.wikipedia.org/wiki/MVC) muito inteligente, que esta deixando o dev bem fluido e enxuto. Como estou mexendo bastante com essa ferramenta, e consegui em aproximadamente 3 dias construir sistema de login, registro, cadastro de cliente, listagem de animais e menus de navegação, tempo que eu acho **muito curto**, gostaria de compartilhar minha experiência e opinião sobre esta framework que eu mal conheço e já considero pakas.

Laravel é um framework feito em PHP que tem como intuito tornar o desenvolvimento de sistemas de pequeno e médio porte super rápido e eficiente. Ele possui uma ferramenta em linha de comando chamada **Artisan**, que faz com que tarefas como criar classes, models, controllers, fazer migrações e muitas outras funcionalidades que a framework possui, sejam tão dificeis quanto escrever o comando ***php artisan make:model ModelName*** no terminal. Levando em consideração que o meu conhecimento em PHP antes de mexer no Laravel era minimo, eu diria que a ferramenta é realmente simples de manusear, pois consegui fazer muita coisa em pouco tempo. Além do Artisan, o Laravel possui algumas outras bibliotecas e extensões integradas, como o Scout, que é utilizado para a criação de sistemas de busca, entre outros. A praticidade e a eficiência realmente é uma virtude desse projeto.

Não sei se é por que sou noob em PHP e nunca tive contato com outra ferramenta dessa linguagem, apenas a linguagem pura em si, mas alguns recursos me deixou maravilhado. A lista de elementos maravilhantes é:

### Seed + Faker

Seed é um recurso o qual a finalidade é automatizar a criação de dados no banco de dados. Vamos supor que você esta no início do desenvolvimento do seu sistema e precisa sempre estar restaurando a base com dados. Com um Seeder configurado, assim que você limpar o seu banco de dados, é só rodar o comando **php artisan db:seed** (ou php artisan migrate:fresh para derrubar os dados e fazer as migrações automaticamente) que ele criará os dados no banco de acordo com sua configuração. Para mim isso foi muito útil e poupou muito tempo, pois tinha que limpar o db e fazer novamente as migrações constantemente quando eu estava escrevendo as migrations. Mas, vamos incluir também que você precisa de dados em quantidade para fazer seus teste, ou seja, precisa de dados como nome, email, telefone, endereço em grandes quantidades, e que sejam gerados automaticamente. Um outro recurso presente que facilita (e muito) a resolução desse problema é o [Faker](https://github.com/fzaninotto/Faker), que cria os mais variados dados de forma aleatória pra você. Abaixo segue um exemplo de um Seeder utilizando o Faker.

![Laravel Seeder]({{site.url}}/images/Seeder.PNG)

### Artisan

Criar arquivos nas pastas certas dentro do Laravel, por exemplo, exige um certo nível de atenção e conhecimento do FW. Ou até mesmo para realizar migrations, debugs, entre outros, exigemalgum nível de conhecimento dentro da ferramenta. Para tornar tudo mais leve e fácil de mexer, o Artisan veio para chutar a cara das tarefas chatas e trabalhosas de fazer. Este lindo recurso do Laravel literalmente **constroi sistemas com UMA linha de comando**. Esse é o recurso que mais me chamou atenção, uma vez que permite com que você não tenha que fazer trabalhos tediosos que na maior parte das vezes é um tempo inutilizado. São vários comandos que fazer as mais variadas atividades de forma automatizada, então para listar todos os comandos, basta um **php artisan list** para ter acesso as maravilhas que esse recurso ofereçe.

![Laravel Artisan](https://3.bp.blogspot.com/-uXbjWloPCYc/WQpjBplXtpI/AAAAAAAADzU/LGnsAf3wYnE_Y5kkvZk3aNWpySSs5C8FACLcB/s1600/comandos-artisan.jpg)

### Tinker

Você quer verificar se seus models foram criados direitinho ou criar um dado especifico e grava-lo no banco de dados? Essas são tarefas que podem ser realizadas com o pé nas costas com o Tinker! Ele é uma espécie de ferramenta de linha que domando que te permite testar recursos do seu projeto de forma eficiente e descomplicada. Basicamente, todas as funcionalidades que você tiver no seu projeto podem ser testadas através do Tinker. Particularmente acho muito pratico para testar models e trabalhar com dados que rolam dentro do sistema.

![Laravel Tinker](http://www.cdn2.kode-blog.com/images/laraveladmin/laravel_tinker_model_add_record.png)

Entre varias versatilidades que o Laravel ofereçe, os principais pontos positivos na minha opinião foram:

* Fácil criação de recursos do framework através do artisan;
* Sistema **MARAVILHOSO** de model -> controller e renderização de views;
* Com recursos bem estruturados, permite um código muito enxuto e facil de entender;
* fluxo de dados intuitivo para quem conhece o modelo MVC;
* Organização bem estruturada de pastas e sub-pastas;
* Fácil instalação utilizando o composer;

Eu gostaria de fazer uma sessão de pontos negativos, mas realmente essa ferramenta me surpreendeu bastante, então vou deixar esse campo em branco ;D

Para finalizar, recomendo pelo menos um diazinho de exploração pra quem teve interesse em saber mais sobre a ferramenta, pois vai valer bastante a pena!

Até mais!
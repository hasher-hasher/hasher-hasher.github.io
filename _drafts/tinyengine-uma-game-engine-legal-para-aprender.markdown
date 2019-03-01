---
title: TinyEngine - Uma game engine legal para aprender
date: 2019-03-01 19:42:00 Z
---

Olá pessoal!

Nos últimos anos eu tenho alimentado a ideia de dar início a uma game engine. Procurei algumas online que fossem tanto feitas como manipuladas 100% em Python e acabei não achando nenhuma que se encaixassem nesse critério. Tomando isso como ponto de partida, resolvi finalmente dar início a minha própria game engine que fosse tanto construída como manipulada em Python.

[TinyEngine](https://github.com/hasher-hasher/TinyEngine) é uma game engine utilizada via terminal que foi criada com o intuito de ensinar e facilitar o desenvolvimento de jogos simples para pessoas que estão começando a aprender tanto Python quanto desenvolvimento de jogos. Ela é um pequeno módulo que pode ser importado em um arquivo e assim utilizada. É importante salientar que no momento em que este post esta sendo publicado o projeto ainda se encontra em fase inicial de desenvolvimento, portanto ainda não esta 100% utilizável (e inclusive talvez demore um pouco para estar).

Agora vamos falar um pouco sobre o que tem por de trás da lib ...

A TinyEngine foi construída em cima da [Pygame](https://www.pygame.org/news),  que é uma biblioteca Python para criar aplicações multimídia. Esta biblioteca proporciona vários recursos para renderizar imagens, manipular sons, detectar clicks, entre outros, mas eu pessoalmente acredito que é necessário um grande esforço (para iniciantes) para conseguir entender e utilizar a ferramenta. Tendo isso em mente, a TinyEngine, pelo menos inicialmente, tem a intenção de agrupar várias partes de uma finalidade simples em funções. Para criar uma simples tela, por exemplo, usando Pygame puro você teria de escrever muitas verificações, ativar o módulo do display, escolher uma cor de fundo e tamanho de tela, entre outras coisas. Utilizando a TinyEngine, um simples **engine = Engine()** e **engine.run()** já é o necessário para abrir uma janela de fundo preto.

Este é um projeto ao qual eu estou muito feliz de finalmente ter iniciado e espero colher muitos frutos com ele.
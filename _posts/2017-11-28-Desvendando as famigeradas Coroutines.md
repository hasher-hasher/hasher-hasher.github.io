---
title: Desvendando as famigeradas Coroutines
date: 2017-11-28 00:00:00 Z
categories:
- gamedev
layout: post
author: Renan Rocha
description: Tudo sobre essa função poderosa na Unity3D
lang: pt-BR
---

Olá pessoal!

Coroutines são funções comumente utilizadas quando o comportamento desejado requer mais de um frame para ser executado. Ou seja, se você quiser que as instruções programadas dentro de uma função sejam realizadas apenas no frame em que ela é chamada, deverá  simplesmente criar uma função comum. Por outro lado, caso a instrução programada leve mais de um frame para ser executada, como uma animação ou movimentação, ai é a hora da coroutine brilhar!

As coroutines podem ser consideradas uma extensão das funções frame dependent (funções que rodam a cada frame, como a Update e FixedUpdate, por exemplo). Mas, se ela é uma extensão, por que não usar apenas as Update e FixedUpdate? A resposta é simples: nem sempre será facil de programar uma instrução mantendo um código limpo e colocando tudo dentro destas funções! Isso sem contar com o fato de que, em alguns casos, será EXTREMAMENTE complexo programar uma funcionlidade dentro das funções padrões da classe Monobehaviour. Com uma coroutine, seu controle em relação ao comportamento da função será teoricamente completo, o que torna este recurso uma arma poderosa para o controle de determinadas ações.

Feitas as devidas introduções, vamos aprender a como manipular essa belezinha!

# Armazenando Coroutine

Vou começar dando uma dica de ouro para controlar suas coroutines com os recursos do Monobehavior ...
Declare uma variavel do tipo ```Coroutine``` para ter 100% de controle de sua coroutine com as funções StartCoroutine e StopCoroutine

```C#
Coroutine c;
```

A partir de agora, a sua variável **c** será uma referência para a execução de sua coroutine.

# Declarando Coroutine

Agora vamos escrever a nossa coroutine.

```C#
IEnumerator MyCoroutine() {
	while(true) {
		print("Sou uma coroutine e estou sendo executada!");
		yield return new WaitForSeconds(5);
	}
}
```

Agora vamos descobrir o que ela está fazendo.

Eu quero que esta coroutine seja executada repetidas vezes, e que o rate de execução seja de 5 em 5 segundos.

O ```while``` esta sendo utilizado com sua condição como ```true``` por que eu quero que quando eu der start nesta coroutine, ela execute as instruções constantemente, até eu mandar ela parar. Se eu apenas colocar como ```true``` a condição do meu while, o processador entrará num loop infinito e sua Unity irá simplesmente travar por motivos de processamento. Para controlarmos esse comportamento, utilizaremos um dos recursos do yield (instruções que podem ser utilizadas no retorno de uma coroutine) que é o WaitForSeconds. Sua declaração se dá por ```yield return new WaitForSeconds()``` e sua instrução pode ser descrita como "espere X segundos para executar a função novamente".

Esta é a estrutura básica de declaração de uma coroutine, mas vamos aprofundar um pouco nas possibilidades.

# Instruções Yield

YieldInstructions são instruções que podem ser utilizadas para manipular o comportamento de uma coroutine. Entre as instruções disponiveis estão:

* ```WaitForSeconds(X)``` - Após a execução da função, a coroutine só será executada novamente apos X segundos.
* ```WaitForEndOfFrame()``` - Espera até todas as cameras e GUIs serem renderizadas.
* ```WaitForSecondsRealtime(X)``` - Suspende a execução da coroutine durante X segundos, mas despreza o Time.time, ou seja, se o jogo tiver um efeito de tempo, por exemplo, ele irá ignorar a escala de tempo da unity e irá contar em tempo do mundo real.

Para mais informações, consultar [documentação](https://docs.unity3d.com/Manual/index.html)

# Executando uma Coroutine

Depois de programada, para iniciar sua coroutine você deve utilizar a função ```StartCoroutine()```, e como argumento utilize o nome da função como string, ou não.

```C#
c = StartCoroutine(MyCoroutine());
```

<p style="color: red;">OBS: A inicialização por string não suporta argumentos da função, caso sua coroutine possua argumentos.</p>

# Parando uma Coroutine

Utilize a função ```StopCoroutine()``` para parar uma coroutine.

```C#
StopCoroutine(c);
``` 

E aqui é o pulo do gato: Se você apenas inicializar a coroutine sem armazenar em uma variável, ela não pode ser parada pela função ```StopCoroutine```, pois a referência para a execução será perdida. Assim, ela só pode ser parada com alguma instrução de dentro da coroutine!!!

No final, com algumas personalizações por motivos didáticos, o código ficaria mais ou menos assim:

```C#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Temp : MonoBehaviour {

	Coroutine c;

	void Start() {
		c = StartCoroutine (MyCoroutine());
	}

	IEnumerator MyCoroutine() {
		int times = 0;

		while(true) {
			if(times < 5) {
				print ("Estou dentro de uma coroutine!");
			} else {
				print("Esta coroutine foi finalizada!");
				StopCoroutine(c);
			}
			times++;
			yield return new WaitForSeconds (2);
		}
	}
}

```

Este código inicia a coroutine no Start(), printa 5 vezes e na 6° encerra a coroutine.

Caso algo tenha ficado mal explicado ou tenha gerado alguma dúvida, sinta-se livre para perguntar nos comentários! O objetivo é sempre ensinar e não deixar nenhuma ponta solta!

Obrigado pela atenção de todos e até o próximo post :)
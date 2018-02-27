---
layout: post
title: Como configurar dominio GoDaddy para usa-lo com o github-pages
author: Renan Rocha
description: Como configurar seu dominio para usa-lo com o github-pages
categories: webdev
lang: pt-BR
---

Na parte superior direita da página inicial da GoDaddy, clique no seu **perfil** e em seguida em **Gerenciar domínios**.

![Perfil GoDaddy]({{ site.url }}/images/links-rapidos.PNG)

Procure o seu dominio, clique na engrenagem e selecione **Gerenciar DNS**.

![Dominio GoDaddy]({{site.url}}/images/engrenagem-boa.PNG)

Na parte de **Registros**, edite o campo **A** que já esta criado com o valor **@**. No campo de **Apontar para** digite o IP **192.30.252.153** que é o endereço do servidor do Github Pages. Este IP é padrão.

![Alias GoDaddy]({{site.url}}/images/A1.PNG)

Edite o campo **CNAME** que possui o valor **www** no valor do host. No campo **Apontar para** digite o endereço do seu site hospedado no github-pages. no meu caso é **hasher-hasher.github.io**.

![CNAME GoDaddy]({{site.url}}/images/CNAME.PNG)

Crie outro **A** para adicionar a outra opção de IP do servidor do github-pages, e no campo **Apontar para** adicione **192.30.252.154**. Este IP tambem é padrão.

![Alias GoDaddy]({{site.url}}/images/A2.PNG)

A etapa de configuração da GoDaddy esta pronto. Agora vamos para a parte de configuração do seu repositório.

Crie o arquivo chamado **CNAME** no seu projeto.

Nele você deverá escrever o nome do seu domínio comprado na GoDaddy. No meu caso é renanhasher.com.

![CNAME Github Pages]({{site.url}}/images/arquivo-cname.PNG)

### Lembre-se: O nome contido no arquivo CNAME não deve conter **HTTP** ou **WWW**, apenas o nome do dominio comprado!!!

Adicione o arquivo, commite e pushe para seu repositório.

**Pronto**

Seu site deve estar disponivel no seu novo dominio em alguns minutos, mas dependendo do tráfego pode demorar até 48 hrs.
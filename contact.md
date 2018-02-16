---
layout: page
title: Contato
permalink: /contact/
---

<form class="form-desktop form-mobile" action="https://getsimpleform.com/messages?form_api_token={{site.simpleform-token}}" method="POST">
  <div class="form-group">
    <label for="InputName">Nome</label>
    <input name="Name" type="text" class="form-control" id="InputName" aria-describedby="inputName" placeholder="Digite seu nome :)">
  </div>
  <div class="form-group">
    <label for="InputEmail">Email</label>
    <input name="Email" type="email" class="form-control" id="InputEmail" placeholder="Agora seu email :)">
  </div>
  <div class="form-group">
      <label for="FormControlTextarea">Mensagem</label>
      <textarea name="Message" class="form-control" id="FormControlTextarea" rows="5" placeholder="Digite sua mensagem com carinho aqui!"></textarea>
    </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
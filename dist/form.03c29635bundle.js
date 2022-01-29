webpackJsonp([0],{11:function(n,e){function a(){return'<div>\n  \x3c!--Logotipo do TodoList--\x3e\n\n  <div class="center">\n    <img width="100px" src="app/img/loginusuario.svg" />\n  </div>\n\n  \x3c!--Feedback de carregamento (loading)--\x3e\n  <div id="loading">\n    <img src="app/img/loading.gif" alt="Animação de carregamento" />\n  </div>\n\n  \x3c!--Conteúdo destinado para usuários não autenticados--\x3e\n  <div id="auth" class="center">\n    \x3c!--Formulário de autenticação--\x3e\n    <form id="authForm">\n      <h3 id="authFormTitle">Acesse a sua conta para continuar</h3>\n\n      <label for="email">E-mail: </label>\n      <input type="email" placeholder="E-mail" id="email" required />\n\n      <label for="password">Senha: </label>\n      <input type="password" placeholder="Senha" id="password" required />\n\n      <button type="submit" id="submitAuthForm">Logar</button>\n    </form>\n\n    \x3c!--Possibilita a redefiniação de senha--\x3e\n    <p id="passwordReset">\n      Esqueceu a senha?\n      <button class="alternative" onclick="sendPasswordResetEmail()">\n        Redefinir minha senha\n      </button>\n    </p>\n\n    \x3c!--Alternar o fomulário de autenticação para o cadastro de novas contas--\x3e\n    <p id="register">\n      Não possui uma conta?\n      \n      <button onclick="toggleToRegister()" class="alternative">\n        Cadastrar uma nova conta\n      </button>\n    </p>\n\n    \x3c!--Alternar o fomulário de autenticação para o acesso de contas já existentes--\x3e\n    <p id="access" class="startHidden">\n      Já possui uma conta?\n      <button onclick="toggleToAccess()" class="alternative">\n        Acesse a sua conta\n      </button>\n    </p>\n    <br>\n    <p>\n      Ou acesse usando:<br>\n      <img src="app/img/google.png" alt="Logotipo do Google" onclick="signInWithGoogle()">\n      <img src="app/img/github.png" alt="Autenticação pelo GitHub" onclick="signInWithGitHub()">\n      <img src="app/img/facebook.png" alt="Autenticação pelo Facebook" onclick="signInWithFacebook()">\n    </p>\n  </div>\n\n  \x3c!--Conteúdo destinado para usuários autenticados--\x3e\n  <div id="userContent" class="startHidden">\n    <hr />\n    <div id="userInfo" class="center">\n      Olá! Seja bem vindo! <br />\n    </div>\n    <br />\n    <hr />\n    <div id="userInfo" class="center">\n      <img id="userImg">\n      <p id="userName"></p>\n      <p id="userEmail"></p>\n      <p id="emailVerified"></p>\n      <div id="sendEmailVerificationDiv">\n        <button class="alternative" onclick="sendEmailVerification()">\n          Verificar e-mail\n        </button>\n      </div>\n      <button class="alternative" onclick="updateUserName()">Atualizar meu nome</button> <br>\n      <button class="danger" onclick="deleteUserAccount()">Excluir minha conta</button>\n      <button class="alternative" onclick="signOut()">Sair</button>\n    </div>\n  </div>\n  <div id="recaptcha-container"></div>\n</div>'}n.exports=function(n){return a.call(n,n)}},24:function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(11),t=a.n(i);document.getElementById("app").innerHTML=t()()}},[24]);
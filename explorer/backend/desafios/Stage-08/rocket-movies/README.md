<h1 align="center"> Rocket Movies API </h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

[![Node](https://img.shields.io/badge/Node.js-v14.17.0-green)](https://nodejs.org/)&nbsp;
[![Knex](https://img.shields.io/badge/Knex.js-v0.21.21-blue)](https://knexjs.org/)&nbsp;
[![Express](https://img.shields.io/badge/Express.js-v4.17.1-yellow)](https://expressjs.com/)&nbsp;
![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)&nbsp;


## 💻 Projeto
O desáfio é criar uma aplicação em Node.js onde o usuário cadastra um filme, preenche com algumas informações (nome, descrição, nota) e cria tags relacionadas a ele.

- Criptografia de senhas;
- Validação de e-mail;
- Aplicar o cascade para garantir que uma tag será excluída caso o usuário opte por excluir a nota.


## 🔖 Diagrama do projeto

![diagrama](https://github.com/taianekarine/Stage-08-RocketMoviesApi/assets/94652702/2134e2d3-ea7d-40cc-a7cd-bc44f8929d33)

| Tabela de usuários (users) | | Tabela de anotações de um filme (movie_notes) | | Tabela de tags (movie_tags) |
| --- | --- | --- | --- | --- |
| id |  | id |  | id |
| nome do usuário |  | título do filme |  | id da anotação |
| e-mail do usuário |  | descrição do filme |  | id do usuário |
| senha do usuário |  | nota que o usuário deu para o filme* |  | nome da tag** |
| avatar do usuário |  | id do usuário |  |  |
| data de criação |  | data de criação |  |  |
| data de edição |  | data de edição |  |  |

---

Feito com 🧡 by Taiane Karine.

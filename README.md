Frontend CATALOGO


CONFIGURAÇÕES BÁSICAS;

Para instalar o pacote node_modules, utilize o comando: npm install node-modules
Para rodar o projeto, utilize o comando: Yarn start (Para quem possui Yarn) ou npm start para quem possuir apenas o npm


----------------------------------------------------------------------------------------------------------------------------------


SOBRE O PROJETO

O Catalogo de módulos é um projeto que consiste em permitir que os usuários verifiquem as aulas de cada módulo cadastrado pelo administrador.

----------------------------------------------------------------------------------------------------------------------------------


FUNCIONAMENTO

Ao entrar na home page, o usuário consegue ter acesso aos módulos disponíveis e logo após clicar em um dos módulos, as aulas pertencentes a este módulo.

O login autenticado foi implementado para realizar o 'roteamento' da view "/login/" para a view "/painel/", onde foi implementado o PrivateRouter no routes.js no src do projeto.

Após o login, o usuário pode cadastrar, editar e excluir módulos e aulas.


A propriedade de adição de ambos está funcionando perfeitamente.

A propriedade de edição de ambos está funcionando perfeitamente.

A prioriedade de exclusão de ambos, ao clicar em excluir lhe retorna para uma tela dizendo que não há "x" function declarada, porém basta dar um reload que estará funcionando.

O login autenticado, mencionado acima, funciona para acessar o painel, porém as funções do sistema não estão requisitando um token de autenticação e tudo mais, porque não consegui implementar esta parte.

(OBSERVAÇÃO: Este foi o primeiro projeto que desenvolvi em REACT JS)

Todas as views estão responsivas, responsividade e estilização implementadas apenas via css, sem utilização do bootstrap.

----------------------------------------------------------------------------------------------------------------------------------

CONSIDERAÇÕES

Este foi meu primeiro projeto com react, alguns módulos como login autenticado e requisições privadas foram passos que deixei para configurar por último, tamanho
desafio que encontrei nesses 7 dias que tive para conciliar, meu trabalho, faculdade, estudo da linguagaem e implementação.
Agradeço demais a oportunidade e o desafio.



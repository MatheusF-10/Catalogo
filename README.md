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

(OBSERVAÇÃO: Este foi o primeiro projeto que desenvolvi em REACT JS)

Todas as views estão responsivas, responsividade e estilização implementadas apenas via css, sem utilização do bootstrap.

----------------------------------------------------------------------------------------------------------------------------------




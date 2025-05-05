Este é um projeto [Next.js](https://nextjs.org) inicializado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Mega Sena

Este projeto faz parte dos desafios propostos na disciplina de Programação Script que curso.

## Rodando o Projeto

1. O primeiro passo é clonar o repositório no GitHub.
2. Entre na pasta do projeto utilizando ```cd mega-sena```.
3. Utilize o comando ```npm install``` para instalar as dependências caso não as possua.
4. Inicie o servidor de desenvolvimento com ```npm run dev```
5. Abra http://localhost:3000 com seu navegador para ver o resultado, utilizando a rota /mega-sena.


## Principais pontos de estilização

1. Foi utilizado CSS Modules, tornando o projeto mais modular.
2. Foram criados dois componentes que integram o projeto: Botao e Circulo.
3. A estrutura modular permite que cada componente tenha sua responsabilidade e possa ser reutilizado.
4. O layout foi projetado para ser simples.
5. O projeto faz uso do hook ```useState``` para gerenciamento de estado.
6. Funcionalidade principal: geração de 6 números aleatórios de 1 a 60, simulando uma aposta da Mega-Sena.
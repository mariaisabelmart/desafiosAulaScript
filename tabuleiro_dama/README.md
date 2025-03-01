Este é um projeto [Next.js](https://nextjs.org) inicializado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Tabuleiro de Dama

Este projeto faz parte dos desafios propostos na disciplina de Programação Script que curso. 

## Rodando o Projeto

1. O primeiro passo é clonar o repositório no GitHub.
2. Entre na pasta do projeto utilizando ```cd tabuleiro_dama```.
3. Utilize o comando ```npm install``` para instalar as dependências caso não as possua.
4. Inicie o servidor de desenvolvimento com ```npm run dev```
5. Abra http://localhost:3000 com seu navegador para ver o resultado, utilizando a rota /dama.


## Principais pontos de estilização

1. Foram utilizados CSS Modules e Flexbox para a estilização. 
2. Foram criados três componentes que integram o projeto: peças, casas e o tabuleiro em si.
3. Para criar o tabuleiro, os outros dois componentes foram utilizados.
4. O tabuleiro foi criado utilizando loop for, que atribui às linhas (e às colunas), cada uma por sua vez, as cores das casas e as peças.
5. As peças foram representadas por ```<div>```.
6. O layout é responsivo.
7. Foi aplicada uma borda para realçar o tabuleiro no container.
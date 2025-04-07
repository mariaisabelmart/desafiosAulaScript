Este é um projeto [Next.js](https://nextjs.org) inicializado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Calculadora

Este projeto faz parte dos desafios propostos na disciplina de Programação Script que curso.

## Rodando o Projeto

1. O primeiro passo é clonar o repositório no GitHub.
2. Entre na pasta do projeto utilizando ```cd calculadora```.
3. Utilize o comando ```npm install``` para instalar as dependências caso não as possua.
4. Inicie o servidor de desenvolvimento com ```npm run dev```
5. Abra http://localhost:3000 com seu navegador para ver o resultado, utilizando a rota /calculadora.


## Principais pontos de estilização

1. Foram utilizados CSS Modules e Flexbox para a estilização, tornando o projeto mais modular, responsivo e flexível.
2. Foram criados dois componentes que integram o projeto: Botoes e Display.
3. A estrutura modular permite que cada componente tenha sua responsabilidade e possa ser reutilizado.
4. O layout foi projetado para ser totalmente responsivo, ajustando a largura da calculadora a depender da tela do dispositivo em que o projeto está sendo exibido.
5. O projeto faz uso do ```useState``` para gerenciar o estado da calculadora, permitindo manipular a expressão e o resultado no display.
6. Funcionalidades principais: Operações matemáticas básicas (+, -, *, /); Botões de apagar (⌫), limpar (C) e calcular (=); Suporte a números decimais (.).`
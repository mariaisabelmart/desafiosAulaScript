Este é um projeto [Next.js](https://nextjs.org) inicializado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Jogo: Heróis X Vilões

Este projeto faz parte dos desafios propostos na disciplina de Programação Script que curso.

## Rodando o Projeto

1. O primeiro passo é clonar o repositório no GitHub.
2. Entre na pasta do projeto utilizando ```cd herois-e-viloes```.
3. Utilize o comando ```npm install``` para instalar as dependências caso não as possua.
4. Inicie o servidor de desenvolvimento com ```npm run dev```
5. Abra http://localhost:3000 com seu navegador para ver o resultado.


## Principais pontos de estilização

1. Foram utilizados CSS Modules e Flexbox para a estilização.
2. Foi criado o componente Character.js, que renderiza o herói ou o vilão, seus status e botões de ação.
3. Foi utilizado o estilo vintage e temático, inspirado em livros antigos e jogos de RPG de mesa.
4. Os elementos visuais foram estilizados com foco na estética nostálgica, remetendo a uma experiência clássica.
5. As imagens dos personagens são exibidas em molduras com cantos arredondados e fundo claro, remetendo a retratos ilustrados.
6. O uso de transições suaves na barra de vida ajuda a dar fluidez de forma clássica.
7. O layout é responsivo: o layout se adapta bem a diferentes telas, com organização vertical em dispositivos móveis.

## Principais pontos do jogo

1. O jogo é organizado em turnos, onde o herói realiza sua ação, e logo em seguida o vilão realiza uma ação automática.
2. O herói possui as seguintes ações: atacar, defender, usar bandagem ou fugir.
3. O vilão possui as seguintes ações: atacar, defender, usar esporos ou fugir.
4. A ação de atacar reduz a vida do adversário, gerando dano.
5. A ação de defender apenas reduz o dano causado pelo adversário, mas não o anula.
5. A ação de fugir anula o dano causado pelo último ataque do adversário.
6. Usar bandagem (herói) ou esporos (vilão) restaura vida. 
7. Só é possível usar defesa ou fuga imediatamente após um ataque adversário.
8. Só é possível utilizar bandagem (herói) ou esporos (vilão) por três vezes durante o jogo.
9. Só é possível utilizar a fuga duas vezes durante o jogo.
10. Vence quem reduzir a 0 a barra de vida do adversário.
11. É possível reiniciar o jogo a qualquer momento.

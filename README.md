# Portfólio

## Visão Geral do Projeto

Utiliza React, Typescript, Vite.
Criado para exibir meus conhecimentos de maneira visualmente melhor.

## Preview

O objetivo é exibir e divulgar minhas informações de maneira clara, além de aprender durante o desenvolvimento deste portfólio. O projeto contém informações de meus estudos e projetos pessoais.

## Começando

Para iniciar o projeto, siga os passos abaixo:

- Clone o repositório em sua máquina local.
- Acesse a pasta do projeto e rode o comando `npm install`.
  (Etapa temporária, até conseguir rodar o build no CD)
- Na mesma pasta, rode `npm run build`. Rode também sempre que houver uma mudança para ser refletida na tela.
  (Etapa temporária, até conseguir rodar o build no CD)
- Rode o comando `npm run dev`

## Tecnologias e Funcionalidades

### Tecnologias

O projeto inclui as seguintes tecnologias:

- React para construir interfaces de usuário reativas
- TypeScript para desenvolvimento, escalabilidade e segurança de tipo
- Vite para desenvolvimento e construção rápidos e eficientes
- Vitest para testes unitários
- SASS para estruturação do CSS
- TailwindCSS para estilização de UI
- CI/CD para facilitar desenvolvimento contínuo

### Funcionalidades

O projeto possui as seguintes funcionalidades:

- Apresentação do Augusto
- Exibição com filtro de projetos importantes
- Cursos e formação
- Idiomas
- Links úteis para mais detalhes

# Decisões técnicas

## Tecnologias

- TailwindCSS remove a dificuldade que o React impõe no uso de CSS em um escopo local.
- Vitest é uma forma atual e fácil de se realizar testes de componentes.
- União entre TypeScript e React é famosa hoje em dia e um dev front-end deve ter conhecimentos sobre.
- CI/CD é uma forma de facilitar o desenvolvimento através de testes e deploy automatizados em projetos reais.

## Melhorias futuras

- Deixar a foto mais descontraida e quando passar mouse por cima, muda a foto e deixa em algum esquema de carta
- Tooltip do icone do GitHub está sendo cortado pelo fim do dialog
- https://pagespeed.web.dev/analysis/https-portfolio-augusto-piatto-vercel-app/7xulc4tsxd?form_factor=desktop
- Montar os testes
- Melhorar a pipeline de CI/CD
- Subir na Digital Ocean com nginx, não http-server
- Ver gerenciamento de estado e hooks para os componentes nao serem renderizados mais de uma vez

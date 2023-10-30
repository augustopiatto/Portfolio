# Portfólio

## Visão Geral do Projeto

Utiliza React, Typescript, Vite.
Criado para exibir meus conhecimentos de maneira visualmente melhor.

## Preview

O projeto contém informações de meus estudos e projetos pessoais.

## Tecnologias e Funcionalidades

### Tecnologias

O projeto inclui as seguintes tecnologias:

- React para construir interfaces de usuário reativas
- TypeScript para desenvolvimento, escalabilidade e segurança de tipo
- Vite para desenvolvimento e construção rápidos e eficientes
- Vitest para testes unitários
- SASS para estruturação do CSS
- TailwindCSS para estilização de UI

### Funcionalidades

O projeto possui as seguintes funcionalidades:

- useContext
- Eventos
- Injection

# Decisões técnicas

## Tecnologias

- TailwindCSS remove a dificuldade que o React impõe no uso de CSS em um escopo local.
- Vitest é uma forma atual e fácil de se realizar testes de componentes.
- União entre TypeScript e React é famosa hoje em dia e um dev front-end deve ter conhecimentos sobre.

## Melhorias futuras

- Animações no Warning
- Mudança para carrousel na parte de projetos e cursos quando usuário estiver em Mobile
- Espaçamento entre faculdade, tipo de graduação e nota fianl (ver maneira melhor de se fazer isso)
- Desenhar a parte de expansão dos cards
- Montar os testes
- Montar a pipeline de CI/CD
- Corrigir os cursos antigos que estão incompletos

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
